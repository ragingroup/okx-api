/**
 * WebSocket请求类型定义
 * 
 * 定义WebSocket连接中的各种请求参数和频道类型
 */

/**
 * WebSocket认证请求参数接口
 * 
 * 用于WebSocket私有频道的身份验证
 */
export interface WsAuthRequestArg {
  /** API密钥 */
  apiKey: string;
  /** API密码 */
  passphrase: string;
  /** 时间戳 */
  timestamp: string;
  /** 签名 */
  sign: string;
}

/**
 * WebSocket交易操作类型
 * 
 * 定义可用的交易操作
 */
export type WsTradeOp =
  | 'order'                    // 下单
  | 'batch-orders'            // 批量下单
  | 'cancel-order'            // 撤单
  | 'batch-cancel-orders'     // 批量撤单
  | 'amend-order'             // 改单
  | 'batch-amend-order';      // 批量改单

/**
 * WebSocket请求操作类型
 * 
 * 定义WebSocket连接的基本操作
 */
export type WsRequestOp = 'login' | 'subscribe' | 'unsubscribe';

/**
 * WebSocket私有频道类型
 * 
 * 需要认证的私有频道，用于获取账户相关信息
 */
export type WsPrivateChannel =
  | 'account'                 // 账户信息
  | 'positions'               // 持仓信息
  | 'balance_and_position'    // 余额和持仓
  | 'orders'                  // 订单信息
  | 'orders-algo'             // 算法订单
  | 'algo-advance'            // 高级算法订单
  | 'liquidation-warning'     // 强平预警
  | 'account-greeks'          // 账户希腊字母
  | 'grid-orders-spot'        // 现货网格订单
  | 'grid-orders-contract'    // 合约网格订单
  | 'grid-orders-moon'        // 月球网格订单
  | 'grid-positions'          // 网格持仓
  | 'grid-sub-orders';        // 网格子订单

/**
 * WebSocket公共K线频道类型
 * 
 * 用于订阅不同时间周期的K线数据
 */
export type WsPublicKlineChannel =
  | 'candle1Y'                // 1年K线
  | 'candle6M'                // 6个月K线
  | 'candle3M'                // 3个月K线
  | 'candle1M'                // 1个月K线
  | 'candle1W'                // 1周K线
  | 'candle1D'                // 1天K线
  | 'candle2D'                // 2天K线
  | 'candle3D'                // 3天K线
  | 'candle5D'                // 5天K线
  | 'candle12H'               // 12小时K线
  | 'candle6H'                // 6小时K线
  | 'candle4H'                // 4小时K线
  | 'candle2H'                // 2小时K线
  | 'candle1H'                // 1小时K线
  | 'candle30m'               // 30分钟K线
  | 'candle15m'               // 15分钟K线
  | 'candle5m'                // 5分钟K线
  | 'candle3m'                // 3分钟K线
  | 'candle1m'                // 1分钟K线
  | 'candle1s'                // 1秒K线
  | 'candle1Yutc'             // 1年K线（UTC时间）
  | 'candle3Mutc'             // 3个月K线（UTC时间）
  | 'candle1Mutc'             // 1个月K线（UTC时间）
  | 'candle1Wutc'             // 1周K线（UTC时间）
  | 'candle1Dutc'             // 1天K线（UTC时间）
  | 'candle2Dutc'             // 2天K线（UTC时间）
  | 'candle3Dutc'             // 3天K线（UTC时间）
  | 'candle5Dutc'             // 5天K线（UTC时间）
  | 'candle12Hutc'            // 12小时K线（UTC时间）
  | 'candle6Hutc';            // 6小时K线（UTC时间）

/**
 * WebSocket公共标记价格K线频道类型
 * 
 * 用于订阅标记价格的K线数据
 */
