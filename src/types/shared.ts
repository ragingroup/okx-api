/**
 * 共享类型定义
 * 
 * 这些类型在整个OKX API SDK中被广泛使用
 */

/**
 * API凭证接口
 * 
 * 用于配置OKX API的认证信息
 * 
 * @property apiKey - API密钥，用于标识API用户
 * @property apiSecret - API密钥对应的密钥，用于签名验证
 * @property apiPass - API密码，用于API访问权限验证
 * 
 * 使用方式：
 * const credentials: APICredentials = {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret', 
 *   apiPass: 'your-api-pass'
 * };
 */
export interface APICredentials {
  /** API密钥 */
  apiKey: string;
  /** API密钥对应的密钥 */
  apiSecret: string;
  /** API密码 */
  apiPass: string;
}

/**
 * API市场类型
 * 
 * 定义OKX API的不同环境
 * 
 * - 'prod': 生产环境，正式交易
 * - 'business': 商业环境
 * - 'demo': 演示环境，用于测试
 * - 'businessDemo': 商业演示环境
 * 
 * 使用方式：
 * const market: APIMarket = 'demo'; // 使用演示环境
 */
export type APIMarket = 'prod' | 'business' | 'demo' | 'businessDemo';
