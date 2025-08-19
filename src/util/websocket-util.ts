/**
 * WebSocket工具函数模块
 * 
 * 提供WebSocket连接相关的工具函数，包括：
 * - WebSocket URL映射
 * - 连接键值管理
 * - 频道类型判断
 * - 连接状态管理
 */

import { APIMarket, WebsocketClientOptions, WsChannel } from '../types';
import { DefaultLogger } from './logger';
import { neverGuard } from './typeGuards';

/**
 * WebSocket基础URL映射表
 * 
 * 根据不同的市场类型和连接类型（公共/私有）提供相应的WebSocket URL
 * 
 * 市场类型说明：
 * - prod: 生产环境，正式交易
 * - business: 商业环境
 * - businessDemo: 商业演示环境
 * - demo: 演示环境，用于测试
 * 
 * 连接类型说明：
 * - public: 公共连接，用于订阅公开市场数据
 * - private: 私有连接，用于订阅私有账户数据
 */
export const WS_BASE_URL_MAP: Record<
  APIMarket,
  Record<'public' | 'private', string>
> = {
  prod: {
    public: 'wss://ws.okx.com:8443/ws/v5/public',
    private: 'wss://ws.okx.com:8443/ws/v5/private',
  },
  business: {
    public: 'wss://ws.okx.com:8443/ws/v5/business',
    private: 'wss://ws.okx.com:8443/ws/v5/business',
  },
  businessDemo: {
    public: 'wss://wspap.okx.com:8443/ws/v5/business?brokerId=9999',
    private: 'wss://wspap.okx.com:8443/ws/v5/business?brokerId=9999',
  },
  demo: {
    public: 'wss://wspap.okx.com:8443/ws/v5/public?brokerId=9999',
    private: 'wss://wspap.okx.com:8443/ws/v5/private?brokerId=9999',
  },
};

/**
 * WebSocket连接键值映射
 * 
 * 用于标识不同类型的WebSocket连接
 */
export const WS_KEY_MAP = {
  prodPublic: 'prodPublic',
  prodPrivate: 'prodPrivate',
  demoPublic: 'demoPublic',
  demoPrivate: 'demoPrivate',
  businessPrivate: 'businessPrivate',
  businessPublic: 'businessPublic',
  businessDemoPublic: 'businessDemoPublic',
  businessDemoPrivate: 'businessDemoPrivate',
} as const;

/**
 * WebSocket连接键值类型
 * 
 * 这是用于区分不同可用WebSocket流的类型（因为OKX有多个WebSocket）
 */
export type WsKey = (typeof WS_KEY_MAP)[keyof typeof WS_KEY_MAP];

/**
 * 私有WebSocket连接键值列表
 * 
 * 需要认证的WebSocket连接
 */
export const PRIVATE_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPrivate,
  WS_KEY_MAP.businessPrivate,
  WS_KEY_MAP.demoPrivate,
  WS_KEY_MAP.businessDemoPrivate,
];

/**
 * 公共WebSocket连接键值列表
 * 
 * 不需要认证的WebSocket连接
 */
export const PUBLIC_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPublic,
  WS_KEY_MAP.businessPublic,
  WS_KEY_MAP.demoPublic,
  WS_KEY_MAP.businessDemoPublic,
];

/**
 * 私有频道列表
 * 
 * 用于自动判断订阅请求应该发送到公共还是私有WebSocket
 * 当有两个WebSocket连接时使用
 */
const PRIVATE_CHANNELS = [
  'account',
  'positions',
  'balance_and_position',
  'orders',
  'orders-algo',
  'algo-advance',
  'liquidation-warning',
  'account-greeks',
  'grid-orders-spot',
  'grid-orders-contract',
  'grid-orders-moon',
  'grid-positions',
  'grid-sub-orders',
];

/**
 * 仅支持新商业WebSocket端点的频道列表
 * 
 * 参考：https://www.okx.com/help-center/changes-to-v5-api-websocket-subscription-parameter-and-url
 */
