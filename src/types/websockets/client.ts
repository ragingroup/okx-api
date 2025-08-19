/**
 * WebSocket客户端配置类型定义
 * 
 * 定义WebSocket客户端的配置选项和参数
 */

import { APICredentials, APIMarket } from '../shared';

/**
 * WebSocket客户端可配置选项接口
 * 
 * 用于配置WebSocket客户端的基本行为
 */
export interface WSClientConfigurableOptions {
  /** API账户凭证数组，用于私有频道的认证 */
  accounts?: APICredentials[];

  /**
   * 此客户端应连接到的API组
   * 
   * 可选值：
   * - 'prod': 生产环境（默认）
   * - 'aws': AWS环境
   * - 'demo': 演示环境
   */
  market?: APIMarket;

  /** Pong响应超时时间（毫秒） */
  pongTimeout?: number;
  /** Ping发送间隔（毫秒） */
  pingInterval?: number;
  /** 重连超时时间（毫秒） */
  reconnectTimeout?: number;
  /** 请求选项 */
  requestOptions?: any;
  /** 自定义WebSocket URL */
  wsUrl?: string;
}

/**
 * WebSocket客户端选项接口
 * 
 * 扩展自WSClientConfigurableOptions，包含必需的配置项
 */
export interface WebsocketClientOptions extends WSClientConfigurableOptions {
  /** API市场类型（必需） */
  market: APIMarket;
  /** Pong响应超时时间（必需） */
  pongTimeout: number;
  /** Ping发送间隔（必需） */
  pingInterval: number;
  /** 重连超时时间（必需） */
  reconnectTimeout: number;
}
