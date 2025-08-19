/**
 * 类型守卫工具函数
 * 
 * 提供一系列TypeScript类型守卫函数，用于在运行时验证数据类型
 * 这些函数帮助确保类型安全，特别是在处理API响应和WebSocket事件时
 */

import { WsDataEvent, WsEvent, WsLoginEvent } from '../types';
import { APIResponse } from '../types/rest';

/**
 * 检查响应是否为原始API响应格式
 * 
 * @param response - 待检查的响应对象
 * @returns 如果响应具有标准的API响应结构则返回true
 * 
 * 标准API响应结构包含：
 * - code: 响应状态码
 * - msg: 响应消息
 * - data: 响应数据
 * 
 * 使用方式：
 * if (isRawAPIResponse(response)) {
 *   // response现在被类型守卫为APIResponse<unknown>
 *   console.log(response.code, response.msg);
 * }
 */
export function isRawAPIResponse(
  response: unknown,
): response is APIResponse<unknown> {
  if (typeof response !== 'object' || !response) {
    return false;
  }

  if ('code' in response && 'msg' in response && 'data' in response) {
    return true;
  }

  return false;
}

/**
 * 检查是否为WebSocket事件
 * 
 * @param evtData - 待检查的事件数据
 * @returns 如果数据具有WebSocket事件结构则返回true
 * 
 * WebSocket事件结构包含：
 * - event: 事件类型
 * 
 * 使用方式：
 * if (isWsEvent(eventData)) {
 *   // eventData现在被类型守卫为WsEvent
 *   console.log(eventData.event);
 * }
 */
export function isWsEvent(evtData: unknown): evtData is WsEvent {
  if (typeof evtData !== 'object' || !evtData) {
    return false;
  }

  if ('event' in evtData) {
    return true;
  }

  return false;
}

/**
 * 检查是否为WebSocket数据事件
 * 
 * @param evtData - 待检查的事件数据
 * @returns 如果数据具有WebSocket数据事件结构则返回true
 * 
 * WebSocket数据事件结构包含：
 * - arg: 事件参数
 * - data: 事件数据
 * 
 * 使用方式：
 * if (isWsDataEvent(eventData)) {
 *   // eventData现在被类型守卫为WsDataEvent
 *   console.log(eventData.arg, eventData.data);
 * }
 */
export function isWsDataEvent(evtData: unknown): evtData is WsDataEvent {
  if (typeof evtData !== 'object' || !evtData) {
    return false;
  }

  if ('arg' in evtData && 'data' in evtData) {
    return true;
  }
  return false;
}

/**
 * 检查是否为WebSocket错误事件
 * 
 * @param evt - 待检查的事件
 * @returns 如果是错误事件则返回true
 */
export function isWsErrorEvent(evt: unknown): boolean {
  return isWsEvent(evt) && evt.event === 'error';
}

/**
 * 检查是否为WebSocket登录事件
 * 
 * 通常是对WebSocket认证的响应
 * 
 * @param evt - 待检查的事件
 * @returns 如果是登录事件则返回true
 * 
 * 使用方式：
 * if (isWsLoginEvent(event)) {
 *   // event现在被类型守卫为WsLoginEvent
 *   console.log('登录成功');
 * }
 */
export function isWsLoginEvent(evt: unknown): evt is WsLoginEvent {
  return isWsEvent(evt) && evt.event === 'login';
}

/**
 * 检查是否为WebSocket订阅事件
 * 
 * 对订阅频道的响应
 * 
 * @param evtData - 待检查的事件数据
 * @returns 如果是订阅事件则返回true
 */
export function isWsSubscribeEvent(evtData: unknown): boolean {
  return isWsEvent(evtData) && evtData.event === 'subscribe';
}

/**
 * 检查是否为WebSocket取消订阅事件
 * 
 * 对取消订阅频道的响应
 * 
 * @param evtData - 待检查的事件数据
 * @returns 如果是取消订阅事件则返回true
 */
export function isWsUnsubscribeEvent(evtData: unknown): boolean {
  return isWsEvent(evtData) && evtData.event === 'unsubscribe';
}

/**
 * 检查是否为连接计数事件
 * 
 * 信息事件类型
 * 
 * @param evtData - 待检查的事件数据
 * @returns 如果是连接计数事件则返回true
 */
export function isConnCountEvent(evtData: unknown): boolean {
  return isWsEvent(evtData) && evtData.event === 'channel-conn-count';
}

/**
 * 永不期望到达的代码的类型守卫
 * 
 * 如果代码执行到这里会抛出TypeScript错误
 * 通常用于switch语句的default分支或exhaustive检查
 * 
 * @param x - 永不期望的值
 * @param msg - 错误消息
 * @returns 错误对象
 * 
 * 使用方式：
 * switch (status) {
 *   case 'pending': return '处理中';
 *   case 'completed': return '已完成';
 *   default: throw neverGuard(status, '未知状态');
 * }
 */
export function neverGuard(x: never, msg: string): Error {
  return new Error(`Unhandled value exception "${x}", ${msg}`);
}
