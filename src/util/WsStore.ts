/**
 * WebSocket连接存储管理类
 * 
 * 管理多个WebSocket连接的状态，包括：
 * - 连接状态跟踪
 * - 主题订阅管理
 * - 心跳定时器管理
 * - 重连机制
 */

import WebSocket from 'isomorphic-ws';

import { DefaultLogger } from './logger';
import { WsKey } from './websocket-util';

/**
 * WebSocket连接状态枚举
 * 
 * 定义WebSocket连接的生命周期状态
 */
export enum WsConnectionStateEnum {
  /** 初始状态 */
  INITIAL = 0,
  /** 连接中 */
  CONNECTING = 1,
  /** 已连接 */
  CONNECTED = 2,
  /** 关闭中 */
  CLOSING = 3,
  /** 重连中 */
  RECONNECTING = 4,
  // ERROR = 5,
}

/** WebSocket主题类型，始终是字符串 */
type WsTopic = string;

/**
 * WebSocket存储状态接口
 * 
 * 跟踪每个WebSocket连接的完整状态信息
 * 
 * @template WSTopic - 主题类型
 */
interface WsStoredState<WSTopic> {
  /** 当前活跃的WebSocket连接 */
  ws?: WebSocket;
  /** 连接的当前生命周期状态 */
  connectionState?: WsConnectionStateEnum;
  /** 发送上游心跳（ping）的定时器 */
  activePingTimer?: ReturnType<typeof setTimeout> | undefined;
  /** 跟踪上游心跳发送的定时器，期望在过期前收到回复 */
  activePongTimer?: ReturnType<typeof setTimeout> | undefined;
  /** 如果重连正在进行，这个定时器用于延迟重连 */
  activeReconnectTimer?: ReturnType<typeof setTimeout> | undefined;
  /**
   * 我们期望订阅的所有主题（如果连接断开，我们会自动重新订阅）
   * 使用Set确保每个主题只订阅一次（跟踪我们期望连接的唯一主题列表）
   *
   * 注意：使用Set进行准确的重复跟踪仅适用于纯文本主题。
   * 例如，如果键的顺序不同，JSON对象可能不会被识别为重复。
   * 更复杂的主题（对象）使用isDeepObjectMatch函数进行匹配
   */
  subscribedTopics: Set<WSTopic>;
}

/**
 * 深度对象匹配函数
 * 
 * 比较两个对象是否深度相等，用于复杂主题的重复检测
 * 
 * @param object1 - 第一个对象
 * @param object2 - 第二个对象
 * @returns boolean - 如果对象深度相等则返回true
 * 
 * 匹配规则：
 * 1. 类型必须相同
 * 2. 键的数量必须相同
 * 3. 键名必须相同（忽略顺序）
 * 4. 所有值必须相等（递归比较对象）
 */
export function isDeepObjectMatch(object1: any, object2: any): boolean {
  if (typeof object2 !== typeof object1) {
    return false;
  }

  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  const hasSameKeyCount = keys1.length === keys2.length;
  if (!hasSameKeyCount) {
    // console.log('not same key count', { keys1, keys2 });
    // not the same amount of keys or keys don't match
    return false;
  }

  const hasSameKeyNames = keys1.every((val, i) => val === keys2[i]);
  if (!hasSameKeyNames) {
    // console.log('not same key names: ', { keys1, keys2 });
    return false;
  }

  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!isDeepObjectMatch(value1, value2)) {
        return false;
      }
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

/** 简单主题类型（字符串） */
type WSSimpleTopic = string;

/**
 * WebSocket存储管理类
 * 
 * 管理多个WebSocket连接的状态和主题订阅
 * 
 * @template WSComplexTopic - 复杂主题类型
 * 
 * 主要功能：
 * - 管理多个WebSocket连接
 * - 跟踪连接状态和主题订阅
 * - 提供连接状态查询和修改方法
 * - 支持复杂主题的重复检测
 * 
 * 使用方式：
 * const wsStore = new WsStore<string>();
 * const state = wsStore.get('prodPublic', true);
 * wsStore.set('prodPublic', { connectionState: WsConnectionStateEnum.CONNECTING });
 */
export class WsStore<WSComplexTopic> {
  /** WebSocket状态存储，键为WebSocket键值，值为存储状态 */
  private wsState: Record<
    WsKey | string,
    WsStoredState<WSComplexTopic | WSSimpleTopic>
  > = {};

  /** 日志记录器 */
  private logger: typeof DefaultLogger;

  /**
   * 构造函数
   * 
   * @param logger - 日志记录器，如果未提供则使用默认记录器
   */
  constructor(logger: typeof DefaultLogger) {
    this.logger = logger || DefaultLogger;
    this.wsState = {};
  }