export type WsPublicMarkPriceKlineChannel =
  | 'mark-price-candle1Y'     // 标记价格1年K线
  | 'mark-price-candle6M'     // 标记价格6个月K线
  | 'mark-price-candle3M'     // 标记价格3个月K线
  | 'mark-price-candle1M'     // 标记价格1个月K线
  | 'mark-price-candle1W'     // 标记价格1周K线
  | 'mark-price-candle1D'     // 标记价格1天K线
  | 'mark-price-candle2D'     // 标记价格2天K线
  | 'mark-price-candle3D'     // 标记价格3天K线
  | 'mark-price-candle5D'     // 标记价格5天K线
  | 'mark-price-candle12H'    // 标记价格12小时K线
  | 'mark-price-candle6H'     // 标记价格6小时K线
  | 'mark-price-candle4H'     // 标记价格4小时K线
  | 'mark-price-candle2H'     // 标记价格2小时K线
  | 'mark-price-candle1H'     // 标记价格1小时K线
  | 'mark-price-candle30m'    // 标记价格30分钟K线
  | 'mark-price-candle15m'    // 标记价格15分钟K线
  | 'mark-price-candle5m'     // 标记价格5分钟K线
  | 'mark-price-candle3m'     // 标记价格3分钟K线
  | 'mark-price-candle1m'     // 标记价格1分钟K线
  | 'mark-price-candle1Yutc'  // 标记价格1年K线（UTC时间）
  | 'mark-price-candle3Mutc'  // 标记价格3个月K线（UTC时间）
  | 'mark-price-candle1Mutc'  // 标记价格1个月K线（UTC时间）
  | 'mark-price-candle1Wutc'  // 标记价格1周K线（UTC时间）
  | 'mark-price-candle1Dutc'  // 标记价格1天K线（UTC时间）
  | 'mark-price-candle2Dutc'  // 标记价格2天K线（UTC时间）
  | 'mark-price-candle3Dutc'  // 标记价格3天K线（UTC时间）
  | 'mark-price-candle5Dutc'  // 标记价格5天K线（UTC时间）
  | 'mark-price-candle12Hutc' // 标记价格12小时K线（UTC时间）
  | 'mark-price-candle6Hutc'; // 标记价格6小时K线（UTC时间）

/**
 * WebSocket公共指数K线频道类型
 * 
 * 用于订阅指数K线数据
 */
export type WsPublicIndexKlineChannel =
  | 'index-candle1Y'          // 指数1年K线
  | 'index-candle6M'          // 指数6个月K线
  | 'index-candle3M'          // 指数3个月K线
  | 'index-candle1M'          // 指数1个月K线
  | 'index-candle1W'
  | 'index-candle1D'
  | 'index-candle2D'
  | 'index-candle3D'
  | 'index-candle5D'
  | 'index-candle12H'
  | 'index-candle6H'
  | 'index-candle4H index -candle2H'
  | 'index-candle1H'
  | 'index-candle30m'
  | 'index-candle15m'
  | 'index-candle5m'
  | 'index-candle3m'
  | 'index-candle1m'
  | 'index-candle1Yutc'
  | 'index-candle3Mutc'
  | 'index-candle1Mutc'
  | 'index-candle1Wutc'
  | 'index-candle1Dutc'
  | 'index-candle2Dutc'
  | 'index-candle3Dutc'
  | 'index-candle5Dutc'
  | 'index-candle12Hutc'
  | 'index-candle6Hutc';

export type WsPublicOrderBooksChannel =
  | 'books'
  | 'books5'
  | 'bbo-tbt'
  | 'books-l2-tbt'
  | 'books50-l2-tpt';

export type WsPublicChannel =
  | 'instruments'
  | 'tickers'
  | 'open-interest'
  | WsPublicKlineChannel
  | WsPublicMarkPriceKlineChannel
  | WsPublicIndexKlineChannel
  | 'trades'
  | 'estimated-price'
  | 'mark-price'
  | 'price-limit'
  | WsPublicOrderBooksChannel
  | 'opt-summary'
  | 'funding-rate'
  | 'index-tickers'
  | 'status'
  | 'liquidation-orders';

export type WsBusinessPrivateChannel =
  | 'orders-algo'
  | 'algo-advance'
  | 'deposit-info'
  | 'withdrawal-info'
  | 'grid-orders-spot'
  | 'grid-orders-contract'
  | 'grid-orders-moon'
  | 'grid-positions'
  | 'grid-sub-orders'
  | 'algo-recurring-buy';

export type WsBusinessPublicChannel =
  | WsPublicKlineChannel
  | WsPublicMarkPriceKlineChannel
  | WsPublicIndexKlineChannel;

export type WsBusinessChannel =
  | WsBusinessPrivateChannel
  | WsBusinessPublicChannel;

export type WsChannel = WsPublicChannel | WsPrivateChannel | WsBusinessChannel;

export interface WsBaseRequest {
  op: WsRequestOp;
  args: any[];
}

