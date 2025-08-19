/**
 * WebSocket事件类型定义
 * 
 * 定义WebSocket连接中的各种事件类型和数据结构
 */

import { WsChannel } from './request';

/**
 * WebSocket基础事件接口
 * 
 * 所有WebSocket事件的基础结构
 */
export interface WsEvent {
  /** 事件类型 */
  event: 'error' | 'login' | 'subscribe' | 'unsubscribe' | 'channel-conn-count';
  /** 事件代码（可选） */
  code?: string;
  /** 事件消息（可选） */
  msg?: string;
  /** 事件参数（可选） */
  arg?: any;
  /** 事件数据（可选） */
  data?: any;
}

/**
 * WebSocket数据事件接口
 * 
 * 用于传输实际数据的WebSocket事件
 * 
 * @template T - 数据类型
 */
export interface WsDataEvent<T = any> {
  /** 事件参数 */
  arg: {
    /** 频道名称 */
    channel: WsChannel;
    /** 用户ID（可选） */
    uid?: string;
    /** 产品ID（可选） */
    instId?: string;
    /** 产品系列（可选） */
    instFamily?: string;
  };
  /** 事件数据 */
  data: T;
}

/**
 * WebSocket登录事件接口
 * 
 * 扩展自WsEvent，专门用于登录事件
 */
export interface WsLoginEvent extends WsEvent {
  /** 事件类型固定为'login' */
  event: 'login';
}

/**
 * WebSocket频道连接信息事件接口
 * 
 * 扩展自WsEvent，用于频道连接计数信息
 */
export interface WsChannelConnInfoEvent extends WsEvent {
  /** 事件类型固定为'channel-conn-count' */
  event: 'channel-conn-count';
  /** 频道名称 */
  channel: string;
  /** 连接ID */
  connId: string;
  /** 连接计数 */
  connCount: string;
}

/** WebSocket响应类型别名 */
export type WsResponse = WsEvent;