  /**
   * 获取指定键值的WebSocket存储状态
   * 
   * @param wsKey - WebSocket键值
   * @param createIfMissing - 如果状态不存在是否创建新的
   * @returns WsStoredState - WebSocket存储状态
   */
  /**
   * 获取指定键值的WebSocket存储状态（重载方法1）
   * 
   * @param wsKey - WebSocket键值
   * @param createIfMissing - 如果状态不存在则创建新的
   * @returns WsStoredState - WebSocket存储状态
   */
  get(
    wsKey: WsKey,
    createIfMissing?: true,
  ): WsStoredState<WSComplexTopic | WSSimpleTopic>;

  /**
   * 获取指定键值的WebSocket存储状态（重载方法2）
   * 
   * @param wsKey - WebSocket键值
   * @param createIfMissing - 如果状态不存在则不创建
   * @returns WsStoredState | undefined - WebSocket存储状态，如果不存在则返回undefined
   */
  get(
    wsKey: WsKey,
    createIfMissing?: false,
  ): WsStoredState<WSComplexTopic | WSSimpleTopic> | undefined;

  /**
   * 获取指定键值的WebSocket存储状态（实现方法）
   * 
   * @param wsKey - WebSocket键值
   * @param createIfMissing - 如果状态不存在是否创建新的
   * @returns WsStoredState | undefined - WebSocket存储状态
   */
  get(
    wsKey: WsKey,
    createIfMissing?: boolean,
  ): WsStoredState<WSComplexTopic | WSSimpleTopic> | undefined {
    if (this.wsState[wsKey]) {
      return this.wsState[wsKey];
    }

    if (createIfMissing) {
      return this.create(wsKey);
    }
  }

  /**
   * 获取所有WebSocket键值
   * 
   * @returns WsKey[] - 所有已注册的WebSocket键值数组
   */
  getKeys(): WsKey[] {
    return Object.keys(this.wsState) as WsKey[];
  }

  /**
   * 创建新的WebSocket存储状态
   * 
   * @param wsKey - WebSocket键值
   * @returns WsStoredState | undefined - 新创建的存储状态，如果已存在活跃连接则返回undefined
   */
  create(
    wsKey: WsKey,
  ): WsStoredState<WSComplexTopic | WSSimpleTopic> | undefined {
    if (this.hasExistingActiveConnection(wsKey)) {
      this.logger.warning(
        'WsStore setConnection() overwriting existing open connection: ',
        this.getWs(wsKey),
      );
    }
    this.wsState[wsKey] = {
      subscribedTopics: new Set(),
      connectionState: WsConnectionStateEnum.INITIAL,
    };
    return this.get(wsKey);
  }

  /**
   * 删除指定键值的WebSocket存储状态
   * 
   * @param wsKey - WebSocket键值
   */
  delete(wsKey: WsKey) {
    if (this.hasExistingActiveConnection(wsKey)) {
      const ws = this.getWs(wsKey);
      this.logger.warning(
        'WsStore deleting state for connection still open: ',
        ws,
      );
      ws?.close();
    }
    delete this.wsState[wsKey];
  }

  /* connection websocket */

  /**
   * 检查是否存在活跃的WebSocket连接
   * 
   * @param wsKey - WebSocket键值
   * @returns boolean - 如果存在活跃连接则返回true
   */
  hasExistingActiveConnection(wsKey: WsKey) {
    return this.get(wsKey) && this.isWsOpen(wsKey);
  }

  /**
   * 获取指定键值的WebSocket连接对象
   * 
   * @param wsKey - WebSocket键值
   * @returns WebSocket | undefined - WebSocket连接对象，如果不存在则返回undefined
   */
  getWs(wsKey: WsKey): WebSocket | undefined {
    return this.get(wsKey)?.ws;
  }

  /**
   * 设置指定键值的WebSocket连接对象
   * 
   * @param wsKey - WebSocket键值
   * @param wsConnection - WebSocket连接对象
   * @returns WebSocket - 设置的WebSocket连接对象
   */
  setWs(wsKey: WsKey, wsConnection: WebSocket): WebSocket {
    if (this.isWsOpen(wsKey)) {
      this.logger.warning(
        'WsStore setConnection() overwriting existing open connection: ',
        this.getWs(wsKey),
      );
    }
    this.get(wsKey, true)!.ws = wsConnection;
    return wsConnection;
  }

  /* connection state */

  /**
   * 检查指定键值的WebSocket连接是否处于开放状态
   * 
   * @param wsKey - WebSocket键值
   * @returns boolean - 如果连接开放则返回true
   */
  isWsOpen(wsKey: WsKey): boolean {
    const existingConnection = this.getWs(wsKey);
    return (
      !!existingConnection &&
      existingConnection.readyState === existingConnection.OPEN
    );
  }

