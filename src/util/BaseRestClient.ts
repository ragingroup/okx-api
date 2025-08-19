/**
 * REST API客户端基类
 * 
 * 提供OKX REST API的基础功能，包括：
 * - HTTP请求处理
 * - 认证签名
 * - 错误处理
 * - 请求配置管理
 * 
 * 这是一个抽象基类，具体的API客户端应该继承此类
 */

import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import https from 'https';

import { APIResponse, RestClientOptions } from '../types';
import { signMessage } from './node-support';
import {
  getRestBaseUrl,
  programId,
  programKey,
  serializeParams,
} from './requestUtils';
import { isRawAPIResponse } from './typeGuards';

// axios.interceptors.request.use((request) => {
//   console.log(new Date(), 'Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   // console.log(new Date(), 'Response:', JSON.stringify(response, null, 2));
//   console.log(
//     new Date(),
//     'Response:',
//     JSON.stringify(
//       {
//         data: response.data,
//         headers: response.headers,
//       },
//       null,
//       2,
//     ),
//   );
//   return response;
// });

/**
 * 缺少凭证错误消息
 * 当私有端点需要API凭证但未提供时抛出
 */
export const MISSING_CREDENTIALS_ERROR =
  'Private endpoints require api and secret to be provided in the REST client constructor';

/**
 * 签名请求接口
 * 
 * @template T - 请求体类型
 */
interface SignedRequest<T> {
  /** 请求体数据 */
  requestBody: T | undefined;
  /** HTTP方法 */
  method: Method;
  /** API端点 */
  endpoint: string;
  /** 签名 */
  sign: string;
}

/**
 * REST API客户端基类
 * 
 * 提供统一的REST API调用接口，包括认证、请求处理和响应解析
 * 
 * 主要功能：
 * - 管理API凭证和配置
 * - 处理HTTP请求和响应
 * - 实现请求签名认证
 * - 提供统一的错误处理
 * 
 * 使用方式：
 * class MyRestClient extends BaseRestClient {
 *   constructor(options: RestClientOptions) {
 *     super(options);
 *   }
 *   
 *   async getAccountBalance() {
 *     return this.getPrivate('/api/v5/account/balance');
 *   }
 * }
 */
export default abstract class BaseRestClient {
  /** 客户端配置选项 */
  private options: RestClientOptions;

  /** API基础URL */
  private baseUrl: string;

  /** 全局请求配置 */
  private globalRequestOptions: AxiosRequestConfig;

  /** API密钥 */
  private apiKey: string | undefined;

  /** API密钥对应的密钥 */
  private apiSecret: string | undefined;

  /** API密码 */
  private apiPassphrase: string | undefined;

  /**
   * 构造函数
   * 
   * @param options - REST客户端配置选项
   * @param requestOptions - Axios请求配置选项
   * 
   * @throws {Error} 当提供部分凭证但未提供全部凭证时
   */
  constructor(
    options: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    // this.environment = environment;

    this.options = {
      // if true, we'll throw errors if any params are undefined
      strict_param_validation: false,
      ...options,
    };

    this.baseUrl = getRestBaseUrl(options.market || 'prod', options);

    const hasOneCredential =
      options.apiKey || options.apiSecret || options.apiPass;
    const hasAllCredentials =
      !!options.apiKey && !!options.apiSecret && !!options.apiPass;

    // Allow empty object
    if (hasOneCredential && !hasAllCredentials) {
      throw new Error(
        'API Key, Secret AND Passphrase are ALL required for private enpoints',
      );
    }

    this.globalRequestOptions = {
      // in ms == 5 minutes by default
      timeout: 1000 * 60 * 5,
      // custom request options based on axios specs - see: https://github.com/axios/axios#request-config
      ...requestOptions,
    };

    if (!this.globalRequestOptions.headers) {
      this.globalRequestOptions.headers = {};
    }

    //  Note: `x-simulated-trading: 1` needs to be added to the header of the Demo Trading request.
    if (options.market === 'demo') {
      this.globalRequestOptions.headers['x-simulated-trading'] = 1;
    }

    this.globalRequestOptions.headers['Content-Type'] = 'application/json';
    this.globalRequestOptions.headers['Accept'] = 'application/json';

    // If enabled, configure a https agent with keepAlive enabled
    if (this.options.keepAlive) {
      // Extract existing https agent parameters, if provided, to prevent the keepAlive flag from overwriting an existing https agent completely
      const existingHttpsAgent = this.globalRequestOptions.httpsAgent as
        | https.Agent
        | undefined;
      const existingAgentOptions = existingHttpsAgent?.options || {};

      // For more advanced configuration, raise an issue on GitHub or use the "requestOptions"
      // parameter to define a custom httpsAgent with the desired properties
      this.globalRequestOptions.httpsAgent = new https.Agent({
        ...existingAgentOptions,
        keepAlive: true,
        keepAliveMsecs: this.options.keepAliveMsecs,
      });
    }

    this.apiKey = options?.apiKey;
    this.apiSecret = options?.apiSecret;
    this.apiPassphrase = options?.apiPass;
  }