const BUSINESS_CHANNELS = [
  'orders-algo',
  'algo-advance',
  'deposit-info',
  'withdrawal-info',
  'grid-orders-spot',
  'grid-orders-contract',
  'grid-orders-moon',
  'grid-positions',
  'grid-sub-orders',
  'algo-recurring-buy',
  'candle1Y',
  'candle6M',
  'candle3M',
  'candle1M',
  'candle1W',
  'candle1D',
  'candle2D',
  'candle3D',
  'candle5D',
  'candle12H',
  'candle6H',
  'candle4H',
  'candle2H',
  'candle1H',
  'candle30m',
  'candle15m',
  'candle5m',
  'candle3m',
  'candle1m',
  'candle1s',
  'candle1Yutc',
  'candle3Mutc',
  'candle1Mutc',
  'candle1Wutc',
  'candle1Dutc',
  'candle2Dutc',
  'candle3Dutc',
  'candle5Dutc',
  'candle12Hutc',
  'candle6Hutc',
  'mark-price-candle1Y',
  'mark-price-candle6M',
  'mark-price-candle3M',
  'mark-price-candle1M',
  'mark-price-candle1W',
  'mark-price-candle1D',
  'mark-price-candle2D',
  'mark-price-candle3D',
  'mark-price-candle5D',
  'mark-price-candle12H',
  'mark-price-candle6H',
  'mark-price-candle4H',
  'mark-price-candle2H',
  'mark-price-candle1H',
  'mark-price-candle30m',
  'mark-price-candle15m',
  'mark-price-candle5m',
  'mark-price-candle3m',
  'mark-price-candle1m',
  'mark-price-candle1Yutc',
  'mark-price-candle3Mutc',
  'mark-price-candle1Mutc',
  'mark-price-candle1Wutc',
  'mark-price-candle1Dutc',
  'mark-price-candle2Dutc',
  'mark-price-candle3Dutc',
  'mark-price-candle5Dutc',
  'mark-price-candle12Hutc',
  'mark-price-candle6Hutc',
  'index-candle1Y',
  'index-candle6M',
  'index-candle3M',
  'index-candle1M',
  'index-candle1W',
  'index-candle1D',
  'index-candle2D',
  'index-candle3D',
  'index-candle5D',
  'index-candle12H',
  'index-candle6H',
  'index-candle4H index -candle2H',
  'index-candle1H',
  'index-candle30m',
  'index-candle15m',
  'index-candle5m',
  'index-candle3m',
  'index-candle1m',
  'index-candle1Yutc',
  'index-candle3Mutc',
  'index-candle1Mutc',
  'index-candle1Wutc',
  'index-candle1Dutc',
  'index-candle2Dutc',
  'index-candle3Dutc',
  'index-candle5Dutc',
  'index-candle12Hutc',
  'index-candle6Hutc',
];

/**
 * 根据市场、频道类型和是否私有，确定应使用哪个WebSocket连接键值
 * 
 * @param market 市场类型
 * @param channel 频道类型
 * @param isPrivate 是否为私有连接
 * @returns 对应的WebSocket连接键值
 */
export function getWsKeyForTopicChannel(
  market: APIMarket,
  channel: WsChannel,
  isPrivate?: boolean,
): WsKey {
  const isPrivateTopic =
    isPrivate === true || PRIVATE_CHANNELS.includes(channel);
  const isBusinessChannel = BUSINESS_CHANNELS.includes(channel);

  return getWsKeyForMarket(market, isPrivateTopic, isBusinessChannel);
}

/**
 * 根据市场、是否私有和是否为商业频道，确定应使用哪个WebSocket连接键值
 * 
 * @param market 市场类型
 * @param isPrivate 是否为私有连接
 * @param isBusinessChannel 是否为商业频道
 * @returns 对应的WebSocket连接键值
 */
export function getWsKeyForMarket(
  market: APIMarket,
  isPrivate: boolean,
  isBusinessChannel: boolean,
): WsKey {
  switch (market) {
    case 'prod': {
      if (isBusinessChannel) {
        return isPrivate
          ? WS_KEY_MAP.businessPrivate
          : WS_KEY_MAP.businessPublic;
      }
      return isPrivate ? WS_KEY_MAP.prodPrivate : WS_KEY_MAP.prodPublic;
    }
    case 'demo': {
      if (isBusinessChannel) {
        return isPrivate
          ? WS_KEY_MAP.businessDemoPrivate
          : WS_KEY_MAP.businessDemoPublic;
      }
      return isPrivate ? WS_KEY_MAP.demoPrivate : WS_KEY_MAP.demoPublic;
    }
    case 'business': {
      return isPrivate ? WS_KEY_MAP.businessPrivate : WS_KEY_MAP.businessPublic;
    }
    case 'businessDemo': {
      return isPrivate
        ? WS_KEY_MAP.businessDemoPrivate
        : WS_KEY_MAP.businessDemoPublic;
    }
    default: {
      throw neverGuard(market, 'getWsKeyForTopic(): Unhandled market');
    }
  }
}