/** Used to trigger order actions over websockets (e.g. placing & cancelling orders) */
export interface WsTradeBaseRequest {
  op: WsTradeOp;
  id: string;
  args: any[];
}

export interface WsBaseRequestArg {
  channel: WsChannel;
}

/**
 *
 * Args to be sent with top level requests
 *
 */

export interface WsPrivateChannelArgTickers extends WsBaseRequestArg {
  channel: 'tickers';
  instId: string;
}

export interface WsPrivateChannelArgWithCcy extends WsBaseRequestArg {
  channel: 'account' | 'account-greeks' | 'withdrawal-info';
  ccy?: string;
}

export type WsChannelArgInstType =
  | 'SPOT'
  | 'MARGIN'
  | 'SWAP'
  | 'FUTURES'
  | 'OPTION'
  | 'ANY';

export interface WsPrivateChannelArgWithInstFamily extends WsBaseRequestArg {
  channel: 'positions' | 'orders' | 'orders-algo' | 'liquidation-warning';
  instType: WsChannelArgInstType;
  instFamily?: string;
  instId?: string;
}

export interface WsPrivateChannelArgAlgo extends WsBaseRequestArg {
  channel: 'algo-advance';
  instType: WsChannelArgInstType;
  instId?: string;
  algoId?: string;
}

export interface WsPrivateChannelArgBalanceAndPosition
  extends WsBaseRequestArg {
  channel: 'balance_and_position';
}

export interface WsPrivateChannelArgGridOrders extends WsBaseRequestArg {
  channel: 'grid-orders-spot' | 'grid-orders-contract' | 'grid-orders-moon';
  instType: 'SPOT' | 'ANY';
  instId?: string;
  algoId?: string;
}

export interface WsPrivateChannelArgGridOther extends WsBaseRequestArg {
  channel: 'grid-positions' | 'grid-sub-orders';
  algoId: string;
}

export interface WsPublicChannelArgInstType extends WsBaseRequestArg {
  channel: 'instruments';
  instType: WsChannelArgInstType;
}

export interface WsPublicChannelArgInstId extends WsBaseRequestArg {
  channel:
    | 'tickers'
    | 'open-interest'
    | WsPublicKlineChannel
    | WsPublicMarkPriceKlineChannel
    | WsPublicIndexKlineChannel
    | 'trades'
    | 'mark-price'
    | 'price-limit'
    | WsPublicOrderBooksChannel
    | 'funding-rate'
    | 'index-tickers';
  instId: string;
}

export type WsPublicChannelArgInstIdOrFamily = {
  channel: 'estimated-price';
  instType: 'OPTION' | 'FUTURES';
} & (
  | {
      instId: string;
    }
  | {
      instFamily: string;
    }
);

export interface WsPublicChannelArgOptionSummary extends WsBaseRequestArg {
  channel: 'opt-summary';
  instFamily: string;
}

export interface WsPublicChannelArgStatus extends WsBaseRequestArg {
  channel: 'status';
}

export interface WsPublicChannelArgLiquidationOrders extends WsBaseRequestArg {
  channel: 'liquidation-orders';
  instType: 'SWAP' | 'FUTURES';
}

export type WsChannelSubUnSubRequestArg =
  | WsPrivateChannelArgTickers
  | WsPrivateChannelArgWithCcy
  | WsPrivateChannelArgWithInstFamily
  | WsPrivateChannelArgAlgo
  | WsPrivateChannelArgBalanceAndPosition
  | WsPrivateChannelArgGridOrders
  | WsPrivateChannelArgGridOther
  | WsPublicChannelArgInstType
  | WsPublicChannelArgInstId
  | WsPublicChannelArgInstIdOrFamily
  | WsPublicChannelArgOptionSummary
  | WsPublicChannelArgStatus
  | WsPublicChannelArgLiquidationOrders;

/**
 *
 * Top level requests with args
 *
 */

export interface WsSubRequest extends WsBaseRequest {
  op: 'subscribe';
  args: WsChannelSubUnSubRequestArg[];
}

export interface WsUnsubRequest extends WsBaseRequest {
  op: 'unsubscribe';
  args: WsChannelSubUnSubRequestArg[];
}

export interface WsAuthRequest extends WsBaseRequest {
  op: 'login';
  args: WsAuthRequestArg[];
}
