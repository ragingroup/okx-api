/**
 * 请求工具函数模块
 * 
 * 提供REST API请求相关的工具函数，包括：
 * - 参数序列化
 * - 基础URL获取
 * - WebSocket心跳检测
 */

import { Method } from 'axios';

import { APIMarket, RestClientOptions } from '../types';

/**
 * 序列化请求参数
 * 
 * 根据HTTP方法将参数转换为适当的格式：
 * - GET请求：转换为查询字符串
 * - 其他方法：转换为JSON字符串
 * 
 * @param params - 请求参数对象
 * @param method - HTTP方法
 * @param strict_validation - 是否启用严格验证（默认false）
 * @returns string - 序列化后的参数字符串
 * 
 * @throws {Error} 当启用严格验证且参数值为undefined时
 * 
 * 使用方式：
 * const queryString = serializeParams({ symbol: 'BTC-USDT', limit: 100 }, 'GET');
 * // 结果: "?symbol=BTC-USDT&limit=100"
 * 
 * const jsonBody = serializeParams({ symbol: 'BTC-USDT', side: 'buy' }, 'POST');
 * // 结果: '{"symbol":"BTC-USDT","side":"buy"}'
 */
export function serializeParams(
  params: object | undefined,
  method: Method,
  strict_validation = false,
): string {
  if (!params) {
    return '';
  }

  if (method !== 'GET') {
    return JSON.stringify(params);
  }

  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key];
      if (strict_validation === true && typeof value === 'undefined') {
        throw new Error(
          'Failed to sign API request due to undefined parameter',
        );
      }
      return `${key}=${value}`;
    })
    .join('&');

  // Prevent trailing `?` if no params are provided
  return queryString ? '?' + queryString : queryString;
}

/** 程序标识键名 */
export const programKey = 'tag';
/** 程序标识值 */
export const programId = '159881cb7207BCDE';

/**
 * 获取REST API基础URL
 * 
 * 根据市场类型和客户端选项返回相应的API基础URL
 * 
 * @param market - API市场类型（prod、demo等）
 * @param restClientOptions - REST客户端配置选项
 * @returns string - API基础URL
 * 
 * 使用方式：
 * const baseUrl = getRestBaseUrl('prod', {});
 * // 结果: "https://www.okx.com"
 * 
 * const customUrl = getRestBaseUrl('prod', { baseUrl: 'https://custom.okx.com' });
 * // 结果: "https://custom.okx.com"
 */
export function getRestBaseUrl(
  market: APIMarket,
  restClientOptions: RestClientOptions,
) {
  if (restClientOptions.baseUrl) {
    return restClientOptions.baseUrl;
  }

  switch (market) {
    default:
    case 'demo':
    case 'prod': {
      return 'https://www.okx.com';
    }
  }
}

/**
 * 检查是否为WebSocket心跳响应
 * 
 * 检测WebSocket连接的心跳机制响应，包括ping/pong消息
 * 
 * @param response - WebSocket响应对象
 * @returns boolean - 如果是心跳响应则返回true
 * 
 * 支持的心跳格式：
 * - 标准ping/pong: { pong: true } 或 { ping: true }
 * - 自定义格式: { request: { op: 'ping' }, ret_msg: 'pong', success: true }
 * 
 * 使用方式：
 * if (isWsPong(response)) {
 *   console.log('收到心跳响应');
 * }
 */
export function isWsPong(response: any) {
  if (response.pong || response.ping) {
    return true;
  }
  return (
    response.request &&
    response.request.op === 'ping' &&
    response.ret_msg === 'pong' &&
    response.success === true
  );
}