/**
 * 根据WebSocket连接键值获取WebSocket URL
 * 
 * @param wsKey WebSocket连接键值
 * @param wsClientOptions WebSocket客户端选项
 * @param logger 日志记录器
 * @returns 对应的WebSocket URL
 */
export function getWsUrlForWsKey(
  wsKey: WsKey,
  wsClientOptions: WebsocketClientOptions,
  logger: typeof DefaultLogger,
): string {
  if (wsClientOptions.wsUrl) {
    return wsClientOptions.wsUrl;
  }

  switch (wsKey) {
    case 'prodPublic':
      return WS_BASE_URL_MAP.prod.public;
    case 'prodPrivate':
      return WS_BASE_URL_MAP.prod.private;
    case 'demoPublic':
      return WS_BASE_URL_MAP.demo.public;
    case 'demoPrivate':
      return WS_BASE_URL_MAP.demo.private;
    case 'businessPublic':
      return WS_BASE_URL_MAP.business.public;
    case 'businessPrivate':
      return WS_BASE_URL_MAP.business.private;
    case 'businessDemoPublic':
      return WS_BASE_URL_MAP.businessDemo.public;
    case 'businessDemoPrivate':
      return WS_BASE_URL_MAP.businessDemo.private;
    default: {
      const errorMessage = 'getWsUrl(): Unhandled wsKey: ';
      logger.error(errorMessage, {
        category: 'okx-ws',
        wsKey,
      });
      throw neverGuard(wsKey, errorMessage);
    }
  }
}

/**
 * 获取每个订阅事件的最大主题数量
 * 
 * @param market 市场类型
 * @returns 最大主题数量，如果为null则表示无限制
 */
export function getMaxTopicsPerSubscribeEvent(
  market: APIMarket,
): number | null {
  switch (market) {
    case 'prod':
    case 'demo':
    case 'business':
    case 'businessDemo': {
      return null;
    }
    default: {
      throw neverGuard(market, 'getWsKeyForTopic(): Unhandled market');
    }
  }
}

/**
 * 判断是否为WebSocket Pong消息
 * 
 * @param event WebSocket事件对象
 * @returns 是否为Pong消息
 */
export function isWsPong(event: unknown): boolean {
  return (
    typeof event === 'object' &&
    !!event &&
    'data' in event &&
    typeof event['data'] === 'string' &&
    event['data'] === 'pong'
  );
}

/**
 * WebSocket事件代码枚举
 * 
 * 定义OKX WebSocket API的标准响应代码
 */
export const WS_EVENT_CODE_ENUM = {
  /** 成功 */
  OK: '0',
  /** 登录失败 */
  LOGIN_FAILED: '60009',
  /** 登录部分失败 */
  LOGIN_PARTIALLY_FAILED: '60022',
};

/**
 * 安全终止WebSocket连接
 * 
 * 注意：#305: ws.terminate() 在浏览器中未定义。
 * 此函数仅在Node.js中工作，在浏览器中无效。
 * 如果ws未定义则不执行任何操作。在浏览器中也不执行任何操作。
 * 
 * @param ws - WebSocket连接对象
 * @param fallbackToClose - 如果terminate不可用，是否回退到close方法
 * @returns boolean - 如果成功终止则返回true
 * 
 * 使用方式：
 * const terminated = safeTerminateWs(wsConnection, true);
 * if (terminated) {
 *   console.log('WebSocket连接已安全终止');
 * }
 */
export function safeTerminateWs(
  ws?: WebSocket | any,
  fallbackToClose?: boolean,
): boolean {
  if (!ws) {
    return false;
  }
  if (typeof ws['terminate'] === 'function') {
    ws.terminate();
    return true;
  } else if (fallbackToClose) {
    ws.close();
  }

  return false;
}
