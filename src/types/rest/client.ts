/**
 * REST客户端配置类型定义
 * 
 * 定义REST API客户端的配置选项和参数
 */

import { APIMarket } from '../shared';

/**
 * REST客户端配置选项接口
 * 
 * 用于配置REST API客户端的行为和连接参数
 */
export interface RestClientOptions {
  /** API密钥，用于标识API用户 */
  apiKey?: string;
  /** API密钥对应的密钥，用于签名验证 */
  apiSecret?: string;
  /** API密码，用于API访问权限验证 */
  apiPass?: string;

  /** API市场类型，决定使用哪个API环境 */
  market?: APIMarket;

  /**
   * 严格参数验证
   * 
   * 默认值：false
   * 如果设置为true，当任何参数为undefined时会抛出错误
   */
  strict_param_validation?: boolean;

  /**
   * 可选地覆盖API协议和域名
   * 
   * 例如：'https://api.bytick.com'
   * 如果不设置，将使用默认的OKX API域名
   */
  baseUrl?: string;

  /**
   * 是否尝试后处理请求异常
   * 
   * 默认值：true
   * 如果设置为false，异常将直接抛出而不进行后处理
   */
  parse_exceptions?: boolean;

  /**
   * 为REST API请求启用keep alive（通过axios）
   * 
   * 启用HTTP KeepAlive可以提高连接效率，减少连接建立的开销
   */
  keepAlive?: boolean;

  /**
   * 使用HTTP KeepAlive时，在保持活跃的socket上发送TCP KeepAlive包的频率
   * 
   * 默认值：1000（毫秒）
   * 仅在keepAlive设置为true时相关
   * 默认值来自https agent
   */
  keepAliveMsecs?: number;
}