  /**
   * 获取指定键值的连接状态
   * 
   * @param wsKey - WebSocket键值
   * @returns WsConnectionStateEnum - 连接状态枚举值
   */
  getConnectionState(wsKey: WsKey): WsConnectionStateEnum {
    return this.get(wsKey, true)!.connectionState!;
  }

  /**
   * 设置指定键值的连接状态
   * 
   * @param wsKey - WebSocket键值
   * @param state - 新的连接状态
   */
  setConnectionState(wsKey: WsKey, state: WsConnectionStateEnum) {
    this.get(wsKey, true)!.connectionState = state;
  }

  /**
   * 检查指定键值的连接状态是否等于指定状态
   * 
   * @param wsKey - WebSocket键值
   * @param state - 要检查的状态
   * @returns boolean - 如果状态匹配则返回true
   */
  isConnectionState(wsKey: WsKey, state: WsConnectionStateEnum): boolean {
    return this.getConnectionState(wsKey) === state;
  }

  /* subscribed topics */

  /**
   * 获取指定键值的所有订阅主题
   * 
   * @param wsKey - WebSocket键值
   * @returns Set<WSComplexTopic | WSSimpleTopic> - 订阅主题集合
   */
  getTopics(wsKey: WsKey): Set<WSComplexTopic | WSSimpleTopic> {
    return this.get(wsKey, true).subscribedTopics;
  }

  /**
   * 获取所有键值对应的主题集合
   * 
   * @returns Record<string, Set<WSComplexTopic | WSSimpleTopic>> - 键值到主题集合的映射
   */
  getTopicsByKey(): Record<string, Set<WSComplexTopic | WSSimpleTopic>> {
    const result = {};
    for (const refKey in this.wsState) {
      result[refKey] = this.getTopics(refKey as WsKey);
    }
    return result;
  }

  /**
   * 添加简单主题到指定键值的订阅列表
   * 
   * @param wsKey - WebSocket键值
   * @param topic - 要添加的主题
   * @returns Set<WSComplexTopic | WSSimpleTopic> - 更新后的主题集合
   */
  addTopic(wsKey: WsKey, topic: WsTopic) {
    return this.getTopics(wsKey).add(topic);
  }

  /**
   * 添加复杂主题到存储中，仅当尚未订阅时
   * 
   * @param wsKey - WebSocket键值
   * @param topic - 要添加的复杂主题
   * @returns Set<WSComplexTopic | WSSimpleTopic> - 更新后的主题集合
   */
  addComplexTopic(wsKey: WsKey, topic: WSComplexTopic) {
    if (this.getMatchingTopic(wsKey, topic)) {
      return this.getTopics(wsKey);
    }
    // console.log('add complex topic: ', topic);
    return this.getTopics(wsKey).add(topic);
  }

  /**
   * 从指定键值的订阅列表中删除简单主题
   * 
   * @param wsKey - WebSocket键值
   * @param topic - 要删除的主题
   * @returns boolean - 如果主题存在且被删除则返回true
   */
  deleteTopic(wsKey: WsKey, topic: WsTopic) {
    return this.getTopics(wsKey).delete(topic);
  }

  /**
   * 从存储中删除复杂主题
   * 
   * @param wsKey - WebSocket键值
   * @param topic - 要删除的复杂主题
   * @returns Set<WSComplexTopic | WSSimpleTopic> - 更新后的主题集合
   */
  deleteComplexTopic(wsKey: WsKey, topic: WSComplexTopic) {
    const storedTopic = this.getMatchingTopic(wsKey, topic);
    if (storedTopic) {
      this.getTopics(wsKey).delete(storedTopic);
    }

    return this.getTopics(wsKey);
  }

  /**
   * 获取匹配的主题
   * 
   * 由于主题可能是对象，我们不能依赖Set来检测重复
   * 对于字符串主题，直接检查Set中是否存在
   * 对于对象主题，使用深度对象匹配来查找
   * 
   * @param key - WebSocket键值
   * @param topic - 要查找的主题（字符串或复杂对象）
   * @returns WSComplexTopic | WSSimpleTopic | undefined - 匹配的主题，如果未找到则返回undefined
   */
  getMatchingTopic(
    key: WsKey,
    topic: WsTopic | WSComplexTopic,
  ): WSComplexTopic | WSSimpleTopic | undefined {
    if (typeof topic === 'string') {
      if (this.getTopics(key).has(topic)) {
        return topic;
      } else {
        return undefined;
      }
    }

    const allTopics = this.getTopics(key).values();
    for (const storedTopic of allTopics) {
      // console.log('?: ', {
      //   isMatch: isDeepObjectMatch(topic, storedTopic),
      //   newTopic: topic,
      //   storedTopic: storedTopic,
      // });
      if (isDeepObjectMatch(topic, storedTopic)) {
        return storedTopic;
      }
    }
  }
}
