/**
 * 浏览器环境支持模块
 * 
 * 提供浏览器环境特有的功能，如Web Crypto API的加密签名等
 * 这是Node.js环境的替代方案，确保SDK在浏览器中也能正常工作
 */

import { neverGuard } from './typeGuards';

/**
 * 将ArrayBuffer转换为Base64字符串
 * 
 * @param buffer - 待转换的ArrayBuffer
 * @returns string - Base64编码的字符串
 * 
 * @private
 */
function bufferToB64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return globalThis.btoa(binary);
}

/** 签名编码方法类型 */
export type SignEncodeMethod = 'hex' | 'base64';
/** 签名算法类型 */
export type SignAlgorithm = 'SHA-256' | 'SHA-512';

/**
 * 使用Web Crypto API签名消息
 * 
 * 这是浏览器环境下的消息签名函数，使用Web Crypto API的HMAC算法
 * 功能与Node.js环境的signMessage函数相同，但使用浏览器原生的加密API
 * 
 * @param message - 待签名的消息字符串
 * @param secret - 用于签名的密钥（通常是API Secret）
 * @returns Promise<string> - Base64编码的签名结果
 * 
 * 签名过程：
 * 1. 使用Web Crypto API的HMAC-SHA256算法
 * 2. 以secret作为密钥
 * 3. 对message进行哈希计算
 * 4. 返回Base64编码的结果
 * 
 * 使用方式：
 * const signature = await signMessage('timestamp+method+endpoint+params', 'your-api-secret');
 * 
 * 注意：此函数仅在支持Web Crypto API的现代浏览器中可用
 * 如果需要支持旧版浏览器，可能需要使用polyfill
 */
export async function signMessage(
  message: string,
  secret: string,
): Promise<string> {
  const encoder = new TextEncoder();
  const method: SignEncodeMethod = 'base64';
  const algorithm: SignAlgorithm = 'SHA-256';

  const key = await globalThis.crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: algorithm },
    false,
    ['sign'],
  );

  const buffer = await globalThis.crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(message),
  );

  switch (method) {
    // case 'hex': {
    //   return Array.from(new Uint8Array(buffer))
    //     .map((byte) => byte.toString(16).padStart(2, '0'))
    //     .join('');
    // }
    case 'base64': {
      return bufferToB64(buffer);
    }
    default: {
      throw neverGuard(method, `Unhandled sign method: "${method}"`);
    }
  }
}