  /**
   * 发送GET请求到公共端点
   * 
   * @param endpoint - API端点路径
   * @param params - 查询参数
   * @returns Promise<any> - API响应数据
   */
  public get(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, true);
  }

  /**
   * 发送POST请求到公共端点
   * 
   * @param endpoint - API端点路径
   * @param params - 请求体参数
   * @returns Promise<any> - API响应数据
   */
  public post(endpoint: string, params?: any) {
    return this._call('POST', endpoint, params, true);
  }

  /**
   * 发送GET请求到私有端点（需要认证）
   * 
   * @param endpoint - API端点路径
   * @param params - 查询参数
   * @returns Promise<any> - API响应数据
   * 
   * @throws {Error} 当缺少API凭证时
   */
  public getPrivate(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, false);
  }

  /**
   * 发送POST请求到私有端点（需要认证）
   * 
   * @param endpoint - API端点路径
   * @param params - 请求体参数
   * @returns Promise<any> - API响应数据
   * 
   * @throws {Error} 当缺少API凭证时
   */
  public postPrivate(endpoint: string, params?: any) {
    return this._call(
      'POST',
      endpoint,
      Array.isArray(params)
        ? params.map((p) => ({ ...p, [programKey]: programId }))
        : { ...params, [programKey]: programId },
      false,
    );
  }

  /**
   * 发送DELETE请求到私有端点（需要认证）
   * 
   * @param endpoint - API端点路径
   * @param params - 请求体参数
   * @returns Promise<any> - API响应数据
   * 
   * @throws {Error} 当缺少API凭证时
   */
  public deletePrivate(endpoint: string, params?: any) {
    return this._call('DELETE', endpoint, params, false);
  }

  /**
   * 向特定端点发送HTTP请求
   * 
   * 私有端点会自动进行签名认证
   * 
   * @param method - HTTP方法（GET、POST、DELETE等）
   * @param endpoint - API端点路径
   * @param params - 请求参数
   * @param isPublicApi - 是否为公共API（true为公共，false为私有）
   * @returns Promise<any> - API响应数据
   * 
   * @private
   */
  private async _call(
    method: Method,
    endpoint: string,
    params: object | undefined,
    isPublicApi: boolean,
  ): Promise<any> {
    const options = {
      ...this.globalRequestOptions,
      url: [this.baseUrl, endpoint].join(endpoint.startsWith('/') ? '' : '/'),
      method: method,
      json: true,
    };

    // Delete any params without value
    for (const key in params) {
      if (typeof params[key] === 'undefined') {
        delete params[key];
      }
    }

    const tsISO = new Date().toISOString();
    const signResult = await this.signRequest(
      isPublicApi,
      tsISO,
      method,
      endpoint,
      params,
    );

    if (!options.headers) {
      options.headers = {};
    }

    if (!isPublicApi) {
      options.headers['OK-ACCESS-KEY'] = this.apiKey;
      options.headers['OK-ACCESS-SIGN'] = signResult.sign;
      options.headers['OK-ACCESS-TIMESTAMP'] = tsISO;
      options.headers['OK-ACCESS-PASSPHRASE'] = this.apiPassphrase;
    }

    if (method === 'GET') {
      options.params = signResult.requestBody;
    } else {
      options.data = signResult.requestBody;
    }

    // console.log(new Date(), 'request: ', {
    // url: options.url,
    // method,
    // params: signResult.requestBody,
    // sign: signResult.sign,
    //   options,
    // });

    return axios(options)
      .then((response: AxiosResponse<APIResponse<unknown>>) => {
        // Check this is an API response without an error code.
        // If so, resolve the nested data property, else throw the full response body
        if (
          isRawAPIResponse(response.data) &&
          response.status == 200 &&
          response.data?.code === '0'
        ) {
          return response.data.data;
        }

        // console.log('request: ', JSON.stringify(options, null, 2));
        // console.log(
        //   'bad response: ',
        //   JSON.stringify(
        //     {
        //       data: response.data,
        //       headers: response.headers,
        //     },
        //     null,
        //     2
        //   )
        // );

        // Also throw if API returned error code
        // This API error thrown by the exchange will be post-processed by the exception parser
        throw { response };
      })
      .catch((e) => this.parseException(e));
  }

  /**
   * 签名请求
   * 
   * 为私有API请求生成数字签名，确保请求的完整性和认证性
   * 
   * @template T - 请求参数类型
   * @param isPublicApi - 是否为公共API
   * @param tsISO - ISO格式的时间戳
   * @param method - HTTP方法
   * @param endpoint - API端点
   * @param params - 请求参数
   * @returns Promise<SignedRequest<T>> - 包含签名的请求对象
   * 
   * @throws {Error} 当缺少API凭证时
   * 
   * @private
   */
  private async signRequest<T extends object>(
    isPublicApi: boolean,
    tsISO: string,
    method: Method,
    endpoint: string,
    params: T | undefined,
  ): Promise<SignedRequest<T>> {
    const res: SignedRequest<T> = {
      requestBody: params,
      method,
      endpoint,
      sign: '',
    };

    if (isPublicApi) {
      return res;
    }

    if (!this.apiKey || !this.apiSecret || !this.apiPassphrase) {
      throw new Error(MISSING_CREDENTIALS_ERROR);
    }

    const serializedParams = serializeParams(
      params,
      method,
      this.options.strict_param_validation,
    );

    const message = tsISO + method + endpoint + serializedParams;
    // console.log(new Date(), `Sign params: `, {
    //   message,
    //   secret: this.apiSecret,
    // });

    return {
      ...res,
      sign: await signMessage(message, this.apiSecret),
    };
  }

  /**
   * 通用异常解析处理器
   * 
   * 解析请求过程中产生的各种异常，包括网络错误、API错误等
   * 
   * @param e - 异常对象
   * @returns unknown - 解析后的异常信息
   * 
   * @private
   */
  private parseException(e: any): unknown {
    if (this.options.parse_exceptions === false) {
      throw e;
    }

    // Something happened in setting up the request that triggered an Error
    if (!e.response) {
      if (!e.request) {
        throw e.message;
      }

      // request made but no response received
      throw e;
    }

    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const response: AxiosResponse = e.response;
    throw response.data;
    // throw {
    //   status: response.status,
    //   statusText: response.statusText,
    //   data: response.data,
    //   headers: response.headers,
    //   requestOptions: this.options,
    // };
  }
}
