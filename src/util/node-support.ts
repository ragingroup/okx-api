/**
 * Node.js环境支持模块
 * 
 * 提供Node.js环境特有的功能，如加密签名等
 */

import { createHmac } from 'crypto';

/**
 * 使用HMAC-SHA256算法签名消息
 * 
 * 这是OKX API认证的核心函数，用于生成请求签名
 * 
 * @param message - 待签名的消息字符串
 * @param secret - 用于签名的密钥（通常是API Secret）
 * @returns string - Base64编码的签名结果
 * 
 * 签名过程：
 * 1. 使用HMAC-SHA256算法
 * 2. 以secret作为密钥
 * 3. 对message进行哈希计算
 * 4. 返回Base64编码的结果
 * 
 * 使用方式：
 * const signature = signMessage('timestamp+method+endpoint+params', 'your-api-secret');
 * 
 * 注意：此函数仅在Node.js环境中可用，浏览器环境需要使用browser-support.ts
 */
export function signMessage(message: string, secret: string): string {
  return createHmac('sha256', secret).update(message).digest('base64');
}
