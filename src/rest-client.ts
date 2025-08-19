import { AxiosRequestConfig } from 'axios';

import { ASSET_BILL_TYPE } from './constants';
import {
  AccountAssetValuation,
  AccountBalance,
  AccountBill,
  AccountChangeMarginResult,
  AccountConfiguration,
  AccountFeeRate,
  AccountHistoryBill,
  AccountInstrument,
  AccountIsolatedMode,
  AccountLevel,
  AccountLeverage,
  AccountLeverageResult,
  AccountMaxLoan,
  AccountMaxOrderAmount,
  AccountMaxTradableAmount,
  AccountModeResult,
  AccountPosition,
  AccountPositionModeResult,
  AccountPositionRisk,
  AccountRiskState,
  AdjustLeverageInfo,
  AdjustMarginBalanceRequest,
  AlgoLongHistoryRequest,
  AlgoOrderDetailsRequest,
  AlgoOrderDetailsResult,
  AlgoOrderListItem,
  AlgoOrderRequest,
  AlgoOrderResult,
  AlgoRecentHistoryRequest,
  AmendAlgoOrderRequest,
  AmendAlgoOrderResult,
  AmendedOrder,
  AmendOrderRequest,
  AmendRecurringBuyOrderRequest,
  AmendTPSLRequest,
  Announcement,
  APICredentials,
  APIMarket,
  APIResponse,
  AssetBillDetails,
  AutoLoanResult,
  BlockCounterParty,
  BlockMakerInstrumentSettings,
  BlockMMPConfig,
  BlockRFQResult,
  BorrowRepayHistoryItem,
  CancelAlgoOrderRequest,
  CancelAllAfterResponse,
  CancelBlockQuoteRequest,
  CancelBlockQuoteResult,
  CancelBlockRFQRequest,
  CancelBlockRFQResult,
  CancelledOrderResult,
  CancelMultipleBlockQuoteRequest,
  CancelMultipleBlockRFQRequest,
  CancelSignalBotsResult,
  CancelSpreadOrderResponse,
  CancelSubOrderRequest,
  Candle,
  CandleNoVolume,
  CandleRequest,
  ChangePositionMarginRequest,
  CloseContractGridPositionRequest,
  ClosedPositions,
  ClosePositionRequest,
  CloseSubpositionRequest,
  ContractGridDirection,
  ConvertQuoteEstimateRequest,
  ConvertTradeRequest,
  CopySettingsRequest,
  CreateBlockQuoteRequest,
  CreateBlockQuoteResult,
  CreateBlockRFQRequest,
  CreateRFQResult,
  CreateSignalBotRequest,
  CreateSignalBotResult,
  CreateSignalRequest,
  CreateSignalResult,
  CurrentSubposition,
  EconomicCalendarData,
  EconomicCalendarRequest,
  ExecuteBlockQuoteRequest,
  ExecuteBlockQuoteResult,
  FillsHistoryRequest,
  FixedLoanBorrowingLimit,
  FixedLoanBorrowQuote,
  FundingBalance,
  FundingCurrency,
  FundingRateRequest,
  FundsTransferRequest,
  FundTransferResult,
  FundTransferState,
  GetAccountConfigurationResult,
  GetActiveSpreadOrdersRequest,
  GetBlockQuoteParams,
  GetBlockQuoteResult,
  GetBlockRFQSParams,
  GetBorrowRepayHistoryRequest,
  GetContractOpenInterestHistoryRequest,
  GetContractTakerVolumeRequest,
  GetCopySettingsResult,
  GetCopyTradersRequest,
  GetCopyTradersResult,
  GetCopyTradingConfigResult,
  GetCTBatchLeverageInfoRequest,
  GetCTBatchLeverageInfoResult,
  GetCTHistoryLeadTradersRequest,
  GetCTHistoryLeadTradersResult,
  GetCTMyLeadTradersResult,
  GetCTProfitDetailsRequest,
  GetCTProfitDetailsResult,
  GetCTTotalProfitResult,
  GetCTUnrealizedProfitResult,
  GetCurrentSubpositionsRequest,
  GetDepositWithdrawStatusRequest,
  GetFixedLoanBorrowingOrdersListRequest,
  GetFixedLoanBorrowQuoteRequest,
  GetGridAlgoOrdersRequest,
  GetHistoricPositionParams,
  GetInstrumentsRequest,
  GetLeadTraderPositionsRequest,
  GetLeadTraderRanksRequest,
  GetLeadTraderRanksResult,
  GetLeadTraderStatsRequest,
  GetLendingOrderListRequest,
  GetLendingSubOrderListRequest,
  GetManagedSubAccountTransferHistoryRequest,
  GetOptionTradesRequest,
  GetPositionsParams,
  GetPremiumHistoryRequest,
  GetPrivateLeadTraderRanksRequest,
  GetPrivateLeadTraderRanksResult,
  GetQuickMarginBorrowRepayHistoryRequest,
  GetRecurringBuyOrderListRequest,
  GetRSIBackTestingRequest,
  GetSignalBotEventHistoryRequest,
  GetSignalBotPositionHistoryRequest,
  GetSignalBotRequest,
  GetSignalBotSubOrdersRequest,
  GetSignalsRequest,
  GetSignalsResult,
  GetSpreadCandlesRequest,
  GetSpreadOrderHistoryArchiveRequest,
  GetSpreadOrderHistoryRequest,
  GetSpreadsRequest,
  GetSpreadTradesRequest,
  GetSubAccountMaxWithdrawalsRequest,
  GetSubpositionsHistoryRequest,
  GetTopTradersContractLongShortRatioRequest,
  GetVIPInterestRequest,
  GetVIPLoanOrderDetailRequest,
  GetVIPLoanOrderListRequest,
  Greeks,
  GridAlgoOrderRequest,
  GridAlgoOrderType,
  GridAlgoSubOrderType,
  HistoricAccountPosition,
  HistoricAlgoOrder,
  HistoricOrder,
  IndexTicker,
  Instrument,
  InstrumentType,
  InterestAccrued,
  InterestRate,
  LeadTraderCurrentPosition,
  LeadTraderPnl,
  LeadTraderPositionHistory,
  LeadTraderPreference,
  LeadTraderStats,
  LendingOrder,
  ManagedSubAccountTransfer,
  MarginMode,
  MaxGridQuantityRequest,
  MaxWithdrawal,
  MMPConfig,
  NonTradableAsset,
  numberInString,
  OptionTrade,
  OptionTrades,
  OrderBook,
  OrderDetails,
  OrderFill,
  OrderHistoryRequest,
  OrderIdRequest,
  OrderListItem,
  OrderPrecheckRequest,
  OrderRequest,
  OrderResult,
  PaginatedSymbolRequest,
  Pagination,
  PlaceCTAlgoOrderRequest,
  PlaceCTAlgoOrderResult,
  PlaceRecurringBuyOrderRequest,
  PlaceSpreadOrderRequest,
  PlaceSpreadOrderResponse,
  PlaceSubOrderRequest,
  PositionBuilderRequest,
  PositionSide,
  PosMode,
  PublicBlockTrade,
  PublicSpreadTrade,
  QuickMarginBorrowRepayRecord,
  QuickMarginBorrowRepayRequest,
  QuickMarginBorrowRepayResult,
  RecurringBuyOrder,
  RecurringBuyOrderResult,
  RecurringBuySubOrder,
  RestClientOptions,
  SetCTBatchLeverageRequest,
  SetCTBatchLeverageResult,
  SetLeverageRequest,
  SetMMPConfigRequest,
  SetMmpConfigRequest,
  SetMMPConfigResult,
  SetMmpConfigResult,
  SetQuoteProductsRequest,
  SetSignalInstrumentsRequest,
  SetSubAccountLoanAllocationRequest,
  SpreadCandle,
  SpreadDetails,
  SpreadOrder,
  SpreadOrderBook,
  SpreadTicker,
  SpreadTrade,
  StopGridAlgoOrderRequest,
  SubAccount,
  SubAccountAPIReset,
  SubAccountBalances,
  SubAccountMaxWithdrawal,
  SubAccountTransferRequest,
  SubAccountTransferResult,
  SubmitFixedLoanBorrowingOrderRequest,
  SubpositionsHistory,
  SystemTime,
  Ticker,
  TimestampObject,
  Trade,
  UnitConvertData,
  UnitConvertRequest,
  UpdateFixedLoanBorrowingOrderRequest,
  UpdateSpreadOrderRequest,
  UpdateSpreadOrderResponse,
  VIPInterest,
  VIPLoanOrder,
  VIPLoanOrderDetail,
  WithdrawalHistoryRequest,
  WithdrawRequest,
  WithdrawResponse,
} from './types';
import {
  AccruedInterestItem,
  AccruedInterestRequest,
  AdjustCollateralRequest,
  CollateralAssetsResponse,
  LoanHistoryItem,
  LoanHistoryRequest,
  LoanInfo,
  MaxLoanRequest,
  MaxLoanResponse,
} from './types/rest/response/private-flexible-loan';
import BaseRestClient from './util/BaseRestClient';

/**
 * OKX REST API客户端
 * 
 * 继承自BaseRestClient，提供完整的OKX REST API功能
 * 包括账户管理、交易、市场数据等所有API端点
 * 
 * 主要功能：
 * - 公共API：市场数据、交易对信息等
 * - 私有API：账户信息、订单管理、交易等
 * - 自动签名认证
 * - 错误处理和重试机制
 * 
 * 使用方式：
 * const client = new RestClient(null, 'prod', {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret',
 *   apiPass: 'your-api-pass'
 * });
 * 
 * // 获取市场数据
 * const tickers = await client.getTickers('SPOT');
 * 
 * // 获取账户余额
 * const balance = await client.getBalance();
 */
export class RestClient extends BaseRestClient {
  /**
   * 创建REST API客户端实例
   * 
   * @param credentials - 注意：此参数将被移除！请传递null，并使用restClientOptions参数（第3个参数）代替！
   * @param environment - 注意：此参数将被移除！请传递'prod'，并使用restClientOptions参数（第3个参数）代替！
   * @param restClientOptions - REST客户端配置选项
   * @param requestOptions - Axios请求配置选项
   * @returns RestClient实例
   */
  constructor(
    credentials?: APICredentials | null,
    environment: APIMarket = 'prod',
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    super(
      {
        apiKey: credentials?.apiKey,
        apiSecret: credentials?.apiSecret,
        apiPass: credentials?.apiPass,
        market: environment,
        ...restClientOptions,
      },
      requestOptions,
    );
    return this;
  }

  /**
   * 自定义SDK功能
   */

  /**
   * 获取客户端和服务器之间的延迟和时间同步信息
   * 
   * 这不是官方API端点，仅用于内部测试目的。
   * 使用此方法检查客户端和服务器之间的延迟和时间同步。
   * 最终值可能略有不同，但应该在几毫秒的差异范围内。
   * 如果您对此测量有任何建议或改进，请在GitHub上创建issue或pull request。
   * 
   * @returns Promise<any> - 延迟和时间同步摘要信息
   * 
   * 返回信息包括：
   * - localTime: 本地时间
   * - serverTime: 服务器时间
   * - roundTripTime: 往返时间
   * - estimatedOneWayLatency: 估计的单向延迟
   * - adjustedServerTime: 调整后的服务器时间
   * - timeDifference: 时间差异
   * 
   * 使用方式：
   * const latencyInfo = await client.fetchLatencySummary();
   * console.log('延迟信息:', latencyInfo);
   */
  async fetchLatencySummary(): Promise<any> {
    const clientTimeReqStart = Date.now();
    const serverTime = await this.getServerTime();
    const clientTimeReqEnd = Date.now();
    console.log('serverTime', serverTime);

    const serverTimeMs = serverTime;
    const roundTripTime = clientTimeReqEnd - clientTimeReqStart;
    const estimatedOneWayLatency = Math.floor(roundTripTime / 2);

    // Adjust server time by adding estimated one-way latency
    const adjustedServerTime = serverTimeMs + estimatedOneWayLatency;

    // Calculate time difference between adjusted server time and local time
    const timeDifference = adjustedServerTime - clientTimeReqEnd;

    const result = {
      localTime: clientTimeReqEnd,
      serverTime: serverTimeMs,
      roundTripTime,
      estimatedOneWayLatency,
      adjustedServerTime,
      timeDifference,
    };

    console.log('Time synchronization results:');
    console.log(result);

    console.log(
      `Your approximate latency to exchange server:
      One way: ${estimatedOneWayLatency}ms.
      Round trip: ${roundTripTime}ms.
      `,
    );

    if (timeDifference > 500) {
      console.warn(
        `WARNING! Time difference between server and client clock is greater than 500ms. It is currently ${timeDifference}ms.
        Consider adjusting your system clock to avoid unwanted clock sync errors!
        Visit https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Timestamp-for-this-request-is-outside-of-the-recvWindow for more information`,
      );
    } else {
      console.log(
        `Time difference between server and client clock is within acceptable range of 500ms. It is currently ${timeDifference}ms.`,
      );
    }

    return result;
  }

  /**
   *
   * OKX misc endpoints
   *
   */

  /**
   * 获取服务器时间
   * 
   * 获取OKX服务器的时间戳，用于时间同步和请求签名
   * 
   * API端点：GET /api/v5/public/time
   * 
   * @returns Promise<number> - 服务器时间戳（毫秒）
   * 
   * 使用方式：
   * const serverTime = await client.getServerTime();
   * console.log('服务器时间:', new Date(serverTime));
   * 
   * 注意：此方法返回的时间戳用于API请求签名，确保客户端和服务器时间同步
   */
  async getServerTime(): Promise<number> {
    const response = await this.get('/api/v5/public/time');

    const timestamp = Array.isArray(response) ? Number(response[0]?.ts) : NaN;
    if (
      !Array.isArray(response) ||
      isNaN(timestamp) ||
      typeof timestamp !== 'number'
    ) {
      throw response;
    }
    return timestamp;
  }

  /**
   *
   * Trading account endpoints
   *
   */

  /**
   * 获取账户可交易产品信息
   * 
   * 获取账户中可交易的产品的详细信息
   * 
   * API端点：GET /api/v5/account/instruments
   * 
   * @param params - 请求参数
   * @returns Promise<AccountInstrument[]> - 账户可交易产品列表
   * 
   * 使用方式：
   * const instruments = await client.getAccountInstruments({
   *   instType: 'SPOT',
   *   uly: 'BTC-USDT'
   * });
   */
  getAccountInstruments(
    params: GetInstrumentsRequest,
  ): Promise<AccountInstrument[]> {
    return this.getPrivate('/api/v5/account/instruments', params);
  }

  /**
   * 获取账户余额
   * 
   * 获取账户中各币种的余额信息
   * 
   * API端点：GET /api/v5/account/balance
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种，如BTC、USDT等（可选）
   * @returns Promise<AccountBalance[]> - 账户余额列表
   * 
   * 使用方式：
   * // 获取所有币种余额
   * const allBalance = await client.getBalance();
   * 
   * // 获取特定币种余额
   * const btcBalance = await client.getBalance({ ccy: 'BTC' });
   */
  getBalance(params?: { ccy?: string }): Promise<AccountBalance[]> {
    return this.getPrivate('/api/v5/account/balance', params);
  }

  /**
   * 获取持仓信息
   * 
   * 获取账户中所有产品的持仓信息
   * 
   * API端点：GET /api/v5/account/positions
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<AccountPosition[]> - 持仓信息列表
   * 
   * 使用方式：
   * // 获取所有持仓
   * const allPositions = await client.getPositions();
   * 
   * // 获取特定产品的持仓
   * const btcPosition = await client.getPositions({
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getPositions(params?: GetPositionsParams): Promise<AccountPosition[]> {
    return this.getPrivate('/api/v5/account/positions', params);
  }

  /**
   * 获取历史持仓信息
   * 
   * 获取账户中产品的历史持仓信息
   * 
   * API端点：GET /api/v5/account/positions-history
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<HistoricAccountPosition[]> - 历史持仓信息列表
   * 
   * 使用方式：
   * // 获取所有历史持仓
   * const history = await client.getPositionsHistory();
   * 
   * // 获取特定时间范围的历史持仓
   * const history = await client.getPositionsHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   */
  getPositionsHistory(
    params?: GetHistoricPositionParams,
  ): Promise<HistoricAccountPosition[]> {
    return this.getPrivate('/api/v5/account/positions-history', params);
  }

  /**
   * 获取账户持仓风险
   * 
   * 获取账户的持仓风险信息
   * 
   * API端点：GET /api/v5/account/account-position-risk
   * 
   * @param params - 请求参数（可选）
   * @param params.instType - 产品类型，如SWAP、FUTURES、OPTION等（可选）
   * @returns Promise<AccountPositionRisk[]> - 账户持仓风险信息列表
   * 
   * 使用方式：
   * // 获取所有产品类型的持仓风险
   * const allRisk = await client.getAccountPositionRisk();
   * 
   * // 获取特定产品类型的持仓风险
   * const swapRisk = await client.getAccountPositionRisk({
   *   instType: 'SWAP'
   * });
   */
  getAccountPositionRisk(params?: {
    instType?: Omit<'SPOT', InstrumentType>;
  }): Promise<AccountPositionRisk[]> {
    return this.getPrivate('/api/v5/account/account-position-risk', params);
  }

  /**
   * 获取账单流水
   * 
   * 获取最近7天的账单流水信息
   * 
   * API端点：GET /api/v5/account/bills
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<AccountBill[]> - 账单流水列表
   * 
   * 使用方式：
   * // 获取最近7天的所有账单
   * const bills = await client.getBills();
   * 
   * // 获取特定币种的账单
   * const btcBills = await client.getBills({ ccy: 'BTC' });
   * 
   * 注意：此接口最多返回最近7天的数据
   */
  getBills(params?: any): Promise<AccountBill[]> {
    return this.getPrivate('/api/v5/account/bills', params);
  }

  /**
   * 获取账单流水（归档）
   * 
   * 获取最近3个月的账单流水信息
   * 
   * API端点：GET /api/v5/account/bills-archive
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<AccountBill[]> - 账单流水列表
   * 
   * 使用方式：
   * // 获取最近3个月的所有账单
   * const bills = await client.getBillsArchive();
   * 
   * // 获取特定币种的账单
   * const btcBills = await client.getBillsArchive({ ccy: 'BTC' });
   * 
   * 注意：此接口最多返回最近3个月的数据
   */
  getBillsArchive(params?: any): Promise<AccountBill[]> {
    return this.getPrivate('/api/v5/account/bills-archive', params);
  }

  /**
   * 申请账单历史数据下载链接
   * 
   * 申请2021年2月1日以来的账单数据（当前季度除外）
   * 数据生成需要时间，请在30小时后通过"获取账单详情（2021年后）"接口查询文件链接
   * 在高峰期，数据生成可能需要更长时间。如果48小时后文件链接仍然不可用，请联系客服协助
   * 此接口仅适用于统一账户的数据
   * 
   * API端点：POST /api/v5/account/bills-history-archive
   * 
   * @param params - 请求参数
   * @param params.year - 年份，如"2023"
   * @param params.quarter - 季度，如"Q1"、"Q2"、"Q3"、"Q4"
   * @returns Promise<AccountHistoryBill[]> - 申请结果
   * 
   * 使用方式：
   * const result = await client.requestBillsHistoryDownloadLink({
   *   year: '2023',
   *   quarter: 'Q1'
   * });
   * 
   * 注意：申请后需要等待数据生成，然后使用getRequestedBillsHistoryLink获取下载链接
   */
  requestBillsHistoryDownloadLink(params: {
    year: string;
    quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  }): Promise<AccountHistoryBill[]> {
    return this.postPrivate('/api/v5/account/bills-history-archive', params);
  }

  /**
   * 获取已申请的账单历史数据下载链接
   * 
   * 获取通过requestBillsHistoryDownloadLink申请的账单数据的下载链接
   * 
   * API端点：GET /api/v5/account/bills-history-archive
   * 
   * @param params - 请求参数
   * @param params.year - 年份，如"2023"
   * @param params.quarter - 季度，如"Q1"、"Q2"、"Q3"、"Q4"
   * @returns Promise<AccountHistoryBill[]> - 账单历史数据信息
   * 
   * 使用方式：
   * const billData = await client.getRequestedBillsHistoryLink({
   *   year: '2023',
   *   quarter: 'Q1'
   * });
   * 
   * 注意：需要先使用requestBillsHistoryDownloadLink申请数据，然后等待数据生成完成
   */
  getRequestedBillsHistoryLink(params: {
    year: string;
    quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  }): Promise<AccountHistoryBill[]> {
    return this.getPrivate('/api/v5/account/bills-history-archive', params);
  }

  /**
   * 获取账户配置
   * 
   * 获取账户的配置信息，包括账户等级、交易模式等
   * 
   * API端点：GET /api/v5/account/config
   * 
   * @returns Promise<AccountConfiguration[]> - 账户配置信息
   * 
   * 使用方式：
   * const config = await client.getAccountConfiguration();
   * console.log('账户等级:', config[0]?.acctLv);
   * console.log('交易模式:', config[0]?.posMode);
   */
  getAccountConfiguration(): Promise<AccountConfiguration[]> {
    return this.getPrivate('/api/v5/account/config');
  }

  /**
   * 设置持仓模式
   * 
   * 设置账户的持仓模式，包括单向持仓和双向持仓
   * 
   * API端点：POST /api/v5/account/set-position-mode
   * 
   * @param params - 请求参数
   * @param params.posMode - 持仓模式：'long_short_mode'（双向持仓）或'net_mode'（单向持仓）
   * @returns Promise<AccountPositionModeResult[]> - 设置结果
   * 
   * 使用方式：
   * const result = await client.setPositionMode({
   *   posMode: 'long_short_mode' // 设置为双向持仓
   * });
   * 
   * 注意：持仓模式设置后，需要重新登录才能生效
   */
  setPositionMode(params: {
    posMode: PosMode;
  }): Promise<AccountPositionModeResult[]> {
    return this.postPrivate('/api/v5/account/set-position-mode', params);
  }

  /**
   * 设置杠杆倍数
   * 
   * 设置账户的杠杆倍数
   * 
   * API端点：POST /api/v5/account/set-leverage
   * 
   * @param params - 请求参数
   * @returns Promise<AccountLeverageResult[]> - 设置结果
   * 
   * 使用方式：
   * const result = await client.setLeverage({
   *   instId: 'BTC-USDT-SWAP',
   *   lever: '10',
   *   mgnMode: 'cross',
   *   posSide: 'long'
   * });
   * 
   * 注意：杠杆倍数设置会影响保证金要求和风险控制
   */
  setLeverage(params: SetLeverageRequest): Promise<AccountLeverageResult[]> {
    return this.postPrivate('/api/v5/account/set-leverage', params);
  }

  /**
   * 获取最大买卖数量
   * 
   * 获取账户可下单的最大数量或开仓数量
   * 
   * API端点：GET /api/v5/account/max-size
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID，如BTC-USDT-SWAP
   * @param params.tdMode - 交易模式：'cross'（全仓）、'isolated'（逐仓）、'cash'（现金）
   * @param params.ccy - 币种（可选）
   * @param params.px - 价格（可选）
   * @param params.leverage - 杠杆倍数（可选）
   * @param params.unSpotOffset - 是否允许现货对冲（可选）
   * @returns Promise<AccountMaxOrderAmount[]> - 最大买卖数量信息
   * 
   * 使用方式：
   * const maxAmount = await client.getMaxBuySellAmount({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   px: '50000'
   * });
   */
  getMaxBuySellAmount(params: {
    instId: string;
    tdMode: 'cross' | 'isolated' | 'cash';
    ccy?: string;
    px?: string;
    leverage?: string;
    unSpotOffset?: boolean;
  }): Promise<AccountMaxOrderAmount[]> {
    return this.getPrivate('/api/v5/account/max-size', params);
  }

  /**
   * 获取最大可交易数量
   * 
   * 获取账户可交易的最大数量
   * 
   * API端点：GET /api/v5/account/max-avail-size
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID，如BTC-USDT-SWAP
   * @param params.ccy - 币种（可选）
   * @param params.tdMode - 交易模式：'cross'（全仓）、'isolated'（逐仓）、'cash'（现金）
   * @param params.reduceOnly - 是否仅减仓（可选）
   * @param params.unSpotOffset - 是否允许现货对冲（可选）
   * @returns Promise<AccountMaxTradableAmount[]> - 最大可交易数量信息
   * 
   * 使用方式：
   * const maxTradable = await client.getMaxAvailableTradableAmount({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   reduceOnly: false
   * });
   */
  getMaxAvailableTradableAmount(params: {
    instId: string;
    ccy?: string;
    tdMode: 'cross' | 'isolated' | 'cash';
    reduceOnly?: boolean;
    unSpotOffset?: boolean;
  }): Promise<AccountMaxTradableAmount[]> {
    return this.getPrivate('/api/v5/account/max-avail-size', params);
  }

  /**
   * 调整持仓保证金
   * 
   * 调整持仓的保证金余额
   * 
   * API端点：POST /api/v5/account/position/margin-balance
   * 
   * @param params - 请求参数
   * @returns Promise<AccountChangeMarginResult[]> - 调整结果
   * 
   * 使用方式：
   * const result = await client.changePositionMargin({
   *   instId: 'BTC-USDT-SWAP',
   *   posSide: 'long',
   *   type: 'add', // 'add'（增加）或'reduce'（减少）
   *   amt: '100'
   * });
   * 
   * 注意：调整保证金会影响持仓的风险敞口
   */
  changePositionMargin(
    params: ChangePositionMarginRequest,
  ): Promise<AccountChangeMarginResult[]> {
    return this.postPrivate('/api/v5/account/position/margin-balance', params);
  }

  /**
   * 获取杠杆倍数信息
   * 
   * 获取账户的杠杆倍数信息
   * 
   * API端点：GET /api/v5/account/leverage-info
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID（可选）
   * @param params.ccy - 币种（可选）
   * @param params.mgnMode - 保证金模式：'cross'（全仓）或'isolated'（逐仓）
   * @returns Promise<AccountLeverage[]> - 杠杆倍数信息列表
   * 
   * 使用方式：
   * // 获取所有产品的杠杆信息
   * const allLeverage = await client.getLeverage({ mgnMode: 'cross' });
   * 
   * // 获取特定产品的杠杆信息
   * const btcLeverage = await client.getLeverage({
   *   instId: 'BTC-USDT-SWAP',
   *   mgnMode: 'cross'
   * });
   */
  getLeverage(params: {
    instId?: string;
    ccy?: string;
    mgnMode: MarginMode;
  }): Promise<AccountLeverage[]> {
    return this.getPrivate('/api/v5/account/leverage-info', params);
  }

  /**
   * 获取杠杆倍数信息（V2版本）
   * 
   * @deprecated 此方法将在下一个主要版本中移除，请使用getLeverage()代替
   * 
   * 获取账户的杠杆倍数信息
   * 
   * API端点：GET /api/v5/account/leverage-info
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID（可选）
   * @param params.ccy - 币种（可选）
   * @param params.mgnMode - 保证金模式：'cross'（全仓）或'isolated'（逐仓）
   * @returns Promise<AccountLeverage[]> - 杠杆倍数信息列表
   * 
   * 使用方式：
   * // 建议使用getLeverage()方法
   * const leverage = await client.getLeverage({ mgnMode: 'cross' });
   */
  getLeverageV2(params: {
    instId?: string;
    ccy?: string;
    mgnMode: MarginMode;
  }): Promise<AccountLeverage[]> {
    return this.getPrivate('/api/v5/account/leverage-info', params);
  }

  /**
   * 获取杠杆倍数预估信息
   * 
   * 获取调整杠杆倍数后的预估信息
   * 
   * API端点：GET /api/v5/account/adjust-leverage-info
   * 
   * @param params - 请求参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.mgnMode - 保证金模式：'cross'（全仓）或'isolated'（逐仓）
   * @param params.lever - 杠杆倍数
   * @param params.instId - 产品ID（可选）
   * @param params.ccy - 币种（可选）
   * @param params.posSide - 持仓方向：'long'（多）或'short'（空）
   * @returns Promise<AdjustLeverageInfo[]> - 杠杆倍数预估信息
   * 
   * 使用方式：
   * const estimatedInfo = await client.getLeverageEstimatedInfo({
   *   instType: 'SWAP',
   *   mgnMode: 'cross',
   *   lever: '10',
   *   instId: 'BTC-USDT-SWAP',
   *   posSide: 'long'
   * });
   */
  getLeverageEstimatedInfo(params: {
    instType: string;
    mgnMode: MarginMode;
    lever: string;
    instId?: string;
    ccy?: string;
    posSide: PositionSide;
  }): Promise<AdjustLeverageInfo[]> {
    return this.getPrivate('/api/v5/account/adjust-leverage-info', params);
  }

  /**
   * 获取最大可借数量
   * 
   * 获取账户可借的最大数量
   * 
   * API端点：GET /api/v5/account/max-loan
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID，如BTC-USDT-SWAP
   * @param params.mgnMode - 保证金模式：'cross'（全仓）或'isolated'（逐仓）
   * @param params.mgnCcy - 保证金币种（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<AccountMaxLoan[]> - 最大可借数量信息
   * 
   * 使用方式：
   * const maxLoan = await client.getMaxLoan({
   *   instId: 'BTC-USDT-SWAP',
   *   mgnMode: 'cross',
   *   mgnCcy: 'USDT'
   * });
   */
  getMaxLoan(params: {
    instId: string;
    mgnMode: MarginMode;
    mgnCcy?: string;
    ccy?: string;
  }): Promise<AccountMaxLoan[]> {
    return this.getPrivate('/api/v5/account/max-loan', params);
  }

  /**
   * 获取手续费率
   * 
   * 获取账户的交易手续费率
   * 
   * API端点：GET /api/v5/account/trade-fee
   * 
   * @param params - 请求参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.instId - 产品ID（可选）
   * @param params.uly - 标的指数（可选）
   * @param params.instFamily - 产品系列（可选）
   * @param params.ruleType - 规则类型（可选）
   * @returns Promise<AccountFeeRate[]> - 手续费率信息列表
   * 
   * 使用方式：
   * // 获取所有现货产品的手续费率
   * const spotFees = await client.getFeeRates({ instType: 'SPOT' });
   * 
   * // 获取特定产品的手续费率
   * const btcFees = await client.getFeeRates({
   *   instType: 'SWAP',
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getFeeRates(params: {
    instType: InstrumentType;
    instId?: string;
    uly?: string;
    instFamily?: string;
    ruleType?: string;
  }): Promise<AccountFeeRate[]> {
    return this.getPrivate('/api/v5/account/trade-fee', params);
  }

  /**
   * 获取计息记录
   * 
   * 获取账户的计息记录信息
   * 
   * API端点：GET /api/v5/account/interest-accrued
   * 
   * @param params - 请求参数（可选）
   * @param params.type - 类型：'1'（借币）、'2'（还币）（可选）
   * @param params.ccy - 币种（可选）
   * @param params.instId - 产品ID（可选）
   * @param params.mgnMode - 保证金模式：'cross'（全仓）或'isolated'（逐仓）（可选）
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回结果的数量限制（可选）
   * @returns Promise<InterestAccrued[]> - 计息记录列表
   * 
   * 使用方式：
   * // 获取所有计息记录
   * const allInterest = await client.getInterestAccrued();
   * 
   * // 获取特定币种的借币计息记录
   * const btcInterest = await client.getInterestAccrued({
   *   type: '1',
   *   ccy: 'BTC',
   *   mgnMode: 'cross'
   * });
   */
  getInterestAccrued(params?: {
    type?: '1' | '2';
    ccy?: string;
    instId?: string;
    mgnMode?: MarginMode;
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<InterestAccrued[]> {
    return this.getPrivate('/api/v5/account/interest-accrued', params);
  }

  /**
   * 获取利率
   * 
   * 获取账户的利率信息
   * 
   * API端点：GET /api/v5/account/interest-rate
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<InterestRate[]> - 利率信息列表
   * 
   * 使用方式：
   * // 获取所有币种的利率
   * const allRates = await client.getInterestRate();
   * 
   * // 获取特定币种的利率
   * const btcRate = await client.getInterestRate({ ccy: 'BTC' });
   */
  getInterestRate(params?: { ccy?: string }): Promise<InterestRate[]> {
    return this.getPrivate('/api/v5/account/interest-rate', params);
  }

  /**
   * 设置希腊字母显示类型
   * 
   * 设置账户的希腊字母显示类型
   * 
   * API端点：POST /api/v5/account/set-greeks
   * 
   * @param params - 请求参数
   * @param params.greeksType - 希腊字母类型：'PA'（PA希腊字母）或'BS'（BS希腊字母）
   * @returns Promise<Greeks[]> - 设置结果
   * 
   * 使用方式：
   * const result = await client.setGreeksDisplayType({
   *   greeksType: 'PA' // 设置为PA希腊字母
   * });
   * 
   * 注意：希腊字母类型设置会影响期权产品的风险指标显示
   */
  setGreeksDisplayType(params: { greeksType: 'PA' | 'BS' }): Promise<Greeks[]> {
    return this.postPrivate('/api/v5/account/set-greeks', params);
  }

  /**
   * 设置逐仓模式
   * 
   * 设置账户的逐仓模式
   * 
   * API端点：POST /api/v5/account/set-isolated-mode
   * 
   * @param params - 请求参数
   * @param params.isoMode - 逐仓模式：'automatic'（自动）或'autonomy'（自主）
   * @param params.type - 类型：'MARGIN'（保证金）或'CONTRACTS'（合约）
   * @returns Promise<AccountIsolatedMode[]> - 设置结果
   * 
   * 使用方式：
   * const result = await client.setIsolatedMode({
   *   isoMode: 'automatic', // 设置为自动逐仓模式
   *   type: 'MARGIN'        // 保证金类型
   * });
   * 
   * 注意：逐仓模式设置会影响保证金管理和风险控制
   */
  setIsolatedMode(params: {
    isoMode: 'automatic' | 'autonomy';
    type: 'MARGIN' | 'CONTRACTS';
  }): Promise<AccountIsolatedMode[]> {
    return this.postPrivate('/api/v5/account/set-isolated-mode', params);
  }

  /**
   * 获取最大可提数量
   * 
   * 查询当前账户在各币种的最大可提数量
   * 
   * API端点：GET /api/v5/account/max-withdrawal
   * 
   * @param params - 查询参数（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<MaxWithdrawal[]> - 最大可提数量
   */
  getMaxWithdrawals(params?: { ccy?: string }): Promise<MaxWithdrawal[]> {
    return this.getPrivate('/api/v5/account/max-withdrawal', params);
  }

  /**
   * 获取账户风险状态
   * 
   * 查询账户当前的风险状态与风险指标
   * 
   * API端点：GET /api/v5/account/risk-state
   * 
   * @returns Promise<AccountRiskState[]> - 风险状态
   */
  getAccountRiskState(): Promise<AccountRiskState[]> {
    return this.getPrivate('/api/v5/account/risk-state');
  }

  /**
   * 设置可作保资产
   * 
   * 配置哪些币种可作为借贷或保证金的抵押资产
   * 
   * API端点：POST /api/v5/account/set-collateral-assets
   * 
   * @param params - 设置参数
   * @param params.type - 'all'使用全量，'custom'使用自定义列表
   * @param params.collateralEnabled - 是否启用可作保
   * @param params.ccyList - 自定义币种列表（当type为'custom'时）
   * @returns Promise<{type:string; ccyList:string[]; collateralEnabled:boolean}[]> - 设置结果
   */
  setAccountCollateralAssets(params: {
    type: 'all' | 'custom';
    collateralEnabled: boolean;
    ccyList?: string[];
  }): Promise<
    {
      type: string;
      ccyList: string[];
      collateralEnabled: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-collateral-assets', params);
  }

  /**
   * 获取可作保资产
   * 
   * 查询当前账户可作为抵押的币种列表及其启用状态
   * 
   * API端点：GET /api/v5/account/collateral-assets
   * 
   * @param params - 查询参数（可选）
   * @param params.ccy - 币种（可选）
   * @param params.collateralEnabled - 是否启用可作保（可选）
   * @returns Promise<{ccy:string; collateralEnabled:boolean}[]> - 可作保资产
   */
  getAccountCollateralAssets(params?: {
    ccy?: string;
    collateralEnabled?: boolean;
  }): Promise<
    {
      ccy: string;
      collateralEnabled: boolean;
    }[]
  > {
    return this.getPrivate('/api/v5/account/collateral-assets', params);
  }

  /**
   * 一键借还
   * 
   * 统一账户一键借还接口，支持快速借入或归还
   * 
   * API端点：POST /api/v5/account/quick-margin-borrow-repay
   * 
   * @param params - 借还参数
   * @returns Promise<QuickMarginBorrowRepayResult[]> - 执行结果
   */
  submitQuickMarginBorrowRepay(
    params: QuickMarginBorrowRepayRequest,
  ): Promise<QuickMarginBorrowRepayResult[]> {
    return this.postPrivate(
      '/api/v5/account/quick-margin-borrow-repay',
      params,
    );
  }

  /**
   * 一键借还历史
   * 
   * 查询统一账户一键借还的历史记录
   * 
   * API端点：GET /api/v5/account/quick-margin-borrow-repay-history
   * 
   * @param params - 查询参数
   * @returns Promise<QuickMarginBorrowRepayRecord[]> - 历史记录
   */
  getQuickMarginBorrowRepayHistory(
    params: GetQuickMarginBorrowRepayHistoryRequest,
  ): Promise<QuickMarginBorrowRepayRecord[]> {
    return this.getPrivate(
      '/api/v5/account/quick-margin-borrow-repay-history',
      params,
    );
  }

  /**
   * VIP借还
   * 
   * VIP大额借贷的借入/归还接口
   * 
   * API端点：POST /api/v5/account/borrow-repay
   * 
   * @param params - 借还参数
   * @returns Promise<any[]> - 执行结果
   */
  borrowRepayVIPLoan(params: {
    ccy: string;
    side: 'borrow' | 'repay';
    amt: numberInString;
    ordId?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/account/borrow-repay', params);
  }

  /**
   * VIP借还历史
   * 
   * 查询VIP借入/归还的历史记录
   * 
   * API端点：GET /api/v5/account/borrow-repay-history
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<any[]> - 历史记录
   */
  getVIPLoanBorrowRepayHistory(params?: any): Promise<any[]> {
    return this.getPrivate('/api/v5/account/borrow-repay-history', params);
  }

  /**
   * VIP应计利息
   * 
   * 查询VIP借贷的应计利息
   * 
   * API端点：GET /api/v5/account/vip-interest-accrued
   * 
   * @param params - 查询参数
   * @returns Promise<VIPInterest[]> - 应计利息
   */
  getVIPInterestAccrued(params: GetVIPInterestRequest): Promise<VIPInterest[]> {
    return this.getPrivate('/api/v5/account/vip-interest-accrued', params);
  }

  /**
   * VIP已扣利息
   * 
   * 查询VIP借贷已扣除的利息
   * 
   * API端点：GET /api/v5/account/vip-interest-deducted
   * 
   * @param params - 查询参数
   * @returns Promise<VIPInterest[]> - 已扣利息
   */
  getVIPInterestDeducted(
    params: GetVIPInterestRequest,
  ): Promise<VIPInterest[]> {
    return this.getPrivate('/api/v5/account/vip-interest-deducted', params);
  }

  /**
   * VIP借贷订单列表
   * 
   * 查询VIP借贷订单列表
   * 
   * API端点：GET /api/v5/account/vip-loan-order-list
   * 
   * @param params - 查询参数
   * @returns Promise<VIPLoanOrder[]> - 订单列表
   */
  getVIPLoanOrders(
    params: GetVIPLoanOrderListRequest,
  ): Promise<VIPLoanOrder[]> {
    return this.getPrivate('/api/v5/account/vip-loan-order-list', params);
  }

  /**
   * VIP借贷订单详情
   * 
   * 查询指定的VIP借贷订单详情
   * 
   * API端点：GET /api/v5/account/vip-loan-order-detail
   * 
   * @param params - 查询参数
   * @returns Promise<VIPLoanOrderDetail[]> - 订单详情
   */
  getVIPLoanOrder(
    params: GetVIPLoanOrderDetailRequest,
  ): Promise<VIPLoanOrderDetail[]> {
    return this.getPrivate('/api/v5/account/vip-loan-order-detail', params);
  }

  /**
   * 借币利率与限额
   * 
   * 查询借币利率与额度限制
   * 
   * API端点：GET /api/v5/account/interest-limits
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<any[]> - 利率与限额
   */
  getBorrowInterestLimits(params?: {
    type?: '1' | '2';
    ccy?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/account/interest-limits', params);
  }

  /**
   * 固定利率借贷额度
   * 
   * 查询固定利率借贷的可借额度
   * 
   * API端点：GET /api/v5/account/fixed-loan/borrowing-limit
   * 
   * @returns Promise<FixedLoanBorrowingLimit[]> - 借贷额度
   */
  getFixedLoanBorrowLimit(): Promise<FixedLoanBorrowingLimit[]> {
    return this.getPrivate('/api/v5/account/fixed-loan/borrowing-limit');
  }

  /**
   * 固定利率借贷试算
   * 
   * 预估固定利率借贷的报价信息
   * 
   * API端点：GET /api/v5/account/fixed-loan/borrowing-quote
   * 
   * @param params - 查询参数
   * @returns Promise<FixedLoanBorrowQuote[]> - 借贷报价
   */
  getFixedLoanBorrowQuote(
    params: GetFixedLoanBorrowQuoteRequest,
  ): Promise<FixedLoanBorrowQuote[]> {
    return this.getPrivate(
      '/api/v5/account/fixed-loan/borrowing-quote',
      params,
    );
  }

  /**
   * 提交固定利率借贷订单
   * 
   * 创建固定利率借贷订单
   * 
   * API端点：POST /api/v5/account/fixed-loan/borrowing-order
   * 
   * @param params - 下单参数
   * @returns Promise<{ordId:string}[]> - 下单结果
   */
  submitFixedLoanBorrowOrder(
    params: SubmitFixedLoanBorrowingOrderRequest,
  ): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/borrowing-order',
      params,
    );
  }

  /**
   * 修改固定利率借贷订单
   * 
   * 修改已提交的固定利率借贷订单
   * 
   * API端点：POST /api/v5/account/fixed-loan/amend-borrowing-order
   * 
   * @param params - 改单参数
   * @returns Promise<{ordId:string}[]> - 改单结果
   */
  updateFixedLoanBorrowOrder(
    params: UpdateFixedLoanBorrowingOrderRequest,
  ): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/amend-borrowing-order',
      params,
    );
  }

  /**
   * 固定利率借贷手动续借
   * 
   * 对到期固定利率借贷订单执行手动续借
   * 
   * API端点：POST /api/v5/account/fixed-loan/manual-reborrow
   * 
   * @param params - 续借参数
   * @returns Promise<{ordId:string}[]> - 续借结果
   */
  manualRenewFixedLoanBorrowOrder(params: {
    ordId: string;
    maxRate: string;
  }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/manual-reborrow',
      params,
    );
  }

  /**
   * 固定利率借贷归还
   * 
   * 归还固定利率借贷订单
   * 
   * API端点：POST /api/v5/account/fixed-loan/repay-borrowing-order
   * 
   * @param params - 归还参数
   * @returns Promise<{ordId:string}[]> - 归还结果
   */
  repayFixedLoanBorrowOrder(params: { ordId: string }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/repay-borrowing-order',
      params,
    );
  }

  /**
   * 固定利率借贷转换为市场利率借贷
   * 
   * 将固定利率借贷订单转换为市场利率借贷
   * 
   * API端点：POST /api/v5/account/fixed-loan/convert-to-market-loan
   * 
   * @param params - 转换参数
   * @param params.ordId - 固定利率借贷订单ID
   * @returns Promise<{ordId: string}[]> - 转换结果
   * 
   * 使用方式：
   * const convertResult = await client.convertFixedLoanToMarketLoan({
   *   ordId: '123456789'
   * });
   * 
   * 注意：转换后利率将按照市场利率计算
   */
  convertFixedLoanToMarketLoan(params: { ordId: string }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/convert-to-market-loan',
      params,
    );
  }

  /**
   * 减少固定利率借贷负债
   * 
   * 减少固定利率借贷的负债金额
   * 
   * API端点：POST /api/v5/account/fixed-loan/reduce-liabilities
   * 
   * @param params - 减少负债参数
   * @param params.ordId - 固定利率借贷订单ID
   * @param params.pendingRepay - 是否待还：true（待还）或false（非待还）
   * @returns Promise<{ordId: string; pendingRepay: boolean}[]> - 操作结果
   * 
   * 使用方式：
   * const reduceResult = await client.reduceFixedLoanLiabilities({
   *   ordId: '123456789',
   *   pendingRepay: false
   * });
   * 
   * 注意：此操作会减少借贷负债，影响账户的借贷状态
   */
  reduceFixedLoanLiabilities(params: {
    ordId: string;
    pendingRepay: boolean;
  }): Promise<
    {
      ordId: string;
      pendingRepay: boolean;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/reduce-liabilities',
      params,
    );
  }

  /**
   * 获取固定利率借贷订单列表
   * 
   * 查询固定利率借贷的订单列表
   * 
   * API端点：GET /api/v5/account/fixed-loan/borrowing-orders-list
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 固定利率借贷订单列表
   * 
   * 使用方式：
   * const borrowOrders = await client.getFixedLoanBorrowOrders({
   *   ccy: 'USDT',
   *   state: 'live',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：支持按币种、状态、时间范围等条件筛选
   */
  getFixedLoanBorrowOrders(
    params: GetFixedLoanBorrowingOrdersListRequest,
  ): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/account/fixed-loan/borrowing-orders-list',
      params,
    );
  }

  /**
   * 手动借币/还币
   * 
   * 在统一账户现货中进行手动借币或还币操作
   * 
   * API端点：POST /api/v5/account/spot-manual-borrow-repay
   * 
   * @param params - 借币/还币参数
   * @param params.ccy - 币种，如USDT、BTC等
   * @param params.side - 操作方向：'borrow'（借币）或'repay'（还币）
   * @param params.amt - 借币/还币数量
   * @returns Promise<{ccy: string; side: 'borrow'|'repay'; amt: string}[]> - 操作结果
   * 
   * 使用方式：
   * // 借币
   * const borrowResult = await client.manualBorrowRepay({
   *   ccy: 'USDT',
   *   side: 'borrow',
   *   amt: '1000'
   * });
   * 
   * // 还币
   * const repayResult = await client.manualBorrowRepay({
   *   ccy: 'USDT',
   *   side: 'repay',
   *   amt: '1000'
   * });
   * 
   * 注意：借币会产生利息，还币需要确保账户有足够的余额
   */
  manualBorrowRepay(params: {
    ccy: string;
    side: 'borrow' | 'repay';
    amt: string;
  }): Promise<
    {
      ccy: string;
      side: 'borrow' | 'repay';
      amt: string;
    }[]
  > {
    return this.postPrivate('/api/v5/account/spot-manual-borrow-repay', params);
  }

  /**
   * 设置自动还币
   * 
   * 设置统一账户现货的自动还币功能
   * 
   * API端点：POST /api/v5/account/set-auto-repay
   * 
   * @param params - 设置参数
   * @param params.autoRepay - 是否开启自动还币：true（开启）或false（关闭）
   * @returns Promise<{autoRepay: boolean}[]> - 设置结果
   * 
   * 使用方式：
   * // 开启自动还币
   * const enableResult = await client.setAutoRepay({
   *   autoRepay: true
   * });
   * 
   * // 关闭自动还币
   * const disableResult = await client.setAutoRepay({
   *   autoRepay: false
   * });
   * 
   * 注意：开启后系统会在适当时机自动还币，减少利息支出
   */
  setAutoRepay(params: { autoRepay: boolean }): Promise<
    {
      autoRepay: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-auto-repay', params);
  }

  /**
   * 获取借币还币历史
   * 
   * 查询统一账户现货的借币还币历史记录
   * 
   * API端点：GET /api/v5/account/spot-borrow-repay-history
   * 
   * @param params - 查询参数（可选）
   * @param params.ccy - 币种（可选）
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回数量限制（可选）
   * @returns Promise<BorrowRepayHistoryItem[]> - 借币还币历史记录
   * 
   * 使用方式：
   * // 获取所有借币还币历史
   * const allHistory = await client.getBorrowRepayHistory();
   * 
   * // 获取特定币种的借币还币历史
   * const usdtHistory = await client.getBorrowRepayHistory({
   *   ccy: 'USDT',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：支持按币种、时间范围等条件筛选历史记录
   */
  getBorrowRepayHistory(
    params?: GetBorrowRepayHistoryRequest,
  ): Promise<BorrowRepayHistoryItem[]> {
    return this.getPrivate('/api/v5/account/spot-borrow-repay-history', params);
  }

  /**
   * 合成持仓构建
   * 
   * 用于账户风控的合成持仓构建/调整
   * 
   * API端点：POST /api/v5/account/position-builder
   * 
   * @param params - 构建参数
   * @returns Promise<any[]> - 操作结果
   */
  positionBuilder(params: PositionBuilderRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/account/position-builder', params);
  }

  /**
   * 更新风险对冲额度
   * 
   * 设置统一账户现货在用额度（用于风险对冲）
   * 
   * API端点：POST /api/v5/account/set-riskOffset-amt
   * 
   * @param params - 设置参数
   * @returns Promise<{ccy:string; clSpotInUseAmt:string}[]> - 设置结果
   */
  updateRiskOffsetAmount(params: {
    ccy: string;
    clSpotInUseAmt: string;
  }): Promise<
    {
      ccy: string;
      clSpotInUseAmt: string;
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-riskOffset-amt', params);
  }

  /**
   * 获取Greeks
   * 
   * 查询账户期权相关的Greeks数据
   * 
   * API端点：GET /api/v5/account/greeks
   * 
   * @param params - 查询参数（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<any[]> - Greeks 数据
   */
  getGreeks(params?: { ccy?: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/account/greeks', params);
  }

  /**
   * 获取PM分层限制
   * 
   * 查询不同产品的Position Tier（持仓分层）限制
   * 
   * API端点：GET /api/v5/account/position-tiers
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 分层限制
   */
  getPMLimitation(params: {
    instType: 'SWAP' | 'FUTURES' | 'OPTION';
    uly?: string;
    instFamily?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/account/position-tiers', params);
  }

  /**
   * 设置风险对冲类型
   * 
   * 设置账户风险对冲类型
   * 
   * API端点：POST /api/v5/account/set-riskOffset-type
   * 
   * @param params - 设置参数
   * @returns Promise<{type:'1'|'2'|'3'|'4'}[]> - 设置结果
   */
  updateRiskOffsetType(params: { type: '1' | '2' | '3' | '4' }): Promise<
    {
      type: '1' | '2' | '3' | '4';
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-riskOffset-type', params);
  }

  /**
   * 激活期权交易
   * 
   * 激活账户的期权交易权限
   * 
   * API端点：POST /api/v5/account/activate-option
   * 
   * @returns Promise<{ts:string}[]> - 激活时间戳
   */
  activateOption(): Promise<
    {
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/account/activate-option');
  }

  /**
   * 设置自动借币
   * 
   * 开启或关闭统一账户自动借币
   * 
   * API端点：POST /api/v5/account/set-auto-loan
   * 
   * @param params - 设置参数
   * @returns Promise<AutoLoanResult[]> - 设置结果
   */
  setAutoLoan(params: { autoLoan: boolean }): Promise<AutoLoanResult[]> {
    return this.postPrivate('/api/v5/account/set-auto-loan', params);
  }

  /**
   * 账户等级切换预设
   * 
   * 预设将要切换的账户等级与相关参数
   * 
   * API端点：POST /api/v5/account/account-level-switch-preset
   * 
   * @param params - 预设参数
   * @returns Promise<any[]> - 预设结果
   */
  presetAccountLevelSwitch(params: {
    acctLv: '2' | '3' | '4';
    lever?: string;
    riskOffsetType?: '1' | '2' | '3' | '4';
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/account/account-level-switch-preset',
      params,
    );
  }

  /**
   * 账户等级切换预检
   * 
   * 在切换账户等级前进行条件校验
   * 
   * API端点：GET /api/v5/account/set-account-switch-precheck
   * 
   * @param params - 预检参数
   * @returns Promise<any[]> - 预检结果
   */
  getAccountSwitchPrecheck(params: {
    acctLv: '1' | '2' | '3' | '4';
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/account/set-account-switch-precheck',
      params,
    );
  }

  /**
   * 设置账户等级
   * 
   * 切换统一账户等级
   * 
   * API端点：POST /api/v5/account/set-account-level
   * 
   * @param params - 设置参数
   * @returns Promise<AccountModeResult[]> - 设置结果
   */
  setAccountMode(params: {
    acctLv: AccountLevel;
  }): Promise<AccountModeResult[]> {
    return this.postPrivate('/api/v5/account/set-account-level', params);
  }

  /**
   * 重置MMP状态
   * 
   * 重置期权MMP（做市商保护）状态
   * 
   * API端点：POST /api/v5/account/mmp-reset
   * 
   * @param params - 请求参数
   * @returns Promise<{result:boolean}[]> - 重置结果
   */
  resetMMPStatus(params: { instType?: 'OPTION'; instFamily: string }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/account/mmp-reset', params);
  }

  /**
   * 设置MMP配置
   * 
   * 配置期权MMP（做市商保护）参数
   * 
   * API端点：POST /api/v5/account/mmp-config
   * 
   * @param params - 配置参数
   * @returns Promise<SetMMPConfigResult[]> - 设置结果
   */
  setMMPConfig(params: SetMMPConfigRequest): Promise<SetMMPConfigResult[]> {
    return this.postPrivate('/api/v5/account/mmp-config', params);
  }

  /**
   * 获取MMP配置
   * 
   * 查询期权MMP（做市商保护）配置
   * 
   * API端点：GET /api/v5/account/mmp-config
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<MMPConfig[]> - 配置信息
   */
  getMMPConfig(params?: { instFamily?: string }): Promise<MMPConfig[]> {
    return this.getPrivate('/api/v5/account/mmp-config', params);
  }

  /**
   *
   * Orderbook trading - trade endpoints
   *
   */

  /**
   * 下单
   * 
   * 提交订单到交易系统
   * 
   * API端点：POST /api/v5/trade/order
   * 
   * @param params - 订单请求参数
   * @returns Promise<OrderResult[]> - 下单结果
   * 
   * 使用方式：
   * const orderResult = await client.submitOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'market',
   *   sz: '0.01'
   * });
   * 
   * 注意：下单前请确保账户有足够的余额和权限
   */
  submitOrder(params: OrderRequest): Promise<OrderResult[]> {
    return this.postPrivate('/api/v5/trade/order', params);
  }

  /**
   * 批量下单
   * 
   * 批量提交多个订单到交易系统
   * 
   * API端点：POST /api/v5/trade/batch-orders
   * 
   * @param params - 订单请求参数数组
   * @returns Promise<OrderResult[]> - 批量下单结果
   * 
   * 使用方式：
   * const orderResults = await client.submitMultipleOrders([
   *   {
   *     instId: 'BTC-USDT-SWAP',
   *     tdMode: 'cross',
   *     side: 'buy',
   *     ordType: 'limit',
   *     sz: '0.01',
   *     px: '50000'
   *   },
   *   {
   *     instId: 'ETH-USDT-SWAP',
   *     tdMode: 'cross',
   *     side: 'sell',
   *     ordType: 'limit',
   *     sz: '0.1',
   *     px: '3000'
   *   }
   * ]);
   * 
   * 注意：批量下单最多支持20个订单
   */
  submitMultipleOrders(params: OrderRequest[]): Promise<OrderResult[]> {
    return this.postPrivate('/api/v5/trade/batch-orders', params);
  }

  /**
   * 撤单
   * 
   * 取消指定的订单
   * 
   * API端点：POST /api/v5/trade/cancel-order
   * 
   * @param params - 撤单请求参数
   * @returns Promise<CancelledOrderResult[]> - 撤单结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   ordId: '123456789'
   * });
   * 
   * 注意：只能撤销未成交的订单
   */
  cancelOrder(params: OrderIdRequest): Promise<CancelledOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-order', params);
  }

  /**
   * 批量撤单
   * 
   * 批量取消多个订单
   * 
   * API端点：POST /api/v5/trade/cancel-batch-orders
   * 
   * @param params - 撤单请求参数数组
   * @returns Promise<CancelledOrderResult[]> - 批量撤单结果
   * 
   * 使用方式：
   * const cancelResults = await client.cancelMultipleOrders([
   *   { instId: 'BTC-USDT-SWAP', ordId: '123456789' },
   *   { instId: 'ETH-USDT-SWAP', ordId: '987654321' }
   * ]);
   * 
   * 注意：批量撤单最多支持20个订单
   */
  cancelMultipleOrders(
    params: OrderIdRequest[],
  ): Promise<CancelledOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-batch-orders', params);
  }

  /**
   * 改单
   * 
   * 修改指定订单的参数
   * 
   * API端点：POST /api/v5/trade/amend-order
   * 
   * @param params - 改单请求参数
   * @returns Promise<AmendedOrder[]> - 改单结果
   * 
   * 使用方式：
   * const amendResult = await client.amendOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   ordId: '123456789',
   *   newSz: '0.02',  // 新的数量
   *   newPx: '51000'  // 新的价格
   * });
   * 
   * 注意：只能修改未成交的订单，且只能修改数量和价格
   */
  amendOrder(params: AmendOrderRequest): Promise<AmendedOrder[]> {
    return this.postPrivate('/api/v5/trade/amend-order', params);
  }

  /**
   * 批量改单
   * 
   * 批量修改多个订单的参数
   * 
   * API端点：POST /api/v5/trade/amend-batch-orders
   * 
   * @param params - 改单请求参数数组
   * @returns Promise<AmendedOrder[]> - 批量改单结果
   * 
   * 使用方式：
   * const amendResults = await client.amendMultipleOrders([
   *   {
   *     instId: 'BTC-USDT-SWAP',
   *     ordId: '123456789',
   *     newSz: '0.02',
   *     newPx: '51000'
   *   },
   *   {
   *     instId: 'ETH-USDT-SWAP',
   *     ordId: '987654321',
   *     newSz: '0.2',
   *     newPx: '3100'
   *   }
   * ]);
   * 
   * 注意：批量改单最多支持20个订单
   */
  amendMultipleOrders(params: AmendOrderRequest[]): Promise<AmendedOrder[]> {
    return this.postPrivate('/api/v5/trade/amend-batch-orders', params);
  }

  /**
   * 平仓
   * 
   * 平掉指定的持仓
   * 
   * API端点：POST /api/v5/trade/close-position
   * 
   * @param params - 平仓请求参数
   * @returns Promise<ClosedPositions[]> - 平仓结果
   * 
   * 使用方式：
   * const closeResult = await client.closePositions({
   *   instId: 'BTC-USDT-SWAP',
   *   posSide: 'long',  // 持仓方向：'long'（多）或'short'（空）
   *   mgnMode: 'cross'  // 保证金模式：'cross'（全仓）或'isolated'（逐仓）
   * });
   * 
   * 注意：平仓会立即执行，请谨慎操作
   */
  closePositions(params: ClosePositionRequest): Promise<ClosedPositions[]> {
    return this.postPrivate('/api/v5/trade/close-position', params);
  }

  /**
   * 获取订单详情
   * 
   * 获取指定订单的详细信息
   * 
   * API端点：GET /api/v5/trade/order
   * 
   * @param params - 查询参数
   * @returns Promise<OrderDetails[]> - 订单详情列表
   * 
   * 使用方式：
   * const orderDetails = await client.getOrderDetails({
   *   instId: 'BTC-USDT-SWAP',
   *   ordId: '123456789'
   * });
   */
  getOrderDetails(params: OrderIdRequest): Promise<OrderDetails[]> {
    return this.getPrivate('/api/v5/trade/order', params);
  }

  /**
   * 获取当前订单列表
   * 
   * 获取账户中当前未成交的订单列表
   * 
   * API端点：GET /api/v5/trade/orders-pending
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<OrderListItem[]> - 当前订单列表
   * 
   * 使用方式：
   * // 获取所有当前订单
   * const allOrders = await client.getOrderList();
   * 
   * // 获取特定产品的当前订单
   * const btcOrders = await client.getOrderList({
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getOrderList(params?: OrderHistoryRequest): Promise<OrderListItem[]> {
    return this.getPrivate('/api/v5/trade/orders-pending', params);
  }

  /**
   * 获取订单历史
   * 
   * 获取最近7天的订单历史记录
   * 
   * API端点：GET /api/v5/trade/orders-history
   * 
   * @param params - 查询参数
   * @returns Promise<HistoricOrder[]> - 订单历史记录列表
   * 
   * 使用方式：
   * const orderHistory = await client.getOrderHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口最多返回最近7天的数据
   */
  getOrderHistory(params: OrderHistoryRequest): Promise<HistoricOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-history', params);
  }

  /**
   * 获取订单历史（归档）
   * 
   * 获取最近3个月的订单历史记录
   * 
   * API端点：GET /api/v5/trade/orders-history-archive
   * 
   * @param params - 查询参数
   * @returns Promise<HistoricOrder[]> - 订单历史记录列表
   * 
   * 使用方式：
   * const orderHistory = await client.getOrderHistoryArchive({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口最多返回最近3个月的数据
   */
  getOrderHistoryArchive(
    params: OrderHistoryRequest,
  ): Promise<HistoricOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-history-archive', params);
  }

  /**
   * 获取成交记录
   * 
   * 获取最近7天的成交记录
   * 
   * API端点：GET /api/v5/trade/fills
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<OrderFill[]> - 成交记录列表
   * 
   * 使用方式：
   * // 获取所有成交记录
   * const allFills = await client.getFills();
   * 
   * // 获取特定产品的成交记录
   * const btcFills = await client.getFills({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：此接口最多返回最近7天的数据
   */
  getFills(params?: FillsHistoryRequest): Promise<OrderFill[]> {
    return this.getPrivate('/api/v5/trade/fills', params);
  }

  /**
   * 获取成交记录（归档）
   * 
   * 获取最近3个月的成交记录
   * 
   * API端点：GET /api/v5/trade/fills-history
   * 
   * @param params - 查询参数
   * @returns Promise<OrderFill[]> - 成交记录列表
   * 
   * 使用方式：
   * const fillsHistory = await client.getFillsHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口最多返回最近3个月的数据
   */
  getFillsHistory(params: FillsHistoryRequest): Promise<OrderFill[]> {
    return this.getPrivate('/api/v5/trade/fills-history', params);
  }

  /**
   * 获取一键兑换币种列表
   * 
   * 获取可进行一键兑换的币种列表
   * 
   * API端点：GET /api/v5/trade/easy-convert-currency-list
   * 
   * @param params - 请求参数（可选）
   * @param params.source - 来源账户：'trading'（交易账户）或'funding'（资金账户）（可选）
   * @returns Promise<any> - 一键兑换币种列表
   * 
   * 使用方式：
   * // 获取所有可兑换币种
   * const currencies = await client.getEasyConvertCurrencies();
   * 
   * // 获取特定来源账户的可兑换币种
   * const tradingCurrencies = await client.getEasyConvertCurrencies({ source: 'trading' });
   */
  getEasyConvertCurrencies(params?: { source?: string }): Promise<any> {
    return this.getPrivate('/api/v5/trade/easy-convert-currency-list', params);
  }

  /**
   * 提交一键兑换
   * 
   * 将小额币种兑换为主流币种
   * 仅适用于余额小于$10的加密货币
   * 
   * API端点：POST /api/v5/trade/easy-convert
   * 
   * @param params - 兑换请求参数
   * @param params.fromCcys - 源币种数组，最多5个币种
   * @param params.toCcy - 目标币种
   * @param params.source - 来源账户：'trading'（交易账户）或'funding'（资金账户）（可选）
   * @returns Promise<APIResponse<any>> - 兑换结果
   * 
   * 使用方式：
   * const convertResult = await client.submitEasyConvert({
   *   fromCcys: ['BTC', 'ETH', 'LTC'],  // 最多5个币种
   *   toCcy: 'USDT',
   *   source: 'trading'
   * });
   * 
   * 注意：
   * - 仅适用于余额小于$10的加密货币
   * - 最多可选择5个币种
   * - 如果有多个币种，在"from"字段中用逗号分隔
   */
  submitEasyConvert(params: {
    fromCcys: string[];
    toCcy: string;
    source?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v5/trade/easy-convert', params);
  }

  /**
   * 获取一键兑换历史
   * 
   * 获取一键兑换交易的历史记录和状态
   * 
   * API端点：GET /api/v5/trade/easy-convert-history
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<APIResponse<any>> - 一键兑换历史记录
   * 
   * 使用方式：
   * // 获取所有兑换历史
   * const allHistory = await client.getEasyConvertHistory();
   * 
   * // 获取分页的兑换历史
   * const history = await client.getEasyConvertHistory({
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getEasyConvertHistory(params?: Pagination): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v5/trade/easy-convert-history', params);
  }

  /**
   * 获取一键还款币种列表
   * 
   * 获取债务币种数据和还款币种列表
   * 债务币种包括全仓和逐仓债务
   * 
   * API端点：GET /api/v5/trade/one-click-repay-currency-list
   * 
   * @param params - 请求参数（可选）
   * @param params.debtType - 债务类型：'cross'（全仓）或'isolated'（逐仓）（可选）
   * @returns Promise<APIResponse<any>> - 一键还款币种列表
   * 
   * 使用方式：
   * // 获取所有债务类型的还款币种
   * const allCurrencies = await client.getOneClickRepayCurrencyList();
   * 
   * // 获取特定债务类型的还款币种
   * const crossCurrencies = await client.getOneClickRepayCurrencyList({ debtType: 'cross' });
   */
  getOneClickRepayCurrencyList(params?: {
    debtType?: 'cross' | 'isolated';
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v5/trade/one-click-repay-currency-list',
      params,
    );
  }

  /**
   * 提交一键还款
   * 
   * 一键还款全仓债务
   * 逐仓债务不适用
   * 最大还款金额基于资金账户和交易账户的剩余可用余额
   * 
   * API端点：POST /api/v5/trade/one-click-repay
   * 
   * @param params - 还款请求参数
   * @param params.debtCcys - 债务币种数组
   * @param params.repayCcy - 还款币种
   * @returns Promise<APIResponse<any>> - 还款结果
   * 
   * 使用方式：
   * const repayResult = await client.submitOneClickRepay({
   *   debtCcys: ['BTC', 'ETH'],  // 债务币种
   *   repayCcy: 'USDT'           // 还款币种
   * });
   * 
   * 注意：
   * - 仅适用于全仓债务，逐仓债务不适用
   * - 最大还款金额基于账户可用余额
   */
  submitOneClickRepay(params: {
    debtCcys: string[];
    repayCcy: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v5/trade/one-click-repay', params);
  }

  /**
   * 获取一键还款历史
   * 
   * 获取一键还款交易的历史记录和状态
   * 
   * API端点：GET /api/v5/trade/one-click-repay-history
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<APIResponse<any>> - 一键还款历史记录
   * 
   * 使用方式：
   * // 获取所有还款历史
   * const allHistory = await client.getOneClickRepayHistory();
   * 
   * // 获取分页的还款历史
   * const history = await client.getOneClickRepayHistory({
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getOneClickRepayHistory(params?: Pagination): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v5/trade/one-click-repay-history', params);
  }

  /**
   * 批量撤单
   * 
   * 批量撤销指定产品类型和产品系列的所有订单
   * 
   * API端点：POST /api/v5/trade/mass-cancel
   * 
   * @param params - 批量撤单请求参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.instFamily - 产品系列，如BTC-USDT
   * @param params.lockInterval - 锁定间隔（可选）
   * @returns Promise<{result: boolean}[]> - 批量撤单结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelMassOrder({
   *   instType: 'SWAP',
   *   instFamily: 'BTC-USDT'
   * });
   * 
   * 注意：此操作会撤销指定产品系列下的所有未成交订单
   */
  cancelMassOrder(params: {
    instType: string;
    instFamily: string;
    lockInterval?: string;
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/trade/mass-cancel', params);
  }

  /**
   * 延迟撤销所有订单
   * 
   * 在指定时间后自动撤销所有未成交订单
   * 
   * API端点：POST /api/v5/trade/cancel-all-after
   * 
   * @param params - 延迟撤单请求参数
   * @param params.timeOut - 超时时间（秒），范围1-86400
   * @param params.tag - 标签（可选）
   * @returns Promise<CancelAllAfterResponse[]> - 延迟撤单结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelAllAfter({
   *   timeOut: '60',  // 60秒后撤销所有订单
   *   tag: 'risk_control'
   * });
   * 
   * 注意：
   * - 超时时间范围：1-86400秒（1秒到24小时）
   * - 此操作会影响所有未成交订单
   */
  cancelAllAfter(params: {
    timeOut: string;
    tag?: string;
  }): Promise<CancelAllAfterResponse[]> {
    return this.postPrivate('/api/v5/trade/cancel-all-after', params);
  }

  /**
   * 获取账户频率限制
   * 
   * 获取账户的API调用频率限制信息
   * 
   * API端点：GET /api/v5/trade/account-rate-limit
   * 
   * @returns Promise<any[]> - 账户频率限制信息
   * 
   * 使用方式：
   * const rateLimit = await client.getAccountRateLimit();
   * console.log('频率限制:', rateLimit);
   * 
   * 注意：此接口返回的信息包括各种API端点的调用频率限制
   */
  getAccountRateLimit(): Promise<any[]> {
    return this.getPrivate('/api/v5/trade/account-rate-limit');
  }

  /**
   * 订单预检查
   * 
   * 在下单前检查订单参数的有效性
   * 
   * API端点：POST /api/v5/trade/order-precheck
   * 
   * @param params - 订单预检查请求参数
   * @returns Promise<any[]> - 预检查结果
   * 
   * 使用方式：
   * const precheckResult = await client.submitOrderPrecheck({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'limit',
   *   sz: '0.01',
   *   px: '50000'
   * });
   * 
   * 注意：此接口仅用于检查订单参数，不会实际下单
   */
  submitOrderPrecheck(params: OrderPrecheckRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/trade/order-precheck', params);
  }

  /**
   *
   * Orderbook trading - Algo trading endpoints
   *
   */

  /**
   * 下算法订单
   * 
   * 提交算法订单到交易系统
   * 
   * API端点：POST /api/v5/trade/order-algo
   * 
   * @param params - 算法订单请求参数
   * @returns Promise<AlgoOrderResult[]> - 算法订单结果
   * 
   * 使用方式：
   * const algoOrder = await client.placeAlgoOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'conditional',  // 算法订单类型
   *   sz: '0.01',
   *   slTriggerPx: '48000',   // 止损触发价
   *   slOrdPx: '47900'        // 止损委托价
   * });
   * 
   * 注意：算法订单包括条件单、止盈止损单、移动止盈止损单等
   */
  placeAlgoOrder(params: AlgoOrderRequest): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/order-algo', params);
  }

  /**
   * 撤销算法订单
   * 
   * 撤销指定的算法订单
   * 
   * API端点：POST /api/v5/trade/cancel-algos
   * 
   * @param params - 撤销算法订单请求参数数组
   * @returns Promise<AlgoOrderResult[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelAlgoOrder([
   *   {
   *     algoId: '123456789',
   *     instId: 'BTC-USDT-SWAP'
   *   }
   * ]);
   * 
   * 注意：可以批量撤销多个算法订单
   */
  cancelAlgoOrder(
    params: CancelAlgoOrderRequest[],
  ): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-algos', params);
  }

  /**
   * 修改算法订单
   * 
   * 修改指定的算法订单参数
   * 
   * API端点：POST /api/v5/trade/amend-algos
   * 
   * @param params - 修改算法订单请求参数
   * @returns Promise<AmendAlgoOrderResult[]> - 修改结果
   * 
   * 使用方式：
   * const amendResult = await client.amendAlgoOrder({
   *   algoId: '123456789',
   *   instId: 'BTC-USDT-SWAP',
   *   newSz: '0.02',  // 新的数量
   *   newPx: '51000'  // 新的价格
   * });
   * 
   * 注意：只能修改未触发的算法订单
   */
  amendAlgoOrder(
    params: AmendAlgoOrderRequest,
  ): Promise<AmendAlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/amend-algos', params);
  }

  /**
   * 撤销高级算法订单
   * 
   * 撤销指定的高级算法订单
   * 
   * API端点：POST /api/v5/trade/cancel-advance-algos
   * 
   * @param params - 撤销高级算法订单请求参数数组
   * @returns Promise<AlgoOrderResult[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelAdvanceAlgoOrder([
   *   {
   *     algoId: '123456789',
   *     instId: 'BTC-USDT-SWAP'
   *   }
   * ]);
   * 
   * 注意：高级算法订单包括移动止盈止损单等复杂策略
   */
  cancelAdvanceAlgoOrder(
    params: CancelAlgoOrderRequest[],
  ): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-advance-algos', params);
  }

  /**
   * 获取算法订单详情
   * 
   * 获取指定算法订单的详细信息
   * 
   * API端点：GET /api/v5/trade/order-algo
   * 
   * @param params - 查询参数
   * @returns Promise<AlgoOrderDetailsResult[]> - 算法订单详情列表
   * 
   * 使用方式：
   * const algoOrderDetails = await client.getAlgoOrderDetails({
   *   algoId: '123456789',
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getAlgoOrderDetails(
    params: AlgoOrderDetailsRequest,
  ): Promise<AlgoOrderDetailsResult[]> {
    return this.getPrivate('/api/v5/trade/order-algo', params);
  }

  /**
   * 获取算法订单列表
   * 
   * 获取账户中当前未完成的算法订单列表
   * 
   * API端点：GET /api/v5/trade/orders-algo-pending
   * 
   * @param params - 查询参数
   * @returns Promise<AlgoOrderListItem[]> - 算法订单列表
   * 
   * 使用方式：
   * // 获取所有算法订单
   * const allAlgoOrders = await client.getAlgoOrderList({});
   * 
   * // 获取特定产品的算法订单
   * const btcAlgoOrders = await client.getAlgoOrderList({
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getAlgoOrderList(
    params: AlgoRecentHistoryRequest,
  ): Promise<AlgoOrderListItem[]> {
    return this.getPrivate('/api/v5/trade/orders-algo-pending', params);
  }

  /**
   * 获取算法订单历史
   * 
   * 获取算法订单的历史记录
   * 
   * API端点：GET /api/v5/trade/orders-algo-history
   * 
   * @param params - 查询参数
   * @returns Promise<HistoricAlgoOrder[]> - 算法订单历史记录列表
   * 
   * 使用方式：
   * const algoOrderHistory = await client.getAlgoOrderHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getAlgoOrderHistory(
    params: AlgoLongHistoryRequest,
  ): Promise<HistoricAlgoOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-algo-history', params);
  }

  /**
   *
   * Orderbook trading - Grid trading endpoints
   *
   */

  /**
   * 下网格算法订单
   * 
   * 提交网格交易算法订单
   * 
   * API端点：POST /api/v5/tradingBot/grid/order-algo
   * 
   * @param params - 网格算法订单请求参数
   * @returns Promise<any[]> - 网格算法订单结果
   * 
   * 使用方式：
   * const gridOrder = await client.placeGridAlgoOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'grid',
   *   sz: '0.01',
   *   gridNum: '10',        // 网格数量
   *   gridPx: '1000',       // 网格间距
   *   upperPx: '60000',     // 上限价格
   *   lowerPx: '50000'      // 下限价格
   * });
   * 
   * 注意：网格交易是一种自动化交易策略，在价格区间内自动买卖
   */
  placeGridAlgoOrder(params: GridAlgoOrderRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/order-algo', params);
  }

  /**
   * 修改网格算法订单
   * 
   * 修改指定的网格算法订单参数
   * 
   * API端点：POST /api/v5/tradingBot/grid/amend-order-algo
   * 
   * @param params - 修改网格算法订单请求参数
   * @param params.algoId - 算法订单ID
   * @param params.instId - 产品ID
   * @param params.slTriggerPx - 止损触发价格（可选）
   * @param params.tpTriggerPx - 止盈触发价格（可选）
   * @param params.tpRatio - 止盈比例（可选）
   * @param params.slRatio - 止损比例（可选）
   * @param params.triggerParams - 触发参数数组（可选）
   * @returns Promise<any[]> - 修改结果
   * 
   * 使用方式：
   * const amendResult = await client.amendGridAlgoOrder({
   *   algoId: '123456789',
   *   instId: 'BTC-USDT-SWAP',
   *   slTriggerPx: '48000',  // 新的止损触发价
   *   tpTriggerPx: '52000'   // 新的止盈触发价
   * });
   */
  amendGridAlgoOrder(params: {
    algoId: string;
    instId: string;
    slTriggerPx?: string;
    tpTriggerPx?: string;
    tpRatio?: string;
    slRatio?: string;
    triggerParams?: {
      triggerAction?: string;
      triggerStrategy?: string;
      triggerPx?: string;
      stopType?: string;
    }[];
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/amend-order-algo', params);
  }

  /**
   * 停止网格算法订单
   * 
   * 停止指定的网格算法订单
   * 
   * API端点：POST /api/v5/tradingBot/grid/stop-order-algo
   * 
   * @param orders - 停止网格算法订单请求参数数组
   * @returns Promise<any[]> - 停止结果
   * 
   * 使用方式：
   * const stopResult = await client.stopGridAlgoOrder([
   *   {
   *     algoId: '123456789',
   *     instId: 'BTC-USDT-SWAP'
   *   }
   * ]);
   * 
   * 注意：停止后的网格订单将不再执行新的交易
   */
  stopGridAlgoOrder(orders: StopGridAlgoOrderRequest[]): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/stop-order-algo', orders);
  }

  /**
   * 关闭网格合约持仓
   * 
   * 关闭网格交易中的合约持仓
   * 
   * API端点：POST /api/v5/tradingBot/grid/close-position
   * 
   * @param params - 关闭网格合约持仓请求参数
   * @returns Promise<any[]> - 关闭结果
   * 
   * 使用方式：
   * const closeResult = await client.closeGridContractPosition({
   *   algoId: '123456789',
   *   instId: 'BTC-USDT-SWAP',
   *   posSide: 'long'  // 持仓方向：'long'（多）或'short'（空）
   * });
   * 
   * 注意：此操作会关闭指定方向的网格合约持仓
   */
  closeGridContractPosition(
    params: CloseContractGridPositionRequest,
  ): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/close-position', params);
  }

  /**
   * 撤销网格合约平仓订单
   * 
   * 撤销网格交易中的合约平仓订单
   * 
   * API端点：POST /api/v5/tradingBot/grid/cancel-close-order
   * 
   * @param params - 撤销网格合约平仓订单请求参数
   * @param params.algoId - 算法订单ID
   * @param params.ordId - 订单ID
   * @returns Promise<any[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelGridContractCloseOrder({
   *   algoId: '123456789',
   *   ordId: '987654321'
   * });
   * 
   * 注意：只能撤销未成交的平仓订单
   */
  cancelGridContractCloseOrder(params: {
    algoId: string;
    ordId: string;
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/cancel-close-order',
      params,
    );
  }

  /**
   * 立即触发网格算法订单
   * 
   * 立即触发指定的网格算法订单
   * 
   * API端点：POST /api/v5/tradingBot/grid/order-instant-trigger
   * 
   * @param params - 立即触发网格算法订单请求参数
   * @param params.algoId - 算法订单ID
   * @returns Promise<{algoId: string, algoClOrdId: string}[]> - 触发结果
   * 
   * 使用方式：
   * const triggerResult = await client.instantTriggerGridAlgoOrder({
   *   algoId: '123456789'
   * });
   * 
   * 注意：此操作会立即触发网格订单的执行
   */
  instantTriggerGridAlgoOrder(params: { algoId: string }): Promise<
    {
      algoId: string;
      algoClOrdId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/order-instant-trigger',
      params,
    );
  }

  /**
   * 获取网格算法订单列表
   * 
   * 获取账户中当前未完成的网格算法订单列表
   * 
   * API端点：GET /api/v5/tradingBot/grid/orders-algo-pending
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 网格算法订单列表
   * 
   * 使用方式：
   * // 获取所有网格算法订单
   * const allGridOrders = await client.getGridAlgoOrderList({});
   * 
   * // 获取特定产品的网格算法订单
   * const btcGridOrders = await client.getGridAlgoOrderList({
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getGridAlgoOrderList(params: GetGridAlgoOrdersRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-pending',
      params,
    );
  }

  /**
   * 获取网格算法订单历史
   * 
   * 获取网格算法订单的历史记录
   * 
   * API端点：GET /api/v5/tradingBot/grid/orders-algo-history
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 网格算法订单历史记录
   * 
   * 使用方式：
   * const gridHistory = await client.getGridAlgoOrderHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getGridAlgoOrderHistory(params: GetGridAlgoOrdersRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-history',
      params,
    );
  }

  /**
   * 获取网格算法订单详情
   * 
   * 获取指定网格算法订单的详细信息
   * 
   * API端点：GET /api/v5/tradingBot/grid/orders-algo-details
   * 
   * @param params - 查询参数
   * @param params.algoOrdType - 算法订单类型
   * @param params.algoId - 算法订单ID
   * @returns Promise<any[]> - 网格算法订单详情
   * 
   * 使用方式：
   * const gridDetails = await client.getGridAlgoOrderDetails({
   *   algoOrdType: 'contract_grid',
   *   algoId: '123456789'
   * });
   */
  getGridAlgoOrderDetails(params: {
    algoOrdType: GridAlgoOrderType;
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-details',
      params,
    );
  }

  /**
   * 获取网格算法子订单
   * 
   * 获取网格算法订单的子订单列表
   * 
   * API端点：GET /api/v5/tradingBot/grid/sub-orders
   * 
   * @param params - 查询参数
   * @param params.algoOrdType - 算法订单类型
   * @param params.algoId - 算法订单ID
   * @param params.type - 子订单类型
   * @param params.groupId - 组ID（可选）
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回数量限制（可选）
   * @returns Promise<any[]> - 网格算法子订单列表
   * 
   * 使用方式：
   * const subOrders = await client.getGridAlgoSubOrders({
   *   algoOrdType: 'contract_grid',
   *   algoId: '123456789',
   *   type: 'live',
   *   limit: 100
   * });
   */
  getGridAlgoSubOrders(params: {
    algoOrdType: GridAlgoOrderType;
    algoId: string;
    type: GridAlgoSubOrderType;
    groupId?: string;
    after?: numberInString;
    before?: numberInString;
    limit?: number;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/sub-orders', params);
  }

  /**
   * 获取网格算法订单持仓
   * 
   * 获取网格算法订单的持仓信息
   * 
   * API端点：GET /api/v5/tradingBot/grid/positions
   * 
   * @param params - 查询参数
   * @param params.algoOrdType - 算法订单类型，固定为'contract_grid'
   * @param params.algoId - 算法订单ID
   * @returns Promise<any[]> - 网格算法订单持仓信息
   * 
   * 使用方式：
   * const positions = await client.getGridAlgoOrderPositions({
   *   algoOrdType: 'contract_grid',
   *   algoId: '123456789'
   * });
   * 
   * 注意：此接口仅适用于合约网格交易
   */
  getGridAlgoOrderPositions(params: {
    algoOrdType: 'contract_grid';
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/positions', params);
  }

  /**
   * 现货网格提取收益
   * 
   * 从现货网格交易中提取收益
   * 
   * API端点：POST /api/v5/tradingBot/grid/withdraw-income
   * 
   * @param params - 提取收益请求参数
   * @param params.algoId - 算法订单ID
   * @returns Promise<any[]> - 提取收益结果
   * 
   * 使用方式：
   * const withdrawResult = await client.spotGridWithdrawIncome({
   *   algoId: '123456789'
   * });
   * 
   * 注意：此接口仅适用于现货网格交易
   */
  spotGridWithdrawIncome(params: { algoId: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/withdraw-income', params);
  }

  /**
   * 计算网格保证金余额
   * 
   * 计算网格交易的保证金余额调整
   * 
   * API端点：POST /api/v5/tradingBot/grid/compute-margin-balance
   * 
   * @param params - 计算参数
   * @param params.algoId - 算法订单ID
   * @param params.type - 操作类型：'add'（增加）或'reduce'（减少）
   * @param params.amt - 调整金额（可选）
   * @returns Promise<any[]> - 计算结果
   * 
   * 使用方式：
   * const computeResult = await client.computeGridMarginBalance({
   *   algoId: '123456789',
   *   type: 'add',
   *   amt: '1000'
   * });
   * 
   * 注意：此接口用于计算保证金调整，不会实际执行调整操作
   */
  computeGridMarginBalance(params: {
    algoId: string;
    type: 'add' | 'reduce';
    amt?: numberInString;
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/compute-margin-balance',
      params,
    );
  }

  /**
   * 调整网格保证金余额
   * 
   * 调整网格交易的保证金余额
   * 
   * API端点：POST /api/v5/tradingBot/grid/margin-balance
   * 
   * @param params - 调整参数
   * @param params.algoId - 算法订单ID
   * @param params.type - 操作类型：'add'（增加）或'reduce'（减少）
   * @param params.amt - 调整金额（可选）
   * @param params.percent - 调整比例（可选）
   * @returns Promise<any[]> - 调整结果
   * 
   * 使用方式：
   * const adjustResult = await client.adjustGridMarginBalance({
   *   algoId: '123456789',
   *   type: 'add',
   *   amt: '1000'
   * });
   * 
   * 注意：amt和percent参数至少需要提供一个
   */
  adjustGridMarginBalance(params: {
    algoId: string;
    type: 'add' | 'reduce';
    amt?: numberInString;
    percent?: numberInString;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/margin-balance', params);
  }

  /**
   * 调整网格投资金额
   * 
   * 调整网格交易的投资金额
   * 
   * API端点：POST /api/v5/tradingBot/grid/adjust-investment
   * 
   * @param params - 调整参数
   * @param params.algoId - 算法订单ID
   * @param params.amt - 调整金额
   * @returns Promise<{algoId: string}[]> - 调整结果
   * 
   * 使用方式：
   * const adjustResult = await client.adjustGridInvestment({
   *   algoId: '123456789',
   *   amt: '5000'
   * });
   * 
   * 注意：调整投资金额会影响网格交易的执行策略
   */
  adjustGridInvestment(params: { algoId: string; amt: string }): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/adjust-investment',
      params,
    );
  }

  /**
   * 获取网格AI参数
   * 
   * 获取网格交易的AI推荐参数
   * 
   * API端点：GET /api/v5/tradingBot/grid/ai-param
   * 
   * @param params - 查询参数
   * @param params.algoOrdType - 算法订单类型
   * @param params.instId - 产品ID
   * @param params.direction - 合约网格方向
   * @param params.duration - 持续时间：'7D'、'30D'、'180D'（可选）
   * @returns Promise<any[]> - AI参数列表
   * 
   * 使用方式：
   * const aiParams = await client.getGridAIParameter({
   *   algoOrdType: 'contract_grid',
   *   instId: 'BTC-USDT-SWAP',
   *   direction: 'long',
   *   duration: '30D'
   * });
   * 
   * 注意：AI参数基于历史数据和市场分析生成
   */
  getGridAIParameter(params: {
    algoOrdType: GridAlgoOrderType;
    instId: string;
    direction: ContractGridDirection;
    duration?: '7D' | '30D' | '180D';
  }): Promise<any[]> {
    return this.get('/api/v5/tradingBot/grid/ai-param', params);
  }

  /**
   * 计算网格最小投资
   * 
   * 计算网格交易的最小投资金额
   * 
   * API端点：POST /api/v5/tradingBot/grid/min-investment
   * 
   * @param params - 计算参数
   * @param params.amt - 投资金额
   * @param params.ccy - 币种
   * @returns Promise<any[]> - 计算结果
   * 
   * 使用方式：
   * const minInvestment = await client.computeGridMinInvestment({
   *   amt: '10000',
   *   ccy: 'USDT'
   * });
   * 
   * 注意：此接口用于计算网格交易的最小投资要求
   */
  computeGridMinInvestment(params: {
    amt: string;
    ccy: string;
  }): Promise<any[]> {
    return this.post('/api/v5/tradingBot/grid/min-investment', params);
  }

  /**
   * 获取RSI回测结果
   * 
   * 获取RSI策略的回测测试结果
   * 
   * API端点：GET /api/v5/tradingBot/public/rsi-back-testing
   * 
   * @param params - 查询参数
   * @returns Promise<{triggerNum: string}[]> - RSI回测结果列表
   * 
   * 使用方式：
   * const rsiResults = await client.getRSIBackTesting({
   *   instId: 'BTC-USDT-SWAP',
   *   period: '14',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：RSI（相对强弱指数）是一种技术分析指标
   */
  getRSIBackTesting(params: GetRSIBackTestingRequest): Promise<
    {
      triggerNum: string;
    }[]
  > {
    return this.get('/api/v5/tradingBot/public/rsi-back-testing', params);
  }

  /**
   * 获取网格最大数量
   * 
   * 获取网格交易的最大数量限制
   * 
   * API端点：GET /api/v5/tradingBot/grid/grid-quantity
   * 
   * @param params - 查询参数
   * @returns Promise<{maxGridQty: string}[]> - 最大网格数量列表
   * 
   * 使用方式：
   * const maxQuantity = await client.getMaxGridQuantity({
   *   instId: 'BTC-USDT-SWAP',
   *   gridNum: '10',
   *   amt: '10000'
   * });
   * 
   * 注意：此接口用于计算网格交易的数量限制
   */
  getMaxGridQuantity(params: MaxGridQuantityRequest): Promise<
    {
      maxGridQty: string;
    }[]
  > {
    return this.get('/api/v5/tradingBot/grid/grid-quantity', params);
  }

  /**
   *
   * Orderbook trading - Signal bot trading endpoints
   *
   */

  /**
   * 创建信号
   * 
   * 创建交易信号
   * 
   * API端点：POST /api/v5/tradingBot/signal/create-signal
   * 
   * @param params - 创建信号请求参数
   * @returns Promise<CreateSignalResult[]> - 创建结果
   * 
   * 使用方式：
   * const signalResult = await client.createSignal({
   *   signalName: 'BTC_RSI_SIGNAL',
   *   signalType: 'RSI',
   *   instId: 'BTC-USDT-SWAP',
   *   signalParams: {
   *     period: '14',
   *     overbought: '70',
   *     oversold: '30'
   *   }
   * });
   * 
   * 注意：信号是信号机器人交易的基础
   */
  createSignal(params: CreateSignalRequest): Promise<CreateSignalResult[]> {
    return this.postPrivate('/api/v5/tradingBot/signal/create-signal', params);
  }

  /**
   * 获取信号列表
   * 
   * 获取账户中的信号列表
   * 
   * API端点：GET /api/v5/tradingBot/signal/signals
   * 
   * @param params - 查询参数
   * @returns Promise<GetSignalsResult[]> - 信号列表
   * 
   * 使用方式：
   * // 获取所有信号
   * const allSignals = await client.getSignals({});
   * 
   * // 获取特定类型的信号
   * const rsiSignals = await client.getSignals({
   *   signalType: 'RSI'
   * });
   */
  getSignals(params: GetSignalsRequest): Promise<GetSignalsResult[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/signals', params);
  }

  /**
   * 创建信号机器人
   * 
   * 基于信号创建自动交易机器人
   * 
   * API端点：POST /api/v5/tradingBot/signal/order-algo
   * 
   * @param params - 创建信号机器人请求参数
   * @returns Promise<CreateSignalBotResult[]> - 创建结果
   * 
   * 使用方式：
   * const signalBot = await client.createSignalBot({
   *   signalId: '123456789',
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'market',
   *   sz: '0.01',
   *   slTriggerPx: '48000',  // 止损触发价
   *   tpTriggerPx: '52000'   // 止盈触发价
   * });
   * 
   * 注意：信号机器人会根据信号自动执行交易
   */
  createSignalBot(
    params: CreateSignalBotRequest,
  ): Promise<CreateSignalBotResult[]> {
    return this.postPrivate('/api/v5/tradingBot/signal/order-algo', params);
  }

  /**
   * 撤销信号机器人
   * 
   * 停止指定的信号机器人
   * 
   * API端点：POST /api/v5/tradingBot/signal/stop-order-algo
   * 
   * @param params - 撤销信号机器人请求参数
   * @param params.algoId - 算法订单ID
   * @returns Promise<CancelSignalBotsResult[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelSignalBots({
   *   algoId: '123456789'
   * });
   * 
   * 注意：撤销后的信号机器人将停止自动交易
   */
  cancelSignalBots(params: {
    algoId: string;
  }): Promise<CancelSignalBotsResult[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/signal/stop-order-algo',
      params,
    );
  }

  /**
   * 更新信号机器人保证金
   * 
   * 调整信号机器人的保证金余额
   * 
   * API端点：POST /api/v5/tradingBot/signal/margin-balance
   * 
   * @param params - 更新保证金请求参数
   * @returns Promise<{algoId: string}[]> - 更新结果
   * 
   * 使用方式：
   * const updateResult = await client.updateSignalMargin({
   *   algoId: '123456789',
   *   type: 'add',
   *   amt: '1000'
   * });
   * 
   * 注意：调整保证金会影响信号机器人的交易能力
   */
  updateSignalMargin(params: AdjustMarginBalanceRequest): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate('/api/v5/tradingBot/signal/margin-balance', params);
  }

  /**
   * 更新信号机器人止盈止损
   * 
   * 修改信号机器人的止盈止损参数
   * 
   * API端点：POST /api/v5/tradingBot/signal/amendTPSL
   * 
   * @param params - 更新止盈止损请求参数
   * @returns Promise<{algoId: string}[]> - 更新结果
   * 
   * 使用方式：
   * const updateResult = await client.updateSignalTPSL({
   *   algoId: '123456789',
   *   slTriggerPx: '48000',  // 新的止损触发价
   *   tpTriggerPx: '52000'   // 新的止盈触发价
   * });
   * 
   * 注意：修改止盈止损参数会影响风险控制
   */
  updateSignalTPSL(params: AmendTPSLRequest): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate('/api/v5/tradingBot/signal/amendTPSL', params);
  }

  /**
   * 设置信号机器人交易产品
   * 
   * 为信号机器人设置可交易的金融产品
   * 
   * API端点：POST /api/v5/tradingBot/signal/set-instruments
   * 
   * @param params - 设置交易产品请求参数
   * @returns Promise<{algoId: string}[]> - 设置结果
   * 
   * 使用方式：
   * const setResult = await client.setSignalInstruments({
   *   algoId: '123456789',
   *   instIds: ['BTC-USDT-SWAP', 'ETH-USDT-SWAP']
   * });
   * 
   * 注意：设置交易产品后，信号机器人只能在指定产品上交易
   */
  setSignalInstruments(params: SetSignalInstrumentsRequest): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/tradingBot/signal/set-instruments',
      params,
    );
  }

  /**
   * 获取信号机器人订单
   * 
   * 获取指定信号机器人的订单详情
   * 
   * API端点：GET /api/v5/tradingBot/signal/orders-algo-details
   * 
   * @param params - 查询参数
   * @param params.algoOrdType - 算法订单类型
   * @param params.algoId - 算法订单ID
   * @returns Promise<any[]> - 信号机器人订单详情
   * 
   * 使用方式：
   * const orderDetails = await client.getSignalBotOrder({
   *   algoOrdType: 'signal_bot',
   *   algoId: '123456789'
   * });
   */
  getSignalBotOrder(params: {
    algoOrdType: string;
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/orders-algo-details',
      params,
    );
  }

  /**
   * 获取活跃信号机器人
   * 
   * 获取当前活跃的信号机器人列表
   * 
   * API端点：GET /api/v5/tradingBot/signal/orders-algo-details
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 活跃信号机器人列表
   * 
   * 使用方式：
   * const activeBots = await client.getActiveSignalBot({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：返回的是当前正在运行的信号机器人
   */
  getActiveSignalBot(params: GetSignalBotRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/orders-algo-details',
      params,
    );
  }

  /**
   * 获取信号机器人历史
   * 
   * 获取信号机器人的历史记录
   * 
   * API端点：GET /api/v5/tradingBot/signal/orders-algo-history
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 信号机器人历史记录
   * 
   * 使用方式：
   * const botHistory = await client.getSignalBotHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   */
  getSignalBotHistory(params: GetSignalBotRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/orders-algo-history',
      params,
    );
  }

  /**
   * 获取信号机器人持仓
   * 
   * 获取信号机器人的持仓信息
   * 
   * API端点：GET /api/v5/tradingBot/signal/positions
   * 
   * @param params - 查询参数
   * @param params.algoOrdType - 算法订单类型
   * @param params.algoId - 算法订单ID
   * @returns Promise<any[]> - 信号机器人持仓信息
   * 
   * 使用方式：
   * const positions = await client.getSignalBotPositions({
   *   algoOrdType: 'signal_bot',
   *   algoId: '123456789'
   * });
   */
  getSignalBotPositions(params: {
    algoOrdType: string;
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/positions', params);
  }

  /**
   * 获取信号机器人持仓历史
   * 
   * 获取信号机器人的持仓历史记录
   * 
   * API端点：GET /api/v5/tradingBot/signal/positions-history
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 信号机器人持仓历史记录
   * 
   * 使用方式：
   * const positionHistory = await client.getSignalBotPositionHistory({
   *   algoId: '123456789',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   */
  getSignalBotPositionHistory(
    params: GetSignalBotPositionHistoryRequest,
  ): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/positions-history',
      params,
    );
  }

  /**
   * 关闭信号机器人持仓
   * 
   * 关闭指定信号机器人的持仓
   * 
   * API端点：POST /api/v5/tradingBot/signal/close-position
   * 
   * @param params - 关闭持仓请求参数
   * @param params.algoId - 算法订单ID
   * @param params.instId - 产品ID
   * @returns Promise<{algoId: string}[]> - 关闭结果
   * 
   * 使用方式：
   * const closeResult = await client.closeSignalBotPosition({
   *   algoId: '123456789',
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：关闭持仓会立即执行，请谨慎操作
   */
  closeSignalBotPosition(params: { algoId: string; instId: string }): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate('/api/v5/tradingBot/signal/close-position', params);
  }

  /**
   * 下信号机器人子订单
   * 
   * 为信号机器人下子订单
   * 
   * API端点：POST /api/v5/tradingBot/signal/sub-order
   * 
   * @param params - 下子订单请求参数
   * @returns Promise<any[]> - 下订单结果
   * 
   * 使用方式：
   * const subOrder = await client.placeSignalBotSubOrder({
   *   algoId: '123456789',
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'market',
   *   sz: '0.01'
   * });
   * 
   * 注意：子订单是信号机器人执行的具体交易指令
   */
  placeSignalBotSubOrder(params: PlaceSubOrderRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/signal/sub-order', params);
  }

  /**
   * 撤销子订单
   * 
   * 撤销信号机器人的子订单
   * 
   * API端点：POST /api/v5/tradingBot/signal/cancel-sub-order
   * 
   * @param params - 撤销子订单请求参数
   * @returns Promise<any[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelSubOrder({
   *   algoId: '123456789',
   *   ordId: '987654321'
   * });
   * 
   * 注意：只能撤销未成交的子订单
   */
  cancelSubOrder(params: CancelSubOrderRequest): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/signal/cancel-sub-order',
      params,
    );
  }

  /**
   * 获取信号机器人子订单
   * 
   * 获取信号机器人的子订单列表
   * 
   * API端点：GET /api/v5/tradingBot/signal/sub-orders
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 信号机器人子订单列表
   * 
   * 使用方式：
   * const subOrders = await client.getSignalBotSubOrders({
   *   algoId: '123456789',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getSignalBotSubOrders(params: GetSignalBotSubOrdersRequest): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/sub-orders', params);
  }

  /**
   * 获取信号机器人事件历史
   * 
   * 获取信号机器人的事件历史记录
   * 
   * API端点：GET /api/v5/tradingBot/signal/event-history
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 信号机器人事件历史记录
   * 
   * 使用方式：
   * const eventHistory = await client.getSignalBotEventHistory({
   *   algoId: '123456789',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：事件历史包括信号触发、订单执行等关键事件
   */
  getSignalBotEventHistory(
    params: GetSignalBotEventHistoryRequest,
  ): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/event-history', params);
  }

  /**
   *
   * Orderbook trading - Recurring buy endpoints
   *
   */

  /**
   * 提交定期买入订单
   * 
   * 创建定期买入的算法订单
   * 
   * API端点：POST /api/v5/tradingBot/recurring/order-algo
   * 
   * @param params - 定期买入订单请求参数
   * @returns Promise<RecurringBuyOrderResult[]> - 创建结果
   * 
   * 使用方式：
   * const recurringOrder = await client.submitRecurringBuyOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'market',
   *   sz: '0.01',
   *   recurringCycle: '1D',      // 定期周期：'1D'、'1W'、'1M'
   *   recurringDay: '1',         // 定期日期
   *   recurringTime: '09:00'     // 定期时间
   * });
   * 
   * 注意：定期买入是一种定投策略，按固定周期自动买入
   */
  submitRecurringBuyOrder(
    params: PlaceRecurringBuyOrderRequest,
  ): Promise<RecurringBuyOrderResult[]> {
    return this.postPrivate('/api/v5/tradingBot/recurring/order-algo', params);
  }

  /**
   * 修改定期买入订单
   * 
   * 修改指定的定期买入订单参数
   * 
   * API端点：POST /api/v5/tradingBot/recurring/amend-order-algo
   * 
   * @param params - 修改定期买入订单请求参数
   * @returns Promise<RecurringBuyOrderResult[]> - 修改结果
   * 
   * 使用方式：
   * const amendResult = await client.amendRecurringBuyOrder({
   *   algoId: '123456789',
   *   newSz: '0.02',           // 新的数量
   *   newRecurringCycle: '1W', // 新的定期周期
   *   newRecurringTime: '10:00' // 新的定期时间
   * });
   * 
   * 注意：只能修改未停止的定期买入订单
   */
  amendRecurringBuyOrder(
    params: AmendRecurringBuyOrderRequest,
  ): Promise<RecurringBuyOrderResult[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/recurring/amend-order-algo',
      params,
    );
  }

  /**
   * 停止定期买入订单
   * 
   * 停止指定的定期买入订单
   * 
   * API端点：POST /api/v5/tradingBot/recurring/stop-order-algo
   * 
   * @param params - 停止定期买入订单请求参数
   * @param params.algoId - 算法订单ID
   * @returns Promise<RecurringBuyOrderResult[]> - 停止结果
   * 
   * 使用方式：
   * const stopResult = await client.stopRecurringBuyOrder({
   *   algoId: '123456789'
   * });
   * 
   * 注意：停止后的定期买入订单将不再执行新的买入操作
   */
  stopRecurringBuyOrder(params: {
    algoId: string;
  }): Promise<RecurringBuyOrderResult[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/recurring/stop-order-algo',
      params,
    );
  }

  /**
   * 获取定期买入订单列表
   * 
   * 获取账户中当前未停止的定期买入订单列表
   * 
   * API端点：GET /api/v5/tradingBot/recurring/orders-algo-pending
   * 
   * @param params - 查询参数
   * @returns Promise<RecurringBuyOrder[]> - 定期买入订单列表
   * 
   * 使用方式：
   * // 获取所有定期买入订单
   * const allOrders = await client.getRecurringBuyOrders({});
   * 
   * // 获取特定产品的定期买入订单
   * const btcOrders = await client.getRecurringBuyOrders({
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getRecurringBuyOrders(
    params: GetRecurringBuyOrderListRequest,
  ): Promise<RecurringBuyOrder[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/recurring/orders-algo-pending',
      params,
    );
  }

  /**
   * 获取定期买入订单历史
   * 
   * 获取定期买入订单的历史记录
   * 
   * API端点：GET /api/v5/tradingBot/recurring/orders-algo-history
   * 
   * @param params - 查询参数
   * @returns Promise<RecurringBuyOrder[]> - 定期买入订单历史记录
   * 
   * 使用方式：
   * const orderHistory = await client.getRecurringBuyOrderHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getRecurringBuyOrderHistory(
    params: GetRecurringBuyOrderListRequest,
  ): Promise<RecurringBuyOrder[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/recurring/orders-algo-history',
      params,
    );
  }

  /**
   * 获取定期买入订单详情
   * 
   * 获取指定定期买入订单的详细信息
   * 
   * API端点：GET /api/v5/tradingBot/recurring/orders-algo-details
   * 
   * @param params - 查询参数
   * @param params.algoId - 算法订单ID
   * @returns Promise<RecurringBuyOrder[]> - 定期买入订单详情
   * 
   * 使用方式：
   * const orderDetails = await client.getRecurringBuyOrderDetails({
   *   algoId: '123456789'
   * });
   */
  getRecurringBuyOrderDetails(params: {
    algoId: string;
  }): Promise<RecurringBuyOrder[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/recurring/orders-algo-details',
      params,
    );
  }

  /**
   * 获取定期买入子订单
   * 
   * 获取定期买入订单的子订单列表
   * 
   * API端点：GET /api/v5/tradingBot/recurring/sub-orders
   * 
   * @param params - 查询参数
   * @returns Promise<RecurringBuySubOrder[]> - 定期买入子订单列表
   * 
   * 使用方式：
   * const subOrders = await client.getRecurringBuySubOrders({
   *   algoId: '123456789',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：子订单是定期买入策略执行的具体买入记录
   */
  getRecurringBuySubOrders(
    params: GetRecurringBuyOrderListRequest,
  ): Promise<RecurringBuySubOrder[]> {
    return this.getPrivate('/api/v5/tradingBot/recurring/sub-orders', params);
  }

  /**
   *
   * Orderbook trading - Copy trading endpoints
   *
   */

  /**
   * 获取跟单交易当前持仓
   * 
   * 获取跟单交易的当前持仓信息
   * 
   * API端点：GET /api/v5/copytrading/current-subpositions
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<CurrentSubposition[]> - 跟单交易当前持仓列表
   * 
   * 使用方式：
   * // 获取所有跟单持仓
   * const allPositions = await client.getCopytradingSubpositions();
   * 
   * // 获取特定产品的跟单持仓
   * const btcPositions = await client.getCopytradingSubpositions({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：跟单交易是一种复制其他交易者策略的交易方式
   */
  getCopytradingSubpositions(
    params?: GetCurrentSubpositionsRequest,
  ): Promise<CurrentSubposition[]> {
    return this.getPrivate('/api/v5/copytrading/current-subpositions', params);
  }

  /**
   * 获取跟单交易持仓历史
   * 
   * 获取跟单交易的持仓历史记录
   * 
   * API端点：GET /api/v5/copytrading/subpositions-history
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<SubpositionsHistory[]> - 跟单交易持仓历史记录
   * 
   * 使用方式：
   * // 获取所有持仓历史
   * const allHistory = await client.getCopytradingSubpositionsHistory();
   * 
   * // 获取特定时间段的持仓历史
   * const history = await client.getCopytradingSubpositionsHistory({
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getCopytradingSubpositionsHistory(
    params?: GetSubpositionsHistoryRequest,
  ): Promise<SubpositionsHistory[]> {
    return this.getPrivate('/api/v5/copytrading/subpositions-history', params);
  }

  /**
   * 提交跟单交易算法订单
   * 
   * 创建跟单交易的算法订单
   * 
   * API端点：POST /api/v5/copytrading/algo-order
   * 
   * @param params - 跟单交易算法订单请求参数
   * @returns Promise<PlaceCTAlgoOrderResult[]> - 创建结果
   * 
   * 使用方式：
   * const copytradingOrder = await client.submitCopytradingAlgoOrder({
   *   instId: 'BTC-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'market',
   *   sz: '0.01',
   *   leadTraderId: '123456789',  // 跟单交易者ID
   *   copyRatio: '1.0'            // 跟单比例
   * });
   * 
   * 注意：跟单交易会复制指定交易者的交易策略
   */
  submitCopytradingAlgoOrder(
    params: PlaceCTAlgoOrderRequest,
  ): Promise<PlaceCTAlgoOrderResult[]> {
    return this.postPrivate('/api/v5/copytrading/algo-order', params);
  }

  /**
   * 关闭跟单子持仓
   * 
   * 关闭指定跟单子持仓，按参数选择平仓方式
   * 
   * API端点：POST /api/v5/copytrading/close-subposition
   * 
   * @param params - 关闭请求参数
   * @returns Promise<{subPosId: string; tag: string}[]> - 关闭结果
   * 
   * 使用方式：
   * const res = await client.closeCopytradingSubposition({ subPosId: '123', pMode: 'cross' });
   * 
   * 注意：关闭操作不可撤销，请确保风险可控
   */
  closeCopytradingSubposition(params: CloseSubpositionRequest): Promise<
    {
      subPosId: string;
      tag: string;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/close-subposition', params);
  }

  /**
   * 获取跟单可交易产品
   * 
   * 获取当前账号在跟单交易中可用/开通的产品列表
   * 
   * API端点：GET /api/v5/copytrading/instruments
   * 
   * @param params - 查询参数（可选）
   * @param params.instType - 产品类型 'SPOT' | 'SWAP'（可选）
   * @returns Promise<{instId: string; enabled: boolean}[]> - 产品开通状态
   */
  getCopytradingInstruments(params?: { instType?: 'SPOT' | 'SWAP' }): Promise<
    {
      instId: string;
      enabled: boolean;
    }[]
  > {
    return this.getPrivate('/api/v5/copytrading/instruments', params);
  }

  /**
   * 设置跟单可交易产品
   * 
   * 为跟单交易开启/关闭指定产品
   * 
   * API端点：POST /api/v5/copytrading/set-instruments
   * 
   * @param params - 设置参数
   * @param params.instType - 产品类型 'SPOT' | 'SWAP'（可选）
   * @param params.instId - 产品ID
   * @returns Promise<{instId: string; enabled: boolean}[]> - 设置结果
   */
  setCopytradingInstruments(params: {
    instType?: 'SPOT' | 'SWAP';
    instId: string;
  }): Promise<
    {
      instId: string;
      enabled: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/set-instruments', params);
  }

  /**
   * 获取分润明细
   * 
   * 查询历史分润明细记录
   * 
   * API端点：GET /api/v5/copytrading/profit-sharing-details
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetCTProfitDetailsResult[]> - 分润明细
   */
  getCopytradingProfitDetails(
    params?: GetCTProfitDetailsRequest,
  ): Promise<GetCTProfitDetailsResult[]> {
    return this.getPrivate(
      '/api/v5/copytrading/profit-sharing-details',
      params,
    );
  }

  /**
   * 获取累计分润
   * 
   * 查询累计已分润统计
   * 
   * API端点：GET /api/v5/copytrading/total-profit-sharing
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetCTTotalProfitResult[]> - 累计分润
   */
  getCopytradingTotalProfit(params?: {
    instType?: 'SPOT' | 'SWAP';
  }): Promise<GetCTTotalProfitResult[]> {
    return this.getPrivate('/api/v5/copytrading/total-profit-sharing', params);
  }

  /**
   * 获取未实现分润明细
   * 
   * 查询未实现分润的明细记录
   * 
   * API端点：GET /api/v5/copytrading/unrealized-profit-sharing-details
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetCTUnrealizedProfitResult[]> - 未实现分润明细
   */
  getCopytradingUnrealizedProfit(params?: {
    instType?: 'SPOT' | 'SWAP';
  }): Promise<GetCTUnrealizedProfitResult[]> {
    return this.getPrivate(
      '/api/v5/copytrading/unrealized-profit-sharing-details',
      params,
    );
  }

  /**
   * 获取未实现分润汇总
   * 
   * 查询各产品的未实现分润总览
   * 
   * API端点：GET /api/v5/copytrading/total-unrealized-profit-sharing
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<{instId: string}[]> - 未实现分润汇总
   */
  getCopytradingTotalUnrealizedProfit(params?: { instType?: 'SWAP' }): Promise<
    {
      instType?: 'SWAP';
      instId: string;
    }[]
  > {
    return this.getPrivate(
      '/api/v5/copytrading/total-unrealized-profit-sharing',
      params,
    );
  }

  /**
   * 申请带单
   * 
   * 申请成为带单交易者（领投者）
   * 
   * API端点：POST /api/v5/copytrading/apply-lead-trading
   * 
   * @param params - 申请参数
   * @returns Promise<{result: boolean}[]> - 申请结果
   * 
   * 注意：需满足平台审核条件
   */
  applyCopytradingLeadTrading(params: {
    profitSharingTs: string;
    totalUnrealizedProfitSharingAmt: string;
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/apply-lead-trading', params);
  }

  /**
   * 停止带单
   * 
   * 停止当前带单业务
   * 
   * API端点：POST /api/v5/copytrading/stop-lead-trading
   * 
   * @param params - 停止参数（可选）
   * @returns Promise<{result: boolean}[]> - 停止结果
   */
  stopCopytradingLeadTrading(params?: { instType?: 'SWAP' }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/stop-lead-trading', params);
  }

  /**
   * 修改分润比例
   * 
   * 修改带单的分润比例
   * 
   * API端点：POST /api/v5/copytrading/amend-profit-sharing-ratio
   * 
   * @param params - 修改参数
   * @returns Promise<{result: boolean}[]> - 修改结果
   */
  updateCopytradingProfitSharing(params: {
    instType?: 'SWAP';
    profitSharingRatio: string;
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/copytrading/amend-profit-sharing-ratio',
      params,
    );
  }

  /**
   * 获取跟单账户配置
   * 
   * 查询当前账户的跟单相关配置
   * 
   * API端点：GET /api/v5/copytrading/config
   * 
   * @returns Promise<GetAccountConfigurationResult[]> - 账户配置
   */
  getCopytradingAccount(): Promise<GetAccountConfigurationResult[]> {
    return this.getPrivate('/api/v5/copytrading/config');
  }

  /**
   * 设置首次跟单参数
   * 
   * 配置首次跟单的风控及资金参数
   * 
   * API端点：POST /api/v5/copytrading/first-copy-settings
   * 
   * @param params - 设置参数
   * @returns Promise<{result: boolean}[]> - 设置结果
   */
  setCopytradingFirstCopy(params: CopySettingsRequest): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/first-copy-settings', params);
  }

  /**
   * 修改复制设置
   * 
   * 修改已建立的复制关系参数
   * 
   * API端点：POST /api/v5/copytrading/amend-copy-settings
   * 
   * @param params - 修改参数
   * @returns Promise<{result: boolean}[]> - 修改结果
   */
  updateCopytradingCopySettings(params: CopySettingsRequest): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/amend-copy-settings', params);
  }

  /**
   * 停止复制
   * 
   * 终止与某带单交易者的复制关系
   * 
   * API端点：POST /api/v5/copytrading/stop-copy-trading
   * 
   * @param params - 停止参数
   * @returns Promise<{result: boolean}[]> - 停止结果
   */
  stopCopytradingCopy(params: {
    instType?: 'SWAP';
    uniqueCode: string;
    subPosCloseType: 'market_close' | 'copy_close' | 'manual_close';
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/stop-copy-trading', params);
  }

  /**
   * 获取复制设置
   * 
   * 查询与某带单交易者的复制配置
   * 
   * API端点：GET /api/v5/copytrading/copy-settings
   * 
   * @param params - 查询参数
   * @returns Promise<GetCopySettingsResult[]> - 复制设置
   */
  getCopytradingCopySettings(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<GetCopySettingsResult[]> {
    return this.getPrivate('/api/v5/copytrading/copy-settings', params);
  }

  /**
   * 获取批量杠杆信息
   * 
   * 查询多产品的当前杠杆设置
   * 
   * API端点：GET /api/v5/copytrading/batch-leverage-info
   * 
   * @param params - 查询参数
   * @returns Promise<GetCTBatchLeverageInfoResult[]> - 杠杆信息
   */
  getCopytradingBatchLeverageInfo(
    params: GetCTBatchLeverageInfoRequest,
  ): Promise<GetCTBatchLeverageInfoResult[]> {
    return this.getPrivate('/api/v5/copytrading/batch-leverage-info', params);
  }

  /**
   * 批量设置杠杆
   * 
   * 为多产品批量设置杠杆倍数
   * 
   * API端点：POST /api/v5/copytrading/batch-set-leverage
   * 
   * @param params - 设置参数
   * @returns Promise<SetCTBatchLeverageResult[]> - 设置结果
   */
  setCopytradingBatchLeverage(
    params: SetCTBatchLeverageRequest,
  ): Promise<SetCTBatchLeverageResult[]> {
    return this.postPrivate('/api/v5/copytrading/batch-set-leverage', params);
  }

  /**
   * 获取我的跟单交易者
   * 
   * 获取当前正在跟单的交易者列表
   * 
   * API端点：GET /api/v5/copytrading/current-lead-traders
   * 
   * @param params - 查询参数（可选）
   * @param params.instType - 产品类型，如'SWAP'（可选）
   * @returns Promise<GetCTMyLeadTradersResult[]> - 我的跟单交易者列表
   * 
   * 使用方式：
   * // 获取所有跟单交易者
   * const allTraders = await client.getCopytradingMyLeadTraders();
   * 
   * // 获取特定产品类型的跟单交易者
   * const swapTraders = await client.getCopytradingMyLeadTraders({
   *   instType: 'SWAP'
   * });
   */
  getCopytradingMyLeadTraders(params?: {
    instType?: 'SWAP';
  }): Promise<GetCTMyLeadTradersResult[]> {
    return this.getPrivate('/api/v5/copytrading/current-lead-traders', params);
  }

  /**
   * 获取跟单交易者历史
   * 
   * 获取跟单交易者的历史记录
   * 
   * API端点：GET /api/v5/copytrading/lead-traders-history
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetCTHistoryLeadTradersResult[]> - 跟单交易者历史记录
   * 
   * 使用方式：
   * const tradersHistory = await client.getCopytradingLeadTradersHistory({
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   */
  getCopytradingLeadTradersHistory(
    params?: GetCTHistoryLeadTradersRequest,
  ): Promise<GetCTHistoryLeadTradersResult[]> {
    return this.getPrivate('/api/v5/copytrading/lead-traders-history', params);
  }

  /**
   * 获取跟单交易配置
   * 
   * 获取跟单交易的公共配置信息
   * 
   * API端点：GET /api/v5/copytrading/public-config
   * 
   * @param params - 查询参数（可选）
   * @param params.instType - 产品类型，如'SWAP'（可选）
   * @returns Promise<GetCopyTradingConfigResult[]> - 跟单交易配置信息
   * 
   * 使用方式：
   * // 获取所有配置
   * const allConfig = await client.getCopytradingConfig();
   * 
   * // 获取特定产品类型的配置
   * const swapConfig = await client.getCopytradingConfig({
   *   instType: 'SWAP'
   * });
   */
  getCopytradingConfig(params?: {
    instType?: 'SWAP';
  }): Promise<GetCopyTradingConfigResult[]> {
    return this.get('/api/v5/copytrading/public-config', params);
  }

  /**
   * 获取跟单交易者排名
   * 
   * 获取跟单交易者的公开排名信息
   * 
   * API端点：GET /api/v5/copytrading/public-lead-traders
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetLeadTraderRanksResult[]> - 跟单交易者排名列表
   * 
   * 使用方式：
   * const leadRanks = await client.getCopytradingLeadRanks({
   *   instType: 'SWAP',
   *   sortType: 'pnl',  // 按盈亏排序
   *   limit: '100'
   * });
   * 
   * 注意：此接口返回公开的跟单交易者排名信息
   */
  getCopytradingLeadRanks(
    params?: GetLeadTraderRanksRequest,
  ): Promise<GetLeadTraderRanksResult[]> {
    return this.get('/api/v5/copytrading/public-lead-traders', params);
  }

  /**
   * 获取跟单交易者周度盈亏
   * 
   * 获取跟单交易者的公开周度盈亏数据
   * 
   * API端点：GET /api/v5/copytrading/public-weekly-pnl
   * 
   * @param params - 查询参数
   * @param params.instType - 产品类型，如'SWAP'（可选）
   * @param params.uniqueCode - 跟单交易者唯一代码
   * @returns Promise<LeadTraderPnl[]> - 跟单交易者周度盈亏数据
   * 
   * 使用方式：
   * const weeklyPnl = await client.getCopytradingLeadWeeklyPnl({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001'
   * });
   * 
   * 注意：此接口返回公开的周度盈亏数据
   */
  getCopytradingLeadWeeklyPnl(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPnl[]> {
    return this.get('/api/v5/copytrading/public-weekly-pnl', params);
  }

  /**
   * 获取跟单交易者日度盈亏
   * 
   * 获取跟单交易者的公开日度盈亏数据
   * 
   * API端点：GET /api/v5/copytrading/public-pnl
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderPnl[]> - 跟单交易者日度盈亏数据
   * 
   * 使用方式：
   * const dailyPnl = await client.getCopytradingLeadDailyPnl({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：此接口返回公开的日度盈亏数据
   */
  getCopytradingLeadDailyPnl(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderPnl[]> {
    return this.get('/api/v5/copytrading/public-pnl', params);
  }

  /**
   * 获取跟单交易者统计
   * 
   * 获取跟单交易者的公开统计数据
   * 
   * API端点：GET /api/v5/copytrading/public-stats
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderStats[]> - 跟单交易者统计数据
   * 
   * 使用方式：
   * const leadStats = await client.getCopytradingLeadStats({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：统计数据包括胜率、收益率等关键指标
   */
  getCopytradingLeadStats(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderStats[]> {
    return this.get('/api/v5/copytrading/public-stats', params);
  }

  /**
   * 获取跟单交易者偏好币种
   * 
   * 获取跟单交易者的公开偏好币种信息
   * 
   * API端点：GET /api/v5/copytrading/public-preference-currency
   * 
   * @param params - 查询参数
   * @param params.instType - 产品类型，如'SWAP'（可选）
   * @param params.uniqueCode - 跟单交易者唯一代码
   * @returns Promise<LeadTraderPreference[]> - 跟单交易者偏好币种列表
   * 
   * 使用方式：
   * const preferences = await client.getCopytradingLeadPreferences({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001'
   * });
   * 
   * 注意：偏好币种反映交易者的交易习惯和策略
   */
  getCopytradingLeadPreferences(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPreference[]> {
    return this.get('/api/v5/copytrading/public-preference-currency', params);
  }

  /**
   * 获取跟单交易者当前持仓
   * 
   * 获取跟单交易者的公开当前持仓信息
   * 
   * API端点：GET /api/v5/copytrading/public-current-subpositions
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderCurrentPosition[]> - 跟单交易者当前持仓列表
   * 
   * 使用方式：
   * const openPositions = await client.getCopytradingLeadOpenPositions({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001'
   * });
   * 
   * 注意：此接口返回公开的当前持仓信息
   */
  getCopytradingLeadOpenPositions(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderCurrentPosition[]> {
    return this.get('/api/v5/copytrading/public-current-subpositions', params);
  }

  /**
   * 获取跟单交易者持仓历史
   * 
   * 获取跟单交易者的公开持仓历史记录
   * 
   * API端点：GET /api/v5/copytrading/public-subpositions-history
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderPositionHistory[]> - 跟单交易者持仓历史记录
   * 
   * 使用方式：
   * const positionHistory = await client.getCopytradingLeadPositionHistory({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：持仓历史反映交易者的交易轨迹和策略变化
   */
  getCopytradingLeadPositionHistory(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderPositionHistory[]> {
    return this.get('/api/v5/copytrading/public-subpositions-history', params);
  }

  /**
   * 获取跟单者列表
   * 
   * 获取跟单交易的公开跟单者列表
   * 
   * API端点：GET /api/v5/copytrading/public-copy-traders
   * 
   * @param params - 查询参数
   * @returns Promise<GetCopyTradersResult[]> - 跟单者列表
   * 
   * 使用方式：
   * const copyTraders = await client.getCopyTraders({
   *   instType: 'SWAP',
   *   uniqueCode: 'TRADER_001'
   * });
   * 
   * 注意：跟单者是跟随特定交易者进行交易的用户
   */
  getCopyTraders(
    params: GetCopyTradersRequest,
  ): Promise<GetCopyTradersResult[]> {
    return this.get('/api/v5/copytrading/public-copy-traders', params);
  }

  /**
   * 获取带单交易者私有排名
   * 
   * 获取当前账号可见范围内的带单交易者排名
   * 
   * API端点：GET /api/v5/copytrading/lead-traders
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetPrivateLeadTraderRanksResult[]> - 私有排名列表
   */
  getCopytradingLeadPrivateRanks(
    params?: GetPrivateLeadTraderRanksRequest,
  ): Promise<GetPrivateLeadTraderRanksResult[]> {
    return this.getPrivate('/api/v5/copytrading/lead-traders', params);
  }

  /**
   * 获取带单交易者私有周度盈亏
   * 
   * 获取指定带单交易者的私有周度盈亏
   * 
   * API端点：GET /api/v5/copytrading/weekly-pnl
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderPnl[]> - 周度盈亏数据
   */
  getCopytradingLeadPrivateWeeklyPnl(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPnl[]> {
    return this.getPrivate('/api/v5/copytrading/weekly-pnl', params);
  }

  /**
   * 获取带单交易者私有日度盈亏
   * 
   * 获取指定带单交易者的私有日度盈亏
   * 
   * API端点：GET /api/v5/copytrading/pnl
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderPnl[]> - 日度盈亏数据
   */
  getCopytradingPLeadPrivateDailyPnl(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderPnl[]> {
    return this.getPrivate('/api/v5/copytrading/pnl', params);
  }

  /**
   * 获取带单交易者私有统计
   * 
   * 获取指定带单交易者的私有统计数据
   * 
   * API端点：GET /api/v5/copytrading/stats
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderStats[]> - 统计数据
   */
  geCopytradingLeadPrivateStats(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderStats[]> {
    return this.getPrivate('/api/v5/copytrading/stats', params);
  }

  /**
   * 获取带单交易者私有偏好
   * 
   * 获取指定带单交易者的偏好币种（私有）
   * 
   * API端点：GET /api/v5/copytrading/preference-currency
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderPreference[]> - 偏好币种
   */
  getCopytradingLeadPrivatePreferences(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPreference[]> {
    return this.getPrivate('/api/v5/copytrading/preference-currency', params);
  }

  /**
   * 获取带单交易者私有当前持仓
   * 
   * 获取指定带单交易者当前的子持仓（私有维度）
   * 
   * API端点：GET /api/v5/copytrading/performance-current-subpositions
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderCurrentPosition[]> - 当前持仓
   */
  getCopytradingLeadPrivateOpenPositions(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderCurrentPosition[]> {
    return this.getPrivate(
      '/api/v5/copytrading/performance-current-subpositions',
      params,
    );
  }

  /**
   * 获取带单交易者私有持仓历史
   * 
   * 获取指定带单交易者的子持仓历史（私有维度）
   * 
   * API端点：GET /api/v5/copytrading/performance-subpositions-history
   * 
   * @param params - 查询参数
   * @returns Promise<LeadTraderPositionHistory[]> - 持仓历史
   */
  getCopytradingLeadPrivatePositionHistory(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderPositionHistory[]> {
    return this.getPrivate(
      '/api/v5/copytrading/performance-subpositions-history',
      params,
    );
  }

  /**
   * 获取私有跟单者列表
   * 
   * 获取当前账号下的跟单者列表（私有）
   * 
   * API端点：GET /api/v5/copytrading/copy-traders
   * 
   * @param params - 查询参数
   * @returns Promise<GetCopyTradersResult[]> - 跟单者列表
   */
  getCopyTradersPrivate(
    params: GetCopyTradersRequest,
  ): Promise<GetCopyTradersResult[]> {
    return this.getPrivate('/api/v5/copytrading/copy-traders', params);
  }

  /**
   *
   * Orderbook trading - Market data endpoints
   *
   */

  /**
   * 获取行情数据
   * 
   * 获取指定产品类型的行情数据列表
   * 
   * API端点：GET /api/v5/market/tickers
   * 
   * @param params - 查询参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.uly - 标的指数（可选）
   * @param params.instFamily - 产品系列（可选）
   * @returns Promise<Ticker[]> - 行情数据列表
   * 
   * 使用方式：
   * // 获取所有永续合约行情
   * const allSwapTickers = await client.getTickers({
   *   instType: 'SWAP'
   * });
   * 
   * // 获取特定标的的期权行情
   * const btcOptionTickers = await client.getTickers({
   *   instType: 'OPTION',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：行情数据包括最新价格、24小时涨跌幅、成交量等信息
   */
  getTickers(params: {
    instType: InstrumentType;
    uly?: string;
    instFamily?: string;
  }): Promise<Ticker[]> {
    return this.get('/api/v5/market/tickers', params);
  }

  /**
   * 获取单个产品行情
   * 
   * 获取指定产品的行情数据
   * 
   * API端点：GET /api/v5/market/ticker
   * 
   * @param params - 查询参数
   * @param params.instId - 产品ID，如'BTC-USDT-SWAP'
   * @returns Promise<Ticker[]> - 产品行情数据
   * 
   * 使用方式：
   * const btcTicker = await client.getTicker({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：返回单个产品的详细行情信息
   */
  getTicker(params: { instId: string }): Promise<Ticker[]> {
    return this.get('/api/v5/market/ticker', params);
  }

  /**
   * 获取订单簿
   * 
   * 获取指定产品的订单簿数据
   * 
   * API端点：GET /api/v5/market/books
   * 
   * @param params - 查询参数
   * @param params.instId - 产品ID，如'BTC-USDT-SWAP'
   * @param params.sz - 订单簿深度，默认20，最大400（可选）
   * @returns Promise<OrderBook[]> - 订单簿数据
   * 
   * 使用方式：
   * // 获取默认深度的订单簿
   * const orderBook = await client.getOrderBook({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * // 获取指定深度的订单簿
   * const deepOrderBook = await client.getOrderBook({
   *   instId: 'BTC-USDT-SWAP',
   *   sz: '100'
   * });
   * 
   * 注意：订单簿包含买卖双方的挂单信息，用于分析市场深度
   */
  getOrderBook(params: {
    instId: string;
    sz?: numberInString;
  }): Promise<OrderBook[]> {
    return this.get('/api/v5/market/books', params);
  }

  /**
   * 获取完整订单簿
   * 
   * 获取指定产品的完整订单簿数据
   * 
   * API端点：GET /api/v5/market/books-full
   * 
   * @param params - 查询参数
   * @param params.instId - 产品ID，如'BTC-USDT-SWAP'
   * @param params.sz - 订单簿深度（可选）
   * @returns Promise<OrderBook[]> - 完整订单簿数据
   * 
   * 使用方式：
   * // 获取完整订单簿
   * const fullOrderBook = await client.getFullOrderBook({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：完整订单簿提供更详细的市场深度信息
   */
  getFullOrderBook(params: {
    instId: string;
    sz?: string;
  }): Promise<OrderBook[]> {
    return this.get('/api/v5/market/books-full', params);
  }

  /**
   * 获取K线数据
   * 
   * 获取指定产品的K线数据
   * 
   * API端点：GET /api/v5/market/candles
   * 
   * @param params - 查询参数
   * @returns Promise<Candle[]> - K线数据列表
   * 
   * 使用方式：
   * const candles = await client.getCandles({
   *   instId: 'BTC-USDT-SWAP',
   *   bar: '1m',           // K线周期：'1m'、'3m'、'5m'、'15m'、'30m'、'1H'、'2H'、'4H'、'6H'、'12H'、'1D'、'1W'、'1M'、'3M'、'6M'、'1Y'
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：K线数据用于技术分析和图表绘制
   */
  getCandles(params: CandleRequest): Promise<Candle[]> {
    return this.get('/api/v5/market/candles', params);
  }

  /**
   * 获取历史K线数据
   * 
   * 获取指定产品的历史K线数据
   * 
   * API端点：GET /api/v5/market/history-candles
   * 
   * @param params - 查询参数
   * @returns Promise<Candle[]> - 历史K线数据列表
   * 
   * 使用方式：
   * const historicCandles = await client.getHistoricCandles({
   *   instId: 'BTC-USDT-SWAP',
   *   bar: '1D',            // K线周期
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：历史K线数据用于回测分析和长期趋势研究
   */
  getHistoricCandles(params: CandleRequest): Promise<Candle[]> {
    return this.get('/api/v5/market/history-candles', params);
  }

  /**
   * 获取最新成交记录
   * 
   * 获取指定产品的最新成交记录
   * 
   * API端点：GET /api/v5/market/trades
   * 
   * @param params - 查询参数
   * @param params.instId - 产品ID，如'BTC-USDT-SWAP'
   * @param params.limit - 返回数量限制，默认100，最大500（可选）
   * @returns Promise<Trade[]> - 最新成交记录列表
   * 
   * 使用方式：
   * // 获取默认数量的最新成交
   * const trades = await client.getTrades({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * // 获取指定数量的最新成交
   * const recentTrades = await client.getTrades({
   *   instId: 'BTC-USDT-SWAP',
   *   limit: 200
   * });
   * 
   * 注意：成交记录按时间倒序排列，最新的成交在前
   */
  getTrades(params: { instId: string; limit?: number }): Promise<Trade[]> {
    return this.get('/api/v5/market/trades', params);
  }

  /**
   * 获取历史成交记录
   * 
   * 获取指定产品的历史成交记录
   * 
   * API端点：GET /api/v5/market/history-trades
   * 
   * @param params - 查询参数
   * @param params.instId - 产品ID，如'BTC-USDT-SWAP'
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回数量限制，默认100，最大500（可选）
   * @param params.type - 成交类型：'1'（普通成交）、'2'（大宗成交）（可选）
   * @returns Promise<Trade[]> - 历史成交记录列表
   * 
   * 使用方式：
   * const historicTrades = await client.getHistoricTrades({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '200',
   *   type: '1'
   * });
   * 
   * 注意：历史成交记录用于分析交易模式和流动性
   */
  getHistoricTrades(params: {
    instId: string;
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
    type?: '1' | '2';
  }): Promise<Trade[]> {
    return this.get('/api/v5/market/history-trades', params);
  }

  /**
   * 获取期权产品族成交记录
   * 
   * 获取指定期权产品族的成交记录
   * 
   * API端点：GET /api/v5/market/option/instrument-family-trades
   * 
   * @param params - 查询参数
   * @param params.instFamily - 期权产品族，如'BTC-USDT'
   * @returns Promise<OptionTrade[]> - 期权成交记录列表
   * 
   * 使用方式：
   * const optionTrades = await client.getOptionTradesByInstrument({
   *   instFamily: 'BTC-USDT'
   * });
   * 
   * 注意：此接口返回期权产品族下的所有成交记录
   */
  getOptionTradesByInstrument(params: {
    instFamily: string;
  }): Promise<OptionTrade[]> {
    return this.get('/api/v5/market/option/instrument-family-trades', params);
  }

  /**
   * 获取期权成交记录
   * 
   * 获取期权的成交记录信息
   * 
   * API端点：GET /api/v5/public/option-trades
   * 
   * @param params - 查询参数
   * @returns Promise<OptionTrades[]> - 期权成交记录列表
   * 
   * 使用方式：
   * const optionTrades = await client.getOptionTrades({
   *   instId: 'BTC-USDT-240628-50000-C',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口返回特定期权合约的成交记录
   */
  getOptionTrades(params: GetOptionTradesRequest): Promise<OptionTrades[]> {
    return this.get('/api/v5/public/option-trades', params);
  }

  /**
   * 获取24小时平台总成交量
   * 
   * 获取OKX平台24小时的总成交量数据
   * 
   * API端点：GET /api/v5/market/platform-24-volume
   * 
   * @returns Promise<any[]> - 24小时平台总成交量数据
   * 
   * 使用方式：
   * const totalVolume = await client.get24hrTotalVolume();
   * console.log('24小时平台总成交量:', totalVolume);
   * 
   * 注意：此接口返回平台整体的交易量统计信息
   */
  get24hrTotalVolume(): Promise<any[]> {
    return this.get('/api/v5/market/platform-24-volume');
  }

  /**
   *
   * Block trading - REST endpoints
   *
   */

  /**
   * 获取大宗交易对手方
   * 
   * 获取大宗交易的对手方列表
   * 
   * API端点：GET /api/v5/rfq/counterparties
   * 
   * @returns Promise<BlockCounterParty[]> - 大宗交易对手方列表
   * 
   * 使用方式：
   * const counterParties = await client.getBlockCounterParties();
   * console.log('大宗交易对手方:', counterParties);
   * 
   * 注意：此接口返回可进行大宗交易的对手方信息
   */
  getBlockCounterParties(): Promise<BlockCounterParty[]> {
    return this.getPrivate('/api/v5/rfq/counterparties');
  }

  /**
   * 创建大宗交易询价
   * 
   * 创建大宗交易的询价请求
   * 
   * API端点：POST /api/v5/rfq/create-rfq
   * 
   * @param params - 创建询价请求参数
   * @returns Promise<CreateRFQResult[]> - 创建结果
   * 
   * 使用方式：
   * const rfqResult = await client.createBlockRFQ({
   *   instId: 'BTC-USDT-SWAP',
   *   side: 'buy',
   *   sz: '100',
   *   rfqType: '1'  // 询价类型
   * });
   * 
   * 注意：大宗交易询价用于获取大额交易的价格报价
   */
  createBlockRFQ(params: CreateBlockRFQRequest): Promise<CreateRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/create-rfq', params);
  }

  /**
   * 撤销大宗交易询价
   * 
   * 撤销指定的大宗交易询价
   * 
   * API端点：POST /api/v5/rfq/cancel-rfq
   * 
   * @param params - 撤销询价请求参数
   * @returns Promise<CancelBlockRFQResult[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelBlockRFQ({
   *   rfqId: '123456789'
   * });
   * 
   * 注意：只能撤销未成交的询价请求
   */
  cancelBlockRFQ(
    params: CancelBlockRFQRequest,
  ): Promise<CancelBlockRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-rfq', params);
  }

  /**
   * 批量撤销大宗交易询价
   * 
   * 批量撤销多个大宗交易询价
   * 
   * API端点：POST /api/v5/rfq/cancel-batch-rfqs
   * 
   * @param params - 批量撤销询价请求参数
   * @returns Promise<CancelBlockRFQResult[]> - 批量撤销结果
   * 
   * 使用方式：
   * const cancelResults = await client.cancelMultipleBlockRFQs({
   *   rfqIds: ['123456789', '987654321']
   * });
   * 
   * 注意：可以一次撤销多个询价请求
   */
  cancelMultipleBlockRFQs(
    params: CancelMultipleBlockRFQRequest,
  ): Promise<CancelBlockRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-rfqs', params);
  }

  /**
   * 撤销所有大宗交易询价
   * 
   * 撤销账户下的所有大宗交易询价
   * 
   * API端点：POST /api/v5/rfq/cancel-all-rfqs
   * 
   * @returns Promise<TimestampObject[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResults = await client.cancelAllRFQs();
   * console.log('撤销所有询价结果:', cancelResults);
   * 
   * 注意：此操作会撤销所有未成交的询价请求，请谨慎使用
   */
  cancelAllRFQs(): Promise<TimestampObject[]> {
    return this.postPrivate('/api/v5/rfq/cancel-all-rfqs');
  }

  /**
   * 执行大宗交易报价
   * 
   * 执行指定的大宗交易报价
   * 
   * API端点：POST /api/v5/rfq/execute-quote
   * 
   * @param params - 执行报价请求参数
   * @returns Promise<ExecuteBlockQuoteResult[]> - 执行结果
   * 
   * 使用方式：
   * const executeResult = await client.executeBlockQuote({
   *   quoteId: '123456789',
   *   rfqId: '987654321'
   * });
   * 
   * 注意：执行报价会立即成交，请确认报价信息
   */
  executeBlockQuote(
    params: ExecuteBlockQuoteRequest,
  ): Promise<ExecuteBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/execute-quote', params);
  }

  /**
   * 获取报价产品
   * 
   * 获取大宗交易的报价产品设置
   * 
   * API端点：GET /api/v5/rfq/maker-instrument-settings
   * 
   * @returns Promise<BlockMakerInstrumentSettings[]> - 报价产品设置列表
   * 
   * 使用方式：
   * const quoteProducts = await client.getQuoteProducts();
   * console.log('报价产品设置:', quoteProducts);
   * 
   * 注意：此接口返回可进行大宗交易报价的产品配置
   */
  getQuoteProducts(): Promise<BlockMakerInstrumentSettings[]> {
    return this.getPrivate('/api/v5/rfq/maker-instrument-settings');
  }

  /**
   * 更新报价产品
   * 
   * 更新大宗交易的报价产品设置
   * 
   * API端点：POST /api/v5/rfq/maker-instrument-settings
   * 
   * @param params - 更新报价产品请求参数
   * @returns Promise<{result: boolean}[]> - 更新结果
   * 
   * 使用方式：
   * const updateResult = await client.updateBlockQuoteProducts({
   *   instType: 'SWAP',
   *   instId: 'BTC-USDT-SWAP',
   *   enable: true
   * });
   * 
   * 注意：更新产品设置会影响大宗交易报价功能
   */
  updateBlockQuoteProducts(params: SetQuoteProductsRequest): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/rfq/maker-instrument-settings', params);
  }

  /**
   * 重置大宗交易MMP
   * 
   * 重置大宗交易的MMP（做市商保护）配置
   * 
   * API端点：POST /api/v5/rfq/mmp-reset
   * 
   * @returns Promise<{ts: string}[]> - 重置结果
   * 
   * 使用方式：
   * const resetResult = await client.resetBlockMmp();
   * console.log('MMP重置时间:', resetResult[0].ts);
   * 
   * 注意：重置MMP会清除所有相关配置，请谨慎使用
   */
  resetBlockMmp(): Promise<
    {
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/rfq/mmp-reset');
  }

  /**
   * 更新大宗交易MMP配置
   * 
   * 更新大宗交易的MMP（做市商保护）配置参数
   * 
   * API端点：POST /api/v5/rfq/mmp-config
   * 
   * @param params - 更新MMP配置请求参数
   * @returns Promise<SetMmpConfigResult[]> - 更新结果
   * 
   * 使用方式：
   * const updateResult = await client.updateBlockMmpConfig({
   *   instType: 'SWAP',
   *   mmpFrozen: false,
   *   mmpFrozenTime: '0'
   * });
   * 
   * 注意：MMP配置用于控制做市商保护机制
   */
  updateBlockMmpConfig(
    params: SetMmpConfigRequest,
  ): Promise<SetMmpConfigResult[]> {
    return this.postPrivate('/api/v5/rfq/mmp-config', params);
  }

  /**
   * 获取大宗交易MMP配置
   * 
   * 获取大宗交易的MMP（做市商保护）配置信息
   * 
   * API端点：GET /api/v5/rfq/mmp-config
   * 
   * @returns Promise<BlockMMPConfig[]> - MMP配置信息列表
   * 
   * 使用方式：
   * const mmpConfig = await client.getBlockMmpConfig();
   * console.log('MMP配置:', mmpConfig);
   * 
   * 注意：MMP配置用于保护做市商免受异常交易影响
   */
  getBlockMmpConfig(): Promise<BlockMMPConfig[]> {
    return this.getPrivate('/api/v5/rfq/mmp-config');
  }

  /**
   * 创建大宗交易报价
   * 
   * 创建大宗交易的报价
   * 
   * API端点：POST /api/v5/rfq/create-quote
   * 
   * @param params - 创建报价请求参数
   * @returns Promise<CreateBlockQuoteResult[]> - 创建结果
   * 
   * 使用方式：
   * const quoteResult = await client.createBlockQuote({
   *   instId: 'BTC-USDT-SWAP',
   *   side: 'buy',
   *   sz: '100',
   *   px: '50000'
   * });
   * 
   * 注意：创建报价后，其他用户可以看到并选择执行
   */
  createBlockQuote(
    params: CreateBlockQuoteRequest,
  ): Promise<CreateBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/create-quote', params);
  }

  /**
   * 撤销大宗交易报价
   * 
   * 撤销指定的大宗交易报价
   * 
   * API端点：POST /api/v5/rfq/cancel-quote
   * 
   * @param params - 撤销报价请求参数
   * @returns Promise<CancelBlockQuoteResult[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelBlockQuote({
   *   quoteId: '123456789'
   * });
   * 
   * 注意：只能撤销未成交的报价
   */
  cancelBlockQuote(
    params: CancelBlockQuoteRequest,
  ): Promise<CancelBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-quote', params);
  }

  /**
   * 批量撤销大宗交易报价
   * 
   * 批量撤销多个大宗交易报价
   * 
   * API端点：POST /api/v5/rfq/cancel-batch-quotes
   * 
   * @param params - 批量撤销报价请求参数
   * @returns Promise<CancelBlockQuoteResult[]> - 批量撤销结果
   * 
   * 使用方式：
   * const cancelResults = await client.cancelMultipleBlockQuotes({
   *   quoteIds: ['123456789', '987654321']
   * });
   * 
   * 注意：可以一次撤销多个报价
   */
  cancelMultipleBlockQuotes(
    params: CancelMultipleBlockQuoteRequest,
  ): Promise<CancelBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-quotes', params);
  }

  /**
   * 撤销所有大宗交易报价
   * 
   * 撤销账户下的所有大宗交易报价
   * 
   * API端点：POST /api/v5/rfq/cancel-all-quotes
   * 
   * @returns Promise<TimestampObject[]> - 撤销结果
   * 
   * 使用方式：
   * const cancelResults = await client.cancelAllBlockQuotes();
   * console.log('撤销所有报价结果:', cancelResults);
   * 
   * 注意：此操作会撤销所有未成交的报价，请谨慎使用
   */
  cancelAllBlockQuotes(): Promise<TimestampObject[]> {
    return this.postPrivate('/api/v5/rfq/cancel-all-quotes');
  }

  /**
   * 延迟撤销所有大宗交易
   * 
   * 在指定时间后自动撤销所有大宗交易相关操作
   * 
   * API端点：POST /api/v5/rfq/cancel-all-after
   * 
   * @param params - 延迟撤销请求参数
   * @param params.timeOut - 超时时间（秒），范围1-86400
   * @returns Promise<{triggerTime: string, ts: string}[]> - 延迟撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelAllBlockAfter({
   *   timeOut: '60'  // 60秒后撤销所有大宗交易
   * });
   * 
   * 注意：此操作会影响所有未完成的大宗交易操作
   */
  cancelAllBlockAfter(params: { timeOut: string }): Promise<
    {
      triggerTime: string;
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/rfq/cancel-all-after', params);
  }

  /**
   * 获取大宗交易询价列表
   * 
   * 获取账户下的大宗交易询价列表
   * 
   * API端点：GET /api/v5/rfq/rfqs
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<BlockRFQResult[]> - 大宗交易询价列表
   * 
   * 使用方式：
   * // 获取所有询价
   * const allRFQs = await client.getBlockRFQs();
   * 
   * // 获取特定状态的询价
   * const activeRFQs = await client.getBlockRFQs({
   *   state: 'active'
   * });
   */
  getBlockRFQs(params?: GetBlockRFQSParams): Promise<BlockRFQResult[]> {
    return this.getPrivate('/api/v5/rfq/rfqs', params);
  }

  /**
   * 获取大宗交易报价列表
   * 
   * 获取账户下的大宗交易报价列表
   * 
   * API端点：GET /api/v5/rfq/quotes
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<GetBlockQuoteResult[]> - 大宗交易报价列表
   * 
   * 使用方式：
   * // 获取所有报价
   * const allQuotes = await client.getBlockQuotes();
   * 
   * // 获取特定状态的报价
   * const activeQuotes = await client.getBlockQuotes({
   *   state: 'active'
   * });
   */
  getBlockQuotes(params?: GetBlockQuoteParams): Promise<GetBlockQuoteResult[]> {
    return this.getPrivate('/api/v5/rfq/quotes', params);
  }

  /**
   * 获取大宗交易成交记录
   * 
   * 获取账户下的大宗交易成交记录
   * 
   * API端点：GET /api/v5/rfq/trades
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<any[]> - 大宗交易成交记录列表
   * 
   * 使用方式：
   * // 获取所有成交记录
   * const allTrades = await client.getBlockTrades();
   * 
   * // 获取特定时间段的成交记录
   * const recentTrades = await client.getBlockTrades({
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   */
  getBlockTrades(params?: any): Promise<any[]> {
    return this.getPrivate('/api/v5/rfq/trades', params);
  }

  /**
   * 获取公共RFQ大宗交易
   * 
   * 获取公共的RFQ（询价）大宗交易信息
   * 
   * API端点：GET /api/v5/rfq/public-trades
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<any[]> - 公共RFQ大宗交易列表
   * 
   * 使用方式：
   * const publicTrades = await client.getPublicRFQBlockTrades();
   * 
   * 注意：此接口返回的是公共的大宗交易信息，无需认证
   */
  getPublicRFQBlockTrades(params?: any): Promise<any[]> {
    return this.get('/api/v5/rfq/public-trades', params);
  }

  /**
   * 获取大宗交易行情
   * 
   * 获取大宗交易的行情信息
   * 
   * API端点：GET /api/v5/market/block-tickers
   * 
   * @param params - 请求参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.uly - 标的指数（可选）
   * @returns Promise<any[]> - 大宗交易行情列表
   * 
   * 使用方式：
   * // 获取所有现货产品的大宗交易行情
   * const spotTickers = await client.getBlockTickers({ instType: 'SPOT' });
   * 
   * // 获取特定标的的大宗交易行情
   * const btcTickers = await client.getBlockTickers({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   */
  getBlockTickers(params: {
    instType: InstrumentType;
    uly?: string;
  }): Promise<any[]> {
    return this.get('/api/v5/market/block-tickers', params);
  }

  /**
   * 获取单个大宗交易行情
   * 
   * 获取指定产品的大宗交易行情信息
   * 
   * API端点：GET /api/v5/market/block-ticker
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID，如BTC-USDT-SWAP
   * @returns Promise<any[]> - 大宗交易行情信息
   * 
   * 使用方式：
   * const blockTicker = await client.getBlockTicker({
   *   instId: 'BTC-USDT-SWAP'
   * });
   */
  getBlockTicker(params: { instId: string }): Promise<any[]> {
    return this.get('/api/v5/market/block-ticker', params);
  }

  /**
   * 获取公共大宗交易
   * 
   * 获取指定产品的公共大宗交易信息
   * 
   * API端点：GET /api/v5/public/block-trades
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID，如BTC-USDT-SWAP
   * @returns Promise<PublicBlockTrade[]> - 公共大宗交易列表
   * 
   * 使用方式：
   * const blockTrades = await client.getBlockPublicTrades({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：此接口返回的是公共的大宗交易信息，无需认证
   */
  getBlockPublicTrades(params: {
    instId: string;
  }): Promise<PublicBlockTrade[]> {
    return this.get('/api/v5/public/block-trades', params);
  }

  /**
   *
   * Spread trading - REST endpoints
   *
   */

  /**
   * 提交价差交易订单
   * 
   * 提交价差交易的订单请求
   * 
   * API端点：POST /api/v5/sprd/order
   * 
   * @param params - 价差交易订单请求参数
   * @returns Promise<PlaceSpreadOrderResponse[]> - 提交结果
   * 
   * 使用方式：
   * const spreadOrder = await client.submitSpreadOrder({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   tdMode: 'cross',
   *   side: 'buy',
   *   ordType: 'limit',
   *   sz: '0.01',
   *   px: '1000'
   * });
   * 
   * 注意：价差交易是同时买卖两个相关产品的策略
   */
  submitSpreadOrder(
    params: PlaceSpreadOrderRequest,
  ): Promise<PlaceSpreadOrderResponse[]> {
    return this.postPrivate('/api/v5/sprd/order', params);
  }

  /**
   * 撤销价差交易订单
   * 
   * 撤销指定的价差交易订单
   * 
   * API端点：POST /api/v5/sprd/cancel-order
   * 
   * @param params - 撤销订单请求参数（可选）
   * @param params.ordId - 订单ID（可选）
   * @param params.clOrdId - 客户自定义订单ID（可选）
   * @returns Promise<CancelSpreadOrderResponse[]> - 撤销结果
   * 
   * 使用方式：
   * // 通过订单ID撤销
   * const cancelResult = await client.cancelSpreadOrder({
   *   ordId: '123456789'
   * });
   * 
   * // 通过客户自定义订单ID撤销
   * const cancelResult = await client.cancelSpreadOrder({
   *   clOrdId: 'CUSTOM_001'
   * });
   * 
   * 注意：ordId和clOrdId至少需要提供一个
   */
  cancelSpreadOrder(params?: {
    ordId?: string;
    clOrdId?: string;
  }): Promise<CancelSpreadOrderResponse[]> {
    return this.postPrivate('/api/v5/sprd/cancel-order', params);
  }

  /**
   * 撤销所有价差交易订单
   * 
   * 撤销指定价差产品的所有订单
   * 
   * API端点：POST /api/v5/sprd/mass-cancel
   * 
   * @param params - 撤销所有订单请求参数（可选）
   * @param params.sprdId - 价差产品ID（可选）
   * @returns Promise<{result: boolean}[]> - 撤销结果
   * 
   * 使用方式：
   * // 撤销所有价差交易订单
   * const cancelResult = await client.cancelAllSpreadOrders();
   * 
   * // 撤销特定价差产品的所有订单
   * const cancelResult = await client.cancelAllSpreadOrders({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP'
   * });
   * 
   * 注意：此操作会撤销所有未成交的价差交易订单
   */
  cancelAllSpreadOrders(params?: { sprdId?: string }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/sprd/mass-cancel', params);
  }

  /**
   * 修改价差交易订单
   * 
   * 修改指定的价差交易订单参数
   * 
   * API端点：POST /api/v5/sprd/amend-order
   * 
   * @param params - 修改订单请求参数
   * @returns Promise<UpdateSpreadOrderResponse[]> - 修改结果
   * 
   * 使用方式：
   * const updateResult = await client.updateSpreadOrder({
   *   ordId: '123456789',
   *   newSz: '0.02',  // 新的数量
   *   newPx: '1100'   // 新的价格
   * });
   * 
   * 注意：只能修改未成交的价差交易订单
   */
  updateSpreadOrder(
    params: UpdateSpreadOrderRequest,
  ): Promise<UpdateSpreadOrderResponse[]> {
    return this.postPrivate('/api/v5/sprd/amend-order', params);
  }

  /**
   * 获取价差交易订单详情
   * 
   * 获取指定价差交易订单的详细信息
   * 
   * API端点：GET /api/v5/sprd/order
   * 
   * @param params - 查询参数
   * @param params.ordId - 订单ID（可选）
   * @param params.clOrdId - 客户自定义订单ID（可选）
   * @returns Promise<SpreadOrder[]> - 价差交易订单详情
   * 
   * 使用方式：
   * // 通过订单ID查询
   * const orderDetails = await client.getSpreadOrder({
   *   ordId: '123456789'
   * });
   * 
   * // 通过客户自定义订单ID查询
   * const orderDetails = await client.getSpreadOrder({
   *   clOrdId: 'CUSTOM_001'
   * });
   * 
   * 注意：ordId和clOrdId至少需要提供一个
   */
  getSpreadOrder(params: {
    ordId?: string;
    clOrdId?: string;
  }): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/order', params);
  }

  /**
   * 获取价差交易当前订单列表
   * 
   * 获取账户中当前未成交的价差交易订单列表
   * 
   * API端点：GET /api/v5/sprd/orders-pending
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<SpreadOrder[]> - 价差交易当前订单列表
   * 
   * 使用方式：
   * // 获取所有当前价差交易订单
   * const allOrders = await client.getSpreadActiveOrders();
   * 
   * // 获取特定价差产品的当前订单
   * const btcEthOrders = await client.getSpreadActiveOrders({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP'
   * });
   */
  getSpreadActiveOrders(
    params?: GetActiveSpreadOrdersRequest,
  ): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/orders-pending', params);
  }

  /**
   * 获取价差交易订单历史
   * 
   * 获取价差交易订单的历史记录
   * 
   * API端点：GET /api/v5/sprd/orders-history
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<SpreadOrder[]> - 价差交易订单历史记录
   * 
   * 使用方式：
   * const orderHistory = await client.getSpreadOrdersRecent({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口返回最近7天的订单历史
   */
  getSpreadOrdersRecent(
    params?: GetSpreadOrderHistoryRequest,
  ): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/orders-history', params);
  }

  /**
   * 获取价差交易订单历史（归档）
   * 
   * 获取价差交易订单的历史记录（归档数据）
   * 
   * API端点：GET /api/v5/sprd/orders-history-archive
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<SpreadOrder[]> - 价差交易订单历史记录（归档）
   * 
   * 使用方式：
   * const orderHistory = await client.getSpreadOrdersArchive({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口返回最近3个月的订单历史
   */
  getSpreadOrdersArchive(
    params?: GetSpreadOrderHistoryArchiveRequest,
  ): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/orders-history-archive', params);
  }

  /**
   * 获取价差交易成交记录
   * 
   * 获取价差交易的成交记录
   * 
   * API端点：GET /api/v5/sprd/trades
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<SpreadTrade[]> - 价差交易成交记录列表
   * 
   * 使用方式：
   * const trades = await client.getSpreadTrades({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：此接口返回最近7天的成交记录
   */
  getSpreadTrades(params?: GetSpreadTradesRequest): Promise<SpreadTrade[]> {
    return this.getPrivate('/api/v5/sprd/trades', params);
  }

  /**
   * 获取价差产品列表
   * 
   * 获取可交易的价差产品列表
   * 
   * API端点：GET /api/v5/sprd/spreads
   * 
   * @param params - 查询参数（可选）
   * @returns Promise<SpreadDetails[]> - 价差产品列表
   * 
   * 使用方式：
   * // 获取所有价差产品
   * const allSpreads = await client.getSpreads();
   * 
   * // 获取特定产品类型的价差产品
   * const swapSpreads = await client.getSpreads({
   *   instType: 'SWAP'
   * });
   * 
   * 注意：价差产品是同时买卖两个相关产品的组合
   */
  getSpreads(params?: GetSpreadsRequest): Promise<SpreadDetails[]> {
    return this.get('/api/v5/sprd/spreads', params);
  }

  /**
   * 获取价差交易订单簿
   * 
   * 获取指定价差产品的订单簿数据
   * 
   * API端点：GET /api/v5/sprd/books
   * 
   * @param params - 查询参数
   * @param params.sprdId - 价差产品ID
   * @param params.sz - 订单簿深度（可选）
   * @returns Promise<SpreadOrderBook[]> - 价差交易订单簿数据
   * 
   * 使用方式：
   * const orderBook = await client.getSpreadOrderBook({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   sz: '20'
   * });
   * 
   * 注意：订单簿包含买卖双方的挂单信息
   */
  getSpreadOrderBook(params: {
    sprdId: string;
    sz?: string;
  }): Promise<SpreadOrderBook[]> {
    return this.get('/api/v5/sprd/books', params);
  }

  /**
   * 获取价差交易行情
   * 
   * 获取指定价差产品的行情数据
   * 
   * API端点：GET /api/v5/market/sprd-ticker
   * 
   * @param params - 查询参数
   * @param params.sprdId - 价差产品ID
   * @returns Promise<SpreadTicker[]> - 价差交易行情数据
   * 
   * 使用方式：
   * const spreadTicker = await client.getSpreadTicker({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP'
   * });
   * 
   * 注意：行情数据包括最新价格、涨跌幅等信息
   */
  getSpreadTicker(params: { sprdId: string }): Promise<SpreadTicker[]> {
    return this.get('/api/v5/market/sprd-ticker', params);
  }

  /**
   * 获取价差交易公共成交记录
   * 
   * 获取价差交易的公共成交记录
   * 
   * API端点：GET /api/v5/sprd/public-trades
   * 
   * @param params - 查询参数（可选）
   * @param params.sprdId - 价差产品ID（可选）
   * @returns Promise<PublicSpreadTrade[]> - 价差交易公共成交记录列表
   * 
   * 使用方式：
   * // 获取所有价差交易的公共成交记录
   * const allTrades = await client.getSpreadPublicTrades();
   * 
   * // 获取特定价差产品的公共成交记录
   * const btcEthTrades = await client.getSpreadPublicTrades({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP'
   * });
   * 
   * 注意：此接口返回的是公共成交记录，无需认证
   */
  getSpreadPublicTrades(params?: {
    sprdId?: string;
  }): Promise<PublicSpreadTrade[]> {
    return this.get('/api/v5/sprd/public-trades', params);
  }

  /**
   * 获取价差交易K线数据
   * 
   * 获取指定价差产品的K线数据
   * 
   * API端点：GET /api/v5/market/sprd-candles
   * 
   * @param params - 查询参数
   * @returns Promise<SpreadCandle[]> - 价差交易K线数据列表
   * 
   * 使用方式：
   * const spreadCandles = await client.getSpreadCandles({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   bar: '1m',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：K线数据用于技术分析和图表绘制
   */
  getSpreadCandles(params: GetSpreadCandlesRequest): Promise<SpreadCandle[]> {
    return this.get('/api/v5/market/sprd-candles', params);
  }

  /**
   * 获取价差交易历史K线数据
   * 
   * 获取指定价差产品的历史K线数据
   * 
   * API端点：GET /api/v5/market/sprd-history-candles
   * 
   * @param params - 查询参数
   * @returns Promise<SpreadCandle[]> - 价差交易历史K线数据列表
   * 
   * 使用方式：
   * const historyCandles = await client.getSpreadHistoryCandles({
   *   sprdId: 'BTC-USDT-SWAP_ETH-USDT-SWAP',
   *   bar: '1D',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：历史K线数据用于回测分析和长期趋势研究
   */
  getSpreadHistoryCandles(
    params: GetSpreadCandlesRequest,
  ): Promise<SpreadCandle[]> {
    return this.get('/api/v5/market/sprd-history-candles', params);
  }

  /**
   * 延迟撤销所有价差交易订单
   * 
   * 在指定时间后自动撤销所有价差交易订单
   * 
   * API端点：POST /api/v5/sprd/cancel-all-after
   * 
   * @param params - 延迟撤销请求参数
   * @param params.timeOut - 超时时间（秒），范围1-86400
   * @returns Promise<{triggerTime: string, ts: string}[]> - 延迟撤销结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelSpreadAllAfter({
   *   timeOut: '60'  // 60秒后撤销所有价差交易订单
   * });
   * 
   * 注意：此操作会影响所有未完成的价差交易订单
   */
  cancelSpreadAllAfter(params: { timeOut: string }): Promise<
    {
      triggerTime: string;
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/sprd/cancel-all-after', params);
  }

  /**
   *
   * Public data - rest endpoints
   *
   */

  /**
   * 获取产品信息
   * 
   * 获取指定产品类型的可交易产品列表
   * 
   * API端点：GET /api/v5/public/instruments
   * 
   * @param params - 查询参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.uly - 标的指数（可选）
   * @param params.instFamily - 产品系列（可选）
   * @param params.instId - 产品ID（可选）
   * @returns Promise<Instrument[]> - 产品信息列表
   * 
   * 使用方式：
   * // 获取所有永续合约产品
   * const allSwapInstruments = await client.getInstruments({
   *   instType: 'SWAP'
   * });
   * 
   * // 获取特定标的的期权产品
   * const btcOptionInstruments = await client.getInstruments({
   *   instType: 'OPTION',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：产品信息包括产品ID、状态、面值、最小下单数量等
   */
  getInstruments(params: {
    instType: InstrumentType;
    uly?: string;
    instFamily?: string;
    instId?: string;
  }): Promise<Instrument[]> {
    return this.get('/api/v5/public/instruments', params);
  }

  /**
   * 获取交割行权历史
   * 
   * 获取期货和期权的交割行权历史记录
   * 
   * API端点：GET /api/v5/public/delivery-exercise-history
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 交割行权历史记录列表
   * 
   * 使用方式：
   * const deliveryHistory = await client.getDeliveryExerciseHistory({
   *   instType: 'FUTURES',
   *   uly: 'BTC-USDT',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：此接口返回期货交割和期权行权的历史数据
   */
  getDeliveryExerciseHistory(params: any): Promise<any[]> {
    return this.get('/api/v5/public/delivery-exercise-history', params);
  }

  /**
   * 获取持仓量
   * 
   * 获取指定产品的持仓量信息
   * 
   * API端点：GET /api/v5/public/open-interest
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 持仓量信息列表
   * 
   * 使用方式：
   * const openInterest = await client.getOpenInterest({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：持仓量反映市场参与度和流动性
   */
  getOpenInterest(params: any): Promise<any[]> {
    return this.get('/api/v5/public/open-interest', params);
  }

  /**
   * 获取资金费率
   * 
   * 获取指定产品的当前资金费率
   * 
   * API端点：GET /api/v5/public/funding-rate
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 资金费率信息列表
   * 
   * 使用方式：
   * const fundingRate = await client.getFundingRate({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：资金费率用于永续合约的价格锚定机制
   */
  getFundingRate(params: any): Promise<any[]> {
    return this.get('/api/v5/public/funding-rate', params);
  }

  /**
   * 获取资金费率历史
   * 
   * 获取指定产品的资金费率历史记录
   * 
   * API端点：GET /api/v5/public/funding-rate-history
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 资金费率历史记录列表
   * 
   * 使用方式：
   * const fundingRateHistory = await client.getFundingRateHistory({
   *   instId: 'BTC-USDT-SWAP',
   *   after: '1640995200000',
   *   before: '1641081600000',
   *   limit: '100'
   * });
   * 
   * 注意：资金费率历史用于分析费率变化趋势
   */
  getFundingRateHistory(params: FundingRateRequest): Promise<any[]> {
    return this.get('/api/v5/public/funding-rate-history', params);
  }

  /**
   * 获取价格限制
   * 
   * 获取指定产品的价格上下限
   * 
   * API端点：GET /api/v5/public/price-limit
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 价格限制信息列表
   * 
   * 使用方式：
   * const priceLimit = await client.getMinMaxLimitPrice({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：价格限制用于防止异常价格订单
   */
  getMinMaxLimitPrice(params: any): Promise<any[]> {
    return this.get('/api/v5/public/price-limit', params);
  }

  /**
   * 获取期权市场数据
   * 
   * 获取期权的市场数据摘要
   * 
   * API端点：GET /api/v5/public/opt-summary
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 期权市场数据摘要列表
   * 
   * 使用方式：
   * const optionData = await client.getOptionMarketData({
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：期权市场数据包括隐含波动率、Greeks等关键指标
   */
  getOptionMarketData(params: any): Promise<any[]> {
    return this.get('/api/v5/public/opt-summary', params);
  }

  /**
   * 获取预估交割行权价格
   * 
   * 获取期货和期权的预估交割行权价格
   * 
   * API端点：GET /api/v5/public/estimated-price
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 预估交割行权价格信息列表
   * 
   * 使用方式：
   * const estimatedPrice = await client.getEstimatedDeliveryExercisePrice({
   *   instId: 'BTC-USDT-240628'
   * });
   * 
   * 注意：预估价格基于当前市场情况计算
   */
  getEstimatedDeliveryExercisePrice(params: any): Promise<any[]> {
    return this.get('/api/v5/public/estimated-price', params);
  }

  /**
   * 获取折扣率和免息额度
   * 
   * 获取借款的折扣率和免息额度信息
   * 
   * API端点：GET /api/v5/public/discount-rate-interest-free-quota
   * 
   * @param params - 查询参数
   * @returns Promise<any[]> - 折扣率和免息额度信息列表
   * 
   * 使用方式：
   * const discountInfo = await client.getDiscountRateAndInterestFreeQuota({
   *   ccy: 'USDT'
   * });
   * 
   * 注意：折扣率和免息额度影响借款成本
   */
  getDiscountRateAndInterestFreeQuota(params: any): Promise<any[]> {
    return this.get('/api/v5/public/discount-rate-interest-free-quota', params);
  }

  /**
   * 获取系统时间
   * 
   * 获取OKX服务器的系统时间
   * 
   * API端点：GET /api/v5/public/time
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<SystemTime[]> - 系统时间信息
   * 
   * 使用方式：
   * const systemTime = await client.getSystemTime();
   * console.log('系统时间:', systemTime[0].ts);
   * 
   * 注意：此接口用于时间同步，无需认证
   */
  getSystemTime(params: any): Promise<SystemTime[]> {
    return this.get('/api/v5/public/time', params);
  }

  /**
   * 获取标记价格
   * 
   * 获取指定产品的标记价格
   * 
   * API端点：GET /api/v5/public/mark-price
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 标记价格信息
   * 
   * 使用方式：
   * const markPrice = await client.getMarkPrice({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：标记价格用于计算未实现盈亏和强平价格
   */
  getMarkPrice(params: any): Promise<any[]> {
    return this.get('/api/v5/public/mark-price', params);
  }

  /**
   * 获取持仓档位
   * 
   * 获取指定产品的持仓档位信息
   * 
   * API端点：GET /api/v5/public/position-tiers
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 持仓档位信息
   * 
   * 使用方式：
   * const positionTiers = await client.getPositionTiers({
   *   instType: 'SWAP',
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：持仓档位用于计算保证金率和强平价格
   */
  getPositionTiers(params: any): Promise<any[]> {
    return this.get('/api/v5/public/position-tiers', params);
  }

  /**
   * 获取利率和借款额度
   * 
   * 获取借款的利率和可用额度信息
   * 
   * API端点：GET /api/v5/public/interest-rate-loan-quota
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 利率和借款额度信息
   * 
   * 使用方式：
   * const loanInfo = await client.getInterestRateAndLoanQuota({
   *   instType: 'SWAP',
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：此接口返回借款相关的利率和额度信息
   */
  getInterestRateAndLoanQuota(params: any): Promise<any[]> {
    return this.get('/api/v5/public/interest-rate-loan-quota', params);
  }

  /**
   * 获取VIP利率和借款额度
   * 
   * 获取VIP用户的借款利率和可用额度信息
   * 
   * API端点：GET /api/v5/public/vip-interest-rate-loan-quota
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - VIP利率和借款额度信息
   * 
   * 使用方式：
   * const vipLoanInfo = await client.getVIPInterestRateAndLoanQuota({
   *   instType: 'SWAP',
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：VIP用户享有更优惠的借款利率
   */
  getVIPInterestRateAndLoanQuota(params: any): Promise<any[]> {
    return this.get('/api/v5/public/vip-interest-rate-loan-quota', params);
  }

  /**
   * 获取标的指数
   * 
   * 获取期权和永续合约的标的指数信息
   * 
   * API端点：GET /api/v5/public/underlying
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 标的指数信息
   * 
   * 使用方式：
   * const underlying = await client.getUnderlying({
   *   instType: 'OPTION'
   * });
   * 
   * 注意：标的指数是期权和永续合约的基础资产
   */
  getUnderlying(params: any): Promise<any[]> {
    return this.get('/api/v5/public/underlying', params);
  }

  /**
   * 获取保险基金
   * 
   * 获取保险基金的余额和配置信息
   * 
   * API端点：GET /api/v5/public/insurance-fund
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 保险基金信息
   * 
   * 使用方式：
   * const insuranceFund = await client.getInsuranceFund({
   *   instType: 'SWAP'
   * });
   * 
   * 注意：保险基金用于弥补穿仓损失
   */
  getInsuranceFund(params: any): Promise<any[]> {
    return this.get('/api/v5/public/insurance-fund', params);
  }

  /**
   * 获取单位转换
   * 
   * 获取合约币种和计价币种之间的转换关系
   * 
   * API端点：GET /api/v5/public/convert-contract-coin
   * 
   * @param params - 请求参数
   * @returns Promise<UnitConvertData[]> - 单位转换数据
   * 
   * 使用方式：
   * const unitConvert = await client.getUnitConvert({
   *   instId: 'BTC-USDT-SWAP',
   *   sz: '1',
   *   px: '50000'
   * });
   * 
   * 注意：用于计算合约数量和计价币种之间的转换
   */
  getUnitConvert(params: UnitConvertRequest): Promise<UnitConvertData[]> {
    return this.get('/api/v5/public/convert-contract-coin', params);
  }

  /**
   * 获取期权价格档位
   * 
   * 获取期权产品的价格档位信息
   * 
   * API端点：GET /api/v5/public/instrument-tick-bands
   * 
   * @param params - 请求参数
   * @param params.instType - 产品类型，如'OPTION'
   * @param params.instFamily - 产品系列（可选）
   * @returns Promise<any[]> - 期权价格档位信息
   * 
   * 使用方式：
   * const tickBands = await client.getOptionTickBands({
   *   instType: 'OPTION',
   *   instFamily: 'BTC-USD'
   * });
   * 
   * 注意：价格档位用于确定期权的最小价格变动单位
   */
  getOptionTickBands(params: {
    instType: string;
    instFamily?: string;
  }): Promise<any[]> {
    return this.get('/api/v5/public/instrument-tick-bands', params);
  }

  /**
   * 获取溢价历史
   * 
   * 获取期权产品的溢价历史数据
   * 
   * API端点：GET /api/v5/public/premium-history
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 溢价历史数据
   * 
   * 使用方式：
   * const premiumHistory = await client.getPremiumHistory({
   *   instId: 'BTC-USD-OPTION',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：溢价数据用于分析期权的定价和风险
   */
  getPremiumHistory(params: GetPremiumHistoryRequest): Promise<any[]> {
    return this.get('/api/v5/public/premium-history', params);
  }

  /**
   * 获取指数行情
   * 
   * 获取指数产品的行情信息
   * 
   * API端点：GET /api/v5/market/index-tickers
   * 
   * @param params - 请求参数（可选）
   * @param params.quoteCcy - 计价币种（可选）
   * @param params.instId - 产品ID（可选）
   * @returns Promise<IndexTicker[]> - 指数行情列表
   * 
   * 使用方式：
   * // 获取所有指数行情
   * const allIndexTickers = await client.getIndexTickers();
   * 
   * // 获取特定指数的行情
   * const btcIndex = await client.getIndexTickers({
   *   instId: 'BTC-USD-INDEX'
   * });
   * 
   * 注意：指数行情用于跟踪市场整体走势
   */
  getIndexTickers(params?: {
    quoteCcy?: string;
    instId?: string;
  }): Promise<IndexTicker[]> {
    return this.get('/api/v5/market/index-tickers', params);
  }

  /**
   * 获取指数K线
   * 
   * 获取指数产品的K线数据
   * 
   * API端点：GET /api/v5/market/index-candles
   * 
   * @param params - 请求参数
   * @returns Promise<CandleNoVolume[]> - 指数K线数据
   * 
   * 使用方式：
   * const indexCandles = await client.getIndexCandles({
   *   instId: 'BTC-USD-INDEX',
   *   bar: '1m',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：指数K线不包含成交量数据
   */
  getIndexCandles(params: CandleRequest): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/index-candles', params);
  }

  /**
   * 获取历史指数K线
   * 
   * 获取指数产品的历史K线数据
   * 
   * API端点：GET /api/v5/market/history-index-candles
   * 
   * @param params - 请求参数
   * @returns Promise<CandleNoVolume[]> - 历史指数K线数据
   * 
   * 使用方式：
   * const historicIndexCandles = await client.getHistoricIndexCandles({
   *   instId: 'BTC-USD-INDEX',
   *   bar: '1D',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：历史数据用于回测和分析
   */
  getHistoricIndexCandles(params: CandleRequest): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/history-index-candles', params);
  }

  /**
   * 获取标记价格K线
   * 
   * 获取产品的标记价格K线数据
   * 
   * API端点：GET /api/v5/market/mark-price-candles
   * 
   * @param params - 请求参数
   * @returns Promise<CandleNoVolume[]> - 标记价格K线数据
   * 
   * 使用方式：
   * const markPriceCandles = await client.getMarkPriceCandles({
   *   instId: 'BTC-USDT-SWAP',
   *   bar: '1m',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：标记价格K线用于计算未实现盈亏
   */
  getMarkPriceCandles(params: CandleRequest): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/mark-price-candles', params);
  }

  /**
   * 获取历史标记价格K线
   * 
   * 获取产品的历史标记价格K线数据
   * 
   * API端点：GET /api/v5/market/history-mark-price-candles
   * 
   * @param params - 请求参数
   * @returns Promise<CandleNoVolume[]> - 历史标记价格K线数据
   * 
   * 使用方式：
   * const historicMarkPriceCandles = await client.getHistoricMarkPriceCandles({
   *   instId: 'BTC-USDT-SWAP',
   *   bar: '1D',
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：历史标记价格数据用于回测和分析
   */
  getHistoricMarkPriceCandles(
    params: CandleRequest,
  ): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/history-mark-price-candles', params);
  }

  /**
   * 获取预言机数据
   * 
   * 获取预言机的价格数据
   * 
   * API端点：GET /api/v5/market/open-oracle
   * 
   * @returns Promise<any[]> - 预言机数据
   * 
   * 使用方式：
   * const oracleData = await client.getOracle();
   * console.log('预言机数据:', oracleData);
   * 
   * 注意：预言机数据用于获取外部价格信息
   */
  getOracle(): Promise<any[]> {
    return this.get('/api/v5/market/open-oracle');
  }

  /**
   * 获取汇率
   * 
   * 获取法定货币之间的汇率信息
   * 
   * API端点：GET /api/v5/market/exchange-rate
   * 
   * @returns Promise<any[]> - 汇率信息
   * 
   * 使用方式：
   * const exchangeRates = await client.getExchangeRate();
   * console.log('汇率信息:', exchangeRates);
   * 
   * 注意：汇率用于法定货币之间的转换计算
   */
  getExchangeRate(): Promise<any[]> {
    return this.get('/api/v5/market/exchange-rate');
  }

  /**
   * 获取指数成分
   * 
   * 获取指定指数的成分股信息
   * 
   * API端点：GET /api/v5/market/index-components
   * 
   * @param params - 请求参数
   * @param params.index - 指数名称
   * @returns Promise<any[]> - 指数成分信息
   * 
   * 使用方式：
   * const indexComponents = await client.getIndexComponents({
   *   index: 'BTC-USD-INDEX'
   * });
   * 
   * 注意：指数成分用于了解指数的构成
   */
  getIndexComponents(params: { index: string }): Promise<any[]> {
    return this.get('/api/v5/market/index-components', params);
  }

  /**
   * 获取经济日历
   * 
   * 获取经济事件日历信息
   * 
   * API端点：GET /api/v5/public/economic-calendar
   * 
   * @param params - 请求参数
   * @returns Promise<EconomicCalendarData[]> - 经济日历数据
   * 
   * 使用方式：
   * const economicCalendar = await client.getEconomicCalendar({
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：经济日历用于了解重要的经济事件
   */
  getEconomicCalendar(
    params: EconomicCalendarRequest,
  ): Promise<EconomicCalendarData[]> {
    return this.getPrivate('/api/v5/public/economic-calendar', params);
  }

  /**
   * 获取公共大宗交易
   * 
   * 获取指定产品的公共大宗交易信息
   * 
   * API端点：GET /api/v5/market/block-trades
   * 
   * @param params - 请求参数
   * @param params.instId - 产品ID，如BTC-USDT-SWAP
   * @returns Promise<any[]> - 公共大宗交易列表
   * 
   * 使用方式：
   * const blockTrades = await client.getPublicBlockTrades({
   *   instId: 'BTC-USDT-SWAP'
   * });
   * 
   * 注意：此接口返回的是公共的大宗交易信息，无需认证
   */
  getPublicBlockTrades(params: { instId: string }): Promise<any[]> {
    return this.get('/api/v5/market/block-trades', params);
  }

  /**
   *
   * Trading statistics - REST endpoints
   *
   */

  /**
   * 获取支持币种
   * 
   * 获取支持的币种列表
   * 
   * API端点：GET /api/v5/rubik/stat/trading-data/support-coin
   * 
   * @returns Promise<any[]> - 支持币种列表
   * 
   * 使用方式：
   * const supportCoins = await client.getSupportCoin();
   * console.log('支持币种:', supportCoins);
   * 
   * 注意：此接口返回所有支持的币种信息
   */
  getSupportCoin(): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/trading-data/support-coin');
  }

  /**
   * 获取持仓量历史
   * 
   * 获取合约的持仓量历史数据
   * 
   * API端点：GET /api/v5/rubik/stat/contracts/open-interest-history
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 持仓量历史数据
   * 
   * 使用方式：
   * const openInterestHistory = await client.getOpenInterestHistory({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：持仓量数据用于分析市场情绪
   */
  getOpenInterestHistory(
    params: GetContractOpenInterestHistoryRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/open-interest-history',
      params,
    );
  }

  /**
   * 获取吃单量
   * 
   * 获取指定产品的吃单量数据
   * 
   * API端点：GET /api/v5/rubik/stat/taker-volume
   * 
   * @param params - 请求参数
   * @param params.instType - 产品类型：'SPOT'、'SWAP'、'FUTURES'、'OPTION'等
   * @param params.ccy - 币种
   * @param params.period - 统计周期（可选）
   * @param params.end - 结束时间（可选）
   * @param params.begin - 开始时间（可选）
   * @returns Promise<any[]> - 吃单量数据
   * 
   * 使用方式：
   * const takerVolume = await client.getTakerVolume({
   *   instType: 'SWAP',
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：吃单量数据用于分析市场活跃度
   */
  getTakerVolume(params: {
    instType: string;
    ccy: string;
    period?: string;
    end?: string;
    begin?: string;
  }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/taker-volume', params);
  }

  /**
   * 获取合约吃单量
   * 
   * 获取指定合约的吃单量数据
   * 
   * API端点：GET /api/v5/rubik/stat/taker-volume-contract
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 合约吃单量数据
   * 
   * 使用方式：
   * const contractTakerVolume = await client.getContractTakerVolume({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：合约吃单量数据用于分析合约市场的活跃度
   */
  getContractTakerVolume(
    params: GetContractTakerVolumeRequest,
  ): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/taker-volume-contract', params);
  }

  /**
   * 获取保证金借贷比例
   * 
   * 获取指定币种的保证金借贷比例数据
   * 
   * API端点：GET /api/v5/rubik/stat/margin/loan-ratio
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.begin - 开始时间戳（可选）
   * @param params.end - 结束时间戳（可选）
   * @param params.period - 统计周期：'5m'（5分钟）、'1H'（1小时）、'1D'（1天）
   * @returns Promise<any[]> - 保证金借贷比例数据
   * 
   * 使用方式：
   * const lendingRatio = await client.getMarginLendingRatio({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：借贷比例数据用于分析市场资金流向
   */
  getMarginLendingRatio(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/margin/loan-ratio', params);
  }

  /**
   * 获取顶级交易者账户多空比例
   * 
   * 获取顶级交易者的账户多空比例数据
   * 
   * API端点：GET /api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 顶级交易者账户多空比例数据
   * 
   * 使用方式：
   * const topTradersRatio = await client.getTopTradersAccountRatio({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：顶级交易者数据用于分析市场趋势
   */
  getTopTradersAccountRatio(
    params: GetTopTradersContractLongShortRatioRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader',
      params,
    );
  }

  /**
   * 获取顶级交易者持仓多空比例
   * 
   * 获取顶级交易者的持仓多空比例数据
   * 
   * API端点：GET /api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 顶级交易者持仓多空比例数据
   * 
   * 使用方式：
   * const topTradersPositionRatio = await client.getTopTradersContractPositionRatio({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：持仓比例数据用于分析市场情绪
   */
  getTopTradersContractPositionRatio(
    params: GetTopTradersContractLongShortRatioRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader',
      params,
    );
  }

  /**
   * 获取合约多空比例
   * 
   * 获取指定合约的多空比例数据
   * 
   * API端点：GET /api/v5/rubik/stat/contracts/long-short-account-ratio-contract
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 合约多空比例数据
   * 
   * 使用方式：
   * const contractRatio = await client.getLongShortContractRatio({
   *   instType: 'SWAP',
   *   uly: 'BTC-USDT'
   * });
   * 
   * 注意：多空比例数据用于分析市场情绪和趋势
   */
  getLongShortContractRatio(
    params: GetTopTradersContractLongShortRatioRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio-contract',
      params,
    );
  }

  /**
   * 获取多空比例
   * 
   * 获取指定币种的多空比例数据
   * 
   * API端点：GET /api/v5/rubik/stat/contracts/long-short-account-ratio
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.begin - 开始时间戳（可选）
   * @param params.end - 结束时间戳（可选）
   * @param params.period - 统计周期：'5m'（5分钟）、'1H'（1小时）、'1D'（1天）
   * @returns Promise<any[]> - 多空比例数据
   * 
   * 使用方式：
   * const longShortRatio = await client.getLongShortRatio({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：多空比例数据用于分析市场整体情绪
   */
  getLongShortRatio(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio',
      params,
    );
  }

  /**
   * 获取合约持仓量和成交量
   * 
   * 获取指定币种的合约持仓量和成交量数据
   * 
   * API端点：GET /api/v5/rubik/stat/contracts/open-interest-volume
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.begin - 开始时间戳（可选）
   * @param params.end - 结束时间戳（可选）
   * @param params.period - 统计周期：'5m'（5分钟）、'1H'（1小时）、'1D'（1天）
   * @returns Promise<any[]> - 合约持仓量和成交量数据
   * 
   * 使用方式：
   * const openInterestVolume = await client.getContractsOpenInterestAndVolume({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：持仓量和成交量数据用于分析市场活跃度
   */
  getContractsOpenInterestAndVolume(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/open-interest-volume',
      params,
    );
  }

  /**
   * 获取期权持仓量和成交量
   * 
   * 获取指定币种的期权持仓量和成交量数据
   * 
   * API端点：GET /api/v5/rubik/stat/option/open-interest-volume
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.period - 统计周期：'8H'（8小时）、'1D'（1天）
   * @returns Promise<any[]> - 期权持仓量和成交量数据
   * 
   * 使用方式：
   * const optionsVolume = await client.getOptionsOpenInterestAndVolume({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：期权持仓量和成交量数据用于分析期权市场活跃度
   */
  getOptionsOpenInterestAndVolume(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/option/open-interest-volume', params);
  }

  /**
   * 获取看跌看涨比例
   * 
   * 获取指定币种的看跌看涨比例数据
   * 
   * API端点：GET /api/v5/rubik/stat/option/open-interest-volume-ratio
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.period - 统计周期：'8H'（8小时）、'1D'（1天）
   * @returns Promise<any[]> - 看跌看涨比例数据
   * 
   * 使用方式：
   * const putCallRatio = await client.getPutCallRatio({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：看跌看涨比例数据用于分析期权市场情绪
   */
  getPutCallRatio(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-ratio',
      params,
    );
  }

  /**
   * 获取期权持仓量和成交量（按到期日）
   * 
   * 获取指定币种的期权持仓量和成交量数据，按到期日分组
   * 
   * API端点：GET /api/v5/rubik/stat/option/open-interest-volume-expiry
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.period - 统计周期：'8H'（8小时）、'1D'（1天）
   * @returns Promise<any[]> - 期权持仓量和成交量数据（按到期日）
   * 
   * 使用方式：
   * const expiryVolume = await client.getOpenInterestAndVolumeExpiry({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：按到期日分组的数据用于分析不同期限的期权活跃度
   */
  getOpenInterestAndVolumeExpiry(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-expiry',
      params,
    );
  }

  /**
   * 获取期权持仓量和成交量（按行权价）
   * 
   * 获取指定币种和到期日的期权持仓量和成交量数据，按行权价分组
   * 
   * API端点：GET /api/v5/rubik/stat/option/open-interest-volume-strike
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.expTime - 到期时间
   * @param params.period - 统计周期：'8H'（8小时）、'1D'（1天）
   * @returns Promise<any[]> - 期权持仓量和成交量数据（按行权价）
   * 
   * 使用方式：
   * const strikeVolume = await client.getOpenInterestAndVolumeStrike({
   *   ccy: 'BTC',
   *   expTime: '1640995200000',
   *   period: '1D'
   * });
   * 
   * 注意：按行权价分组的数据用于分析不同价格水平的期权活跃度
   */
  getOpenInterestAndVolumeStrike(params: {
    ccy: string;
    expTime: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-strike',
      params,
    );
  }

  /**
   * 获取期权吃单流量
   * 
   * 获取指定币种的期权吃单流量数据
   * 
   * API端点：GET /api/v5/rubik/stat/option/taker-block-volume
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @param params.period - 统计周期：'8H'（8小时）、'1D'（1天）
   * @returns Promise<any[]> - 期权吃单流量数据
   * 
   * 使用方式：
   * const takerFlow = await client.getTakerFlow({
   *   ccy: 'BTC',
   *   period: '1D'
   * });
   * 
   * 注意：吃单流量数据用于分析期权市场的资金流向
   */
  getTakerFlow(params: { ccy: string; period: '8H' | '1D' }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/option/taker-block-volume', params);
  }

  /**
   *
   * Funding account - REST endpoints
   *
   */

  /**
   * 获取币种信息
   * 
   * 获取支持的币种信息列表
   * 
   * API端点：GET /api/v5/asset/currencies
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种，如BTC、USDT等（可选）
   * @returns Promise<FundingCurrency[]> - 币种信息列表
   * 
   * 使用方式：
   * // 获取所有币种信息
   * const allCurrencies = await client.getCurrencies();
   * 
   * // 获取特定币种信息
   * const btcCurrency = await client.getCurrencies({ ccy: 'BTC' });
   * 
   * 注意：币种信息包括币种名称、最小充值数量、手续费等
   */
  getCurrencies(params?: { ccy?: string }): Promise<FundingCurrency[]> {
    return this.getPrivate('/api/v5/asset/currencies', params);
  }

  /**
   * 获取资金账户余额
   * 
   * 获取资金账户中各币种的余额信息
   * 
   * API端点：GET /api/v5/asset/balances
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种，如BTC、USDT等（可选）
   * @returns Promise<FundingBalance[]> - 资金账户余额列表
   * 
   * 使用方式：
   * // 获取所有币种余额
   * const allBalances = await client.getBalances();
   * 
   * // 获取特定币种余额
   * const btcBalance = await client.getBalances({ ccy: 'BTC' });
   * 
   * 注意：资金账户余额用于了解可用的资金情况
   */
  getBalances(params?: { ccy?: string }): Promise<FundingBalance[]> {
    return this.getPrivate('/api/v5/asset/balances', params);
  }

  /**
   * 获取不可交易资产
   * 
   * 获取资金账户中不可交易的资产信息
   * 
   * API端点：GET /api/v5/asset/non-tradable-assets
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种，如BTC、USDT等（可选）
   * @returns Promise<NonTradableAsset[]> - 不可交易资产列表
   * 
   * 使用方式：
   * // 获取所有不可交易资产
   * const allNonTradable = await client.getNonTradableAssets();
   * 
   * // 获取特定币种的不可交易资产
   * const btcNonTradable = await client.getNonTradableAssets({ ccy: 'BTC' });
   * 
   * 注意：不可交易资产包括锁定的、冻结的等状态
   */
  getNonTradableAssets(params?: { ccy?: string }): Promise<NonTradableAsset[]> {
    return this.getPrivate('/api/v5/asset/non-tradable-assets', params);
  }

  /**
   * 获取账户资产估值
   * 
   * 获取账户中资产的估值信息
   * 
   * API端点：GET /api/v5/asset/asset-valuation
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种，如BTC、USDT等（可选）
   * @returns Promise<AccountAssetValuation[]> - 账户资产估值信息
   * 
   * 使用方式：
   * // 获取所有资产估值
   * const allValuation = await client.getAccountAssetValuation();
   * 
   * // 获取特定币种资产估值
   * const btcValuation = await client.getAccountAssetValuation({ ccy: 'BTC' });
   * 
   * 注意：资产估值以USDT为计价单位
   */
  getAccountAssetValuation(params?: {
    ccy?: string;
  }): Promise<AccountAssetValuation[]> {
    return this.getPrivate('/api/v5/asset/asset-valuation', params);
  }

  /**
   * 资金划转
   * 
   * 在账户之间进行资金划转
   * 
   * API端点：POST /api/v5/asset/transfer
   * 
   * @param params - 资金划转请求参数
   * @returns Promise<FundTransferResult[]> - 资金划转结果
   * 
   * 使用方式：
   * const transferResult = await client.fundsTransfer({
   *   ccy: 'BTC',
   *   amt: '1.0',
   *   from: '18',
   *   to: '6'
   * });
   * 
   * 注意：资金划转需要确保账户有足够的余额
   */
  fundsTransfer(params: FundsTransferRequest): Promise<FundTransferResult[]> {
    return this.postPrivate('/api/v5/asset/transfer', params);
  }

  /**
   * 获取资金划转状态
   * 
   * 获取资金划转的状态信息
   * 
   * API端点：GET /api/v5/asset/transfer-state
   * 
   * @param params - 请求参数（可选）
   * @param params.transId - 划转ID（可选，与clientId二选一）
   * @param params.clientId - 客户端ID（可选，与transId二选一）
   * @param params.type - 划转类型：'0'（划转）、'1'（主账户转子账户）、'2'（子账户转主账户）（可选）
   * @returns Promise<FundTransferState[]> - 资金划转状态信息
   * 
   * 使用方式：
   * // 通过划转ID查询
   * const transferState = await client.getFundsTransferState({
   *   transId: '123456789'
   * });
   * 
   * // 通过客户端ID查询
   * const transferState = await client.getFundsTransferState({
   *   clientId: 'client123'
   * });
   * 
   * 注意：transId和clientId必须提供其中一个
   */
  getFundsTransferState(params?: {
    transId?: string;
    clientId?: string;
    type?: '0' | '1' | '2';
  }): Promise<FundTransferState[]> {
    return this.getPrivate('/api/v5/asset/transfer-state', params);
  }

  /**
   * 获取资金账户账单详情
   * 
   * 获取资金账户的账单详细信息
   * 
   * API端点：GET /api/v5/asset/bills
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种，如BTC、USDT等（可选）
   * @param params.type - 账单类型（可选）
   * @param params.clientId - 客户端ID（可选）
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回结果的数量限制（可选）
   * @returns Promise<AssetBillDetails[]> - 资金账户账单详情列表
   * 
   * 使用方式：
   * // 获取所有账单
   * const allBills = await client.getAssetBillsDetails();
   * 
   * // 获取特定币种的账单
   * const btcBills = await client.getAssetBillsDetails({ ccy: 'BTC' });
   * 
   * 注意：账单详情包括充值、提现、划转等所有资金变动记录
   */
  getAssetBillsDetails(params?: {
    ccy?: string;
    type?: `${ASSET_BILL_TYPE}`;
    clientId?: string;
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
  }): Promise<AssetBillDetails[]> {
    return this.getPrivate('/api/v5/asset/bills', params);
  }

  /**
   * 获取闪电网络充值地址
   * 
   * 获取指定币种的闪电网络充值地址
   * 
   * API端点：GET /api/v5/asset/deposit-lightning
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC
   * @param params.amt - 充值金额
   * @param params.to - 充值目标账户：'6'（资金账户）、'18'（交易账户）（可选）
   * @returns Promise<any[]> - 闪电网络充值地址信息
   * 
   * 使用方式：
   * const lightningDeposit = await client.getLightningDeposits({
   *   ccy: 'BTC',
   *   amt: '0.001',
   *   to: '6'
   * });
   * 
   * 注意：闪电网络充值适用于小额快速充值
   */
  getLightningDeposits(params: {
    ccy: string;
    amt: numberInString;
    to?: '6' | '18';
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-lightning', params);
  }

  /**
   * 获取充值地址
   * 
   * 获取指定币种的充值地址
   * 
   * API端点：GET /api/v5/asset/deposit-address
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种，如BTC、USDT等
   * @returns Promise<any[]> - 充值地址信息
   * 
   * 使用方式：
   * const depositAddress = await client.getDepositAddress({
   *   ccy: 'BTC'
   * });
   * 
   * 注意：充值地址用于接收外部转入的资金
   */
  getDepositAddress(params: { ccy: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-address', params);
  }

  /**
   * 获取充值历史
   * 
   * 获取账户的充值历史记录
   * 
   * API端点：GET /api/v5/asset/deposit-history
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<any[]> - 充值历史记录列表
   * 
   * 使用方式：
   * // 获取所有充值历史
   * const allDeposits = await client.getDepositHistory();
   * 
   * // 获取特定币种的充值历史
   * const btcDeposits = await client.getDepositHistory({ ccy: 'BTC' });
   * 
   * 注意：充值历史包括所有已确认的充值记录
   */
  getDepositHistory(params?: any): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-history', params);
  }

  /**
   * 提交提现申请
   * 
   * 提交提现申请到指定地址
   * 
   * API端点：POST /api/v5/asset/withdrawal
   * 
   * @param params - 提现请求参数
   * @returns Promise<WithdrawResponse[]> - 提现申请结果
   * 
   * 使用方式：
   * const withdrawResult = await client.submitWithdraw({
   *   ccy: 'BTC',
   *   amt: '0.001',
   *   dest: '4',
   *   toAddr: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
   * });
   * 
   * 注意：提现需要满足最小提现数量和手续费要求
   */
  submitWithdraw(params: WithdrawRequest): Promise<WithdrawResponse[]> {
    return this.postPrivate('/api/v5/asset/withdrawal', params);
  }

  /**
   * 提交闪电网络提现申请
   * 
   * 通过闪电网络提交提现申请
   * 
   * API端点：POST /api/v5/asset/withdrawal-lightning
   * 
   * @param params - 闪电网络提现请求参数
   * @param params.ccy - 币种，如BTC
   * @param params.invoice - 闪电网络发票
   * @param params.memo - 备注信息（可选）
   * @returns Promise<any[]> - 闪电网络提现申请结果
   * 
   * 使用方式：
   * const lightningWithdraw = await client.submitWithdrawLightning({
   *   ccy: 'BTC',
   *   invoice: 'lnbc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh...',
   *   memo: '闪电网络提现'
   * });
   * 
   * 注意：闪电网络提现适用于小额快速提现
   */
  submitWithdrawLightning(params: {
    ccy: string;
    invoice: string;
    memo?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/withdrawal-lightning', params);
  }

  /**
   * 取消提现申请
   * 
   * 取消已提交的提现申请
   * 
   * API端点：POST /api/v5/asset/cancel-withdrawal
   * 
   * @param params - 取消提现请求参数
   * @param params.wdId - 提现ID
   * @returns Promise<any[]> - 取消提现结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelWithdrawal({
   *   wdId: '123456789'
   * });
   * 
   * 注意：只能取消未处理的提现申请
   */
  cancelWithdrawal(params: { wdId: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/cancel-withdrawal', params);
  }

  /**
   * 获取提现历史
   * 
   * 获取账户的提现历史记录
   * 
   * API端点：GET /api/v5/asset/withdrawal-history
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<any[]> - 提现历史记录列表
   * 
   * 使用方式：
   * // 获取所有提现历史
   * const allWithdrawals = await client.getWithdrawalHistory();
   * 
   * // 获取特定币种的提现历史
   * const btcWithdrawals = await client.getWithdrawalHistory({ ccy: 'BTC' });
   * 
   * 注意：提现历史包括所有提现记录，无论成功与否
   */
  getWithdrawalHistory(params?: WithdrawalHistoryRequest): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/withdrawal-history', params);
  }

  /**
   * 获取充值/提现状态
   *
   * 查询充值与提现的状态信息（按币种、时间范围等筛选）
   *
   * API端点：GET /api/v5/asset/deposit-withdraw-status
   *
   * @param params - 查询参数
   * @returns Promise<any[]> - 充值/提现状态列表
   *
   * 使用方式：
   * const status = await client.getDepositWithdrawStatus({ ccy: 'USDT' });
   *
   * 注意：可用于查询当前是否开放充值/提现、链路状态、最小额度等
   */
  getDepositWithdrawStatus(
    params: GetDepositWithdrawStatusRequest,
  ): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-withdraw-status', params);
  }

  /**
   * 获取支持的第三方交易所列表
   *
   * API端点：GET /api/v5/asset/exchange-list
   *
   * @returns Promise<any[]> - 交易所列表
   *
   * 使用方式：
   * const exchanges = await client.getExchanges();
   */
  getExchanges(): Promise<any[]> {
    return this.get('/api/v5/asset/exchange-list');
  }

  /**
   * 申请月结单
   *
   * 申请生成指定月份的资金月度结单文件（异步生成）
   *
   * API端点：POST /api/v5/asset/monthly-statement
   *
   * @param params - 可选参数
   * @param params.month - 月份（格式：YYYY-MM），默认当前月份
   * @returns Promise<any[]> - 申请结果
   *
   * 使用方式：
   * const applyRes = await client.applyForMonthlyStatement({ month: '2024-05' });
   *
   * 注意：生成需要一定时间，请通过 getMonthlyStatement 查询结果
   */
  applyForMonthlyStatement(params?: { month?: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/monthly-statement', params);
  }

  /**
   * 查询月结单
   *
   * 查询指定月份的资金月度结单文件（需先申请生成）
   *
   * API端点：GET /api/v5/asset/monthly-statement
   *
   * @param params - 查询参数
   * @param params.month - 月份（格式：YYYY-MM）
   * @returns Promise<any[]> - 月结单下载信息
   */
  getMonthlyStatement(params: { month: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/monthly-statement', params);
  }

  /**
   * 获取可转换币种
   *
   * 查询币币闪兑支持的币种列表
   *
   * API端点：GET /api/v5/asset/convert/currencies
   *
   * @returns Promise<any[]> - 支持的币种列表
   */
  getConvertCurrencies(): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/convert/currencies');
  }

  /**
   * 获取可转换币对
   *
   * 查询币币闪兑支持的币对及相关限额、费率等信息
   *
   * API端点：GET /api/v5/asset/convert/currency-pair
   *
   * @param params - 查询参数
   * @param params.fromCcy - 源币种
   * @param params.toCcy - 目标币种
   * @returns Promise<any[]> - 币对支持与限额信息
   */
  getConvertCurrencyPair(params: {
    fromCcy: string;
    toCcy: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/convert/currency-pair', params);
  }

  /**
   * 预估闪兑报价
   *
   * 按当前行情预估闪兑得到的数量与费用
   *
   * API端点：POST /api/v5/asset/convert/estimate-quote
   *
   * @param params - 预估请求参数
   * @returns Promise<any[]> - 预估报价结果
   *
   * 使用方式：
   * const quote = await client.estimateConvertQuote({ fromCcy: 'USDT', toCcy: 'BTC', side: 'buy', sz: '100' });
   */
  estimateConvertQuote(params: ConvertQuoteEstimateRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/convert/estimate-quote', params);
  }

  /**
   * 提交闪兑交易
   *
   * 使用预估/锁定的报价执行币币闪兑
   *
   * API端点：POST /api/v5/asset/convert/trade
   *
   * @param params - 闪兑下单参数
   * @returns Promise<any[]> - 闪兑下单结果
   */
  convertTrade(params: ConvertTradeRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/convert/trade', params);
  }

  /**
   * 查询闪兑历史
   *
   * 查询账户的币币闪兑历史记录
   *
   * API端点：GET /api/v5/asset/convert/history
   *
   * @param params - 查询参数（可选）
   * @returns Promise<any[]> - 闪兑历史记录
   */
  getConvertHistory(params?: any): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/convert/history', params);
  }

  /**
   *
   * Subaccount - REST endpoints
   *
   */

  /**
   * 获取子账户列表
   *
   * API端点：GET /api/v5/users/subaccount/list
   *
   * @param params - 可选查询参数
   * @returns Promise<SubAccount[]> - 子账户列表
   */
  getSubAccountList(params?: any): Promise<SubAccount[]> {
    return this.getPrivate('/api/v5/users/subaccount/list', params);
  }

  /**
   * 重置子账户 API Key
   *
   * API端点：POST /api/v5/users/subaccount/modify-apikey
   *
   * @param params - 重置参数（支持修改标签、权限与白名单IP）
   * @returns Promise<SubAccountAPIReset[]> - 重置结果
   */
  resetSubAccountAPIKey(params: {
    subAcct: string;
    apiKey: string;
    label?: string;
    perm?: string;
    ip?: string;
  }): Promise<SubAccountAPIReset[]> {
    return this.postPrivate('/api/v5/users/subaccount/modify-apikey', params);
  }

  /**
   * 获取子账户交易账户余额
   *
   * API端点：GET /api/v5/account/subaccount/balances
   *
   * @param params - 查询参数
   * @returns Promise<SubAccountBalances[]> - 子账户交易账户余额
   */
  getSubAccountBalances(params: {
    subAcct: string;
  }): Promise<SubAccountBalances[]> {
    return this.getPrivate('/api/v5/account/subaccount/balances', params);
  }

  /**
   * 获取子账户资金账户余额
   *
   * API端点：GET /api/v5/asset/subaccount/balances
   *
   * @param params - 查询参数
   * @returns Promise<FundingBalance[]> - 子账户资金账户余额
   */
  getSubAccountFundingBalances(params: {
    subAcct: string;
    ccy?: string;
  }): Promise<FundingBalance[]> {
    return this.getPrivate('/api/v5/asset/subaccount/balances', params);
  }

  /**
   * 获取子账户最大可提
   *
   * API端点：GET /api/v5/account/subaccount/max-withdrawal
   *
   * @param params - 查询参数
   * @returns Promise<SubAccountMaxWithdrawal[]> - 子账户最大可提额度
   */
  getSubAccountMaxWithdrawal(
    params: GetSubAccountMaxWithdrawalsRequest,
  ): Promise<SubAccountMaxWithdrawal[]> {
    return this.getPrivate('/api/v5/account/subaccount/max-withdrawal', params);
  }

  /**
   * 获取子账户划转历史
   *
   * API端点：GET /api/v5/asset/subaccount/bills
   *
   * @param params - 查询参数
   * @returns Promise<any[]> - 划转账单记录
   */
  getSubAccountTransferHistory(params?: {
    ccy?: string;
    type?: '0' | '1';
    subAcct?: string;
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/subaccount/bills', params);
  }

  /**
   * 获取委托子账户划转历史
   *
   * API端点：GET /api/v5/asset/subaccount/managed-subaccount-bills
   *
   * @param params - 查询参数
   * @returns Promise<ManagedSubAccountTransfer[]> - 委托子账户划转记录
   */
  getManagedSubAccountTransferHistory(
    params: GetManagedSubAccountTransferHistoryRequest,
  ): Promise<ManagedSubAccountTransfer[]> {
    return this.getPrivate(
      '/api/v5/asset/subaccount/managed-subaccount-bills',
      params,
    );
  }

  /**
   * 主账户管理子账户间划转
   *
   * API端点：POST /api/v5/asset/subaccount/transfer
   *
   * @param params - 划转请求
   * @returns Promise<SubAccountTransferResult[]> - 划转结果
   */
  transferSubAccountBalance(
    params: SubAccountTransferRequest,
  ): Promise<SubAccountTransferResult[]> {
    return this.postPrivate('/api/v5/asset/subaccount/transfer', params);
  }

  /**
   * 设置子账户转出权限
   *
   * API端点：POST /api/v5/users/subaccount/set-transfer-out
   *
   * @param params - 设置参数
   * @returns Promise<any[]> - 设置结果
   */
  setSubAccountTransferOutPermission(params: {
    subAcct: string;
    canTransOut: boolean;
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/users/subaccount/set-transfer-out',
      params,
    );
  }

  /**
   * 获取子账户托管交易列表
   * 
   * 获取子账户的托管交易列表信息
   * 
   * API端点：GET /api/v5/users/entrust-subaccount-list
   * 
   * @param params - 请求参数（可选）
   * @param params.subAcct - 子账户名称（可选）
   * @returns Promise<any[]> - 子账户托管交易列表
   * 
   * 使用方式：
   * // 获取所有子账户托管交易
   * const allCustody = await client.getSubAccountCustodyTradingList();
   * 
   * // 获取特定子账户托管交易
   * const subCustody = await client.getSubAccountCustodyTradingList({
   *   subAcct: 'subaccount1'
   * });
   * 
   * 注意：托管交易是指主账户委托子账户进行交易
   */
  getSubAccountCustodyTradingList(params?: {
    subAcct?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/users/entrust-subaccount-list', params);
  }

  /**
   * 设置子账户借款分配
   * 
   * 设置子账户的借款分配额度
   * 
   * API端点：POST /api/v5/account/subaccount/set-loan-allocation
   * 
   * @param params - 设置借款分配请求参数
   * @returns Promise<{result: boolean}[]> - 设置结果
   * 
   * 使用方式：
   * const result = await client.setSubAccountLoanAllocation({
   *   subAcct: 'subaccount1',
   *   alloc: [
   *     { ccy: 'USDT', amt: '1000' }
   *   ]
   * });
   * 
   * 注意：借款分配用于控制子账户的借款额度
   */
  setSubAccountLoanAllocation(
    params: SetSubAccountLoanAllocationRequest,
  ): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/subaccount/set-loan-allocation',
      params,
    );
  }

  /**
   * 获取子账户借款利率和限额
   * 
   * 获取子账户的借款利率和限额信息
   * 
   * API端点：GET /api/v5/account/subaccount/interest-limits
   * 
   * @param params - 请求参数
   * @param params.subAcct - 子账户名称
   * @param params.ccy - 币种（可选）
   * @returns Promise<any[]> - 子账户借款利率和限额信息
   * 
   * 使用方式：
   * // 获取所有币种的借款利率和限额
   * const allLimits = await client.getSubAccountBorrowInterestAndLimit({
   *   subAcct: 'subaccount1'
   * });
   * 
   * // 获取特定币种的借款利率和限额
   * const usdtLimits = await client.getSubAccountBorrowInterestAndLimit({
   *   subAcct: 'subaccount1',
   *   ccy: 'USDT'
   * });
   * 
   * 注意：借款利率和限额用于了解子账户的借款成本
   */
  getSubAccountBorrowInterestAndLimit(params: {
    subAcct: string;
    ccy?: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/account/subaccount/interest-limits',
      params,
    );
  }

  /**
   *
   * Financial product - on chain earn endpoints
   *
   */

  /**
   * 获取质押/DeFi产品列表
   * 
   * 获取可用的质押和DeFi产品列表
   * 
   * API端点：GET /api/v5/finance/staking-defi/offers
   * 
   * @param params - 请求参数（可选）
   * @param params.productId - 产品ID（可选）
   * @param params.protocolType - 协议类型：'staking'（质押）或'defi'（DeFi）（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<any[]> - 质押/DeFi产品列表
   * 
   * 使用方式：
   * // 获取所有产品
   * const allOffers = await client.getStakingOffers();
   * 
   * // 获取特定类型的产品
   * const stakingOffers = await client.getStakingOffers({
   *   protocolType: 'staking'
   * });
   * 
   * 注意：质押和DeFi产品用于获得收益
   */
  getStakingOffers(params?: {
    productId?: string;
    protocolType?: 'staking' | 'defi';
    ccy?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/staking-defi/offers', params);
  }

  /**
   * 提交质押申请
   * 
   * 提交质押或DeFi产品的投资申请
   * 
   * API端点：POST /api/v5/finance/staking-defi/purchase
   * 
   * @param params - 质押请求参数
   * @param params.productId - 产品ID
   * @param params.investData - 投资数据数组
   * @param params.investData[].ccy - 币种
   * @param params.investData[].amt - 投资金额
   * @param params.term - 投资期限（可选）
   * @returns Promise<any[]> - 质押申请结果
   * 
   * 使用方式：
   * const stakeResult = await client.submitStake({
   *   productId: 'product123',
   *   investData: [
   *     { ccy: 'USDT', amt: '1000' }
   *   ],
   *   term: '30D'
   * });
   * 
   * 注意：质押前请确保账户有足够的余额
   */
  submitStake(params: {
    productId: string;
    investData: {
      ccy: string;
      amt: string;
    }[];
    term?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/purchase', params);
  }

  /**
   * 赎回质押
   * 
   * 赎回质押或DeFi产品的投资
   * 
   * API端点：POST /api/v5/finance/staking-defi/redeem
   * 
   * @param params - 赎回请求参数
   * @param params.ordId - 订单ID
   * @param params.protocolType - 协议类型：'staking'（质押）或'defi'（DeFi）
   * @param params.allowEarlyRedeem - 是否允许提前赎回（可选）
   * @returns Promise<any[]> - 赎回结果
   * 
   * 使用方式：
   * const redeemResult = await client.redeemStake({
   *   ordId: 'order123',
   *   protocolType: 'staking',
   *   allowEarlyRedeem: false
   * });
   * 
   * 注意：提前赎回可能会影响收益
   */
  redeemStake(params: {
    ordId: string;
    protocolType: 'staking' | 'defi';
    allowEarlyRedeem?: boolean;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/redeem', params);
  }

  /**
   * 取消质押申请
   * 
   * 取消质押或DeFi产品的投资申请
   * 
   * API端点：POST /api/v5/finance/staking-defi/cancel
   * 
   * @param params - 取消请求参数
   * @param params.ordId - 订单ID
   * @param params.protocolType - 协议类型：'staking'（质押）或'defi'（DeFi）
   * @returns Promise<any[]> - 取消结果
   * 
   * 使用方式：
   * const cancelResult = await client.cancelStakingRequest({
   *   ordId: 'order123',
   *   protocolType: 'staking'
   * });
   * 
   * 注意：只能取消未确认的质押申请
   */
  cancelStakingRequest(params: {
    ordId: string;
    protocolType: 'staking' | 'defi';
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/cancel', params);
  }

  /**
   * 获取活跃质押订单
   * 
   * 获取当前活跃的质押和DeFi订单
   * 
   * API端点：GET /api/v5/finance/staking-defi/orders-active
   * 
   * @param params - 请求参数（可选）
   * @param params.productId - 产品ID（可选）
   * @param params.protocolType - 协议类型：'staking'（质押）或'defi'（DeFi）（可选）
   * @param params.ccy - 币种（可选）
   * @param params.state - 订单状态（可选）
   * @returns Promise<any[]> - 活跃质押订单列表
   * 
   * 使用方式：
   * // 获取所有活跃订单
   * const allActive = await client.getActiveStakingOrders();
   * 
   * // 获取特定类型的活跃订单
   * const stakingActive = await client.getActiveStakingOrders({
   *   protocolType: 'staking'
   * });
   * 
   * 注意：活跃订单是指正在运行中的质押订单
   */
  getActiveStakingOrders(params?: {
    productId?: string;
    protocolType?: 'staking' | 'defi';
    ccy?: string;
    state?: '8' | '13' | '9' | '1' | '2';
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/staking-defi/orders-active',
      params,
    );
  }

  /**
   * 获取质押订单历史
   * 
   * 获取质押和DeFi订单的历史记录
   * 
   * API端点：GET /api/v5/finance/staking-defi/orders-history
   * 
   * @param params - 请求参数（可选）
   * @param params.productId - 产品ID（可选）
   * @param params.protocolType - 协议类型（可选）
   * @param params.ccy - 币种（可选）
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回结果的数量限制（可选）
   * @returns Promise<any[]> - 质押订单历史列表
   * 
   * 使用方式：
   * // 获取所有质押订单历史
   * const allHistory = await client.getStakingOrderHistory();
   * 
   * // 获取特定时间范围的质押订单历史
   * const recentHistory = await client.getStakingOrderHistory({
   *   after: '1640995200000',
   *   before: '1641081600000'
   * });
   * 
   * 注意：历史记录包括所有已完成的质押订单
   */
  getStakingOrderHistory(params?: {
    productId?: string;
    protocolType?: string;
    ccy?: string;
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/staking-defi/orders-history',
      params,
    );
  }

  /**
   *
   * Financial product - ETH staking endpoints
   *
   */

  /**
   * 获取ETH质押产品信息
   * 
   * 获取ETH质押产品的详细信息
   * 
   * API端点：GET /api/v5/finance/staking-defi/eth/product-info
   * 
   * @returns Promise<any[]> - ETH质押产品信息
   * 
   * 使用方式：
   * const ethStakingInfo = await client.getETHStakingProductInfo();
   * console.log('ETH质押产品信息:', ethStakingInfo);
   * 
   * 注意：ETH质押产品用于获得ETH质押收益
   */
  getETHStakingProductInfo(): Promise<any[]> {
    return this.get('/api/v5/finance/staking-defi/eth/product-info');
  }

  /**
   * 购买ETH质押
   * 
   * 购买ETH质押产品
   * 
   * API端点：POST /api/v5/finance/staking-defi/eth/purchase
   * 
   * @param params - 购买请求参数
   * @param params.amt - 购买金额
   * @returns Promise<any[]> - 购买结果
   * 
   * 使用方式：
   * const purchaseResult = await client.purchaseETHStaking({
   *   amt: '1.0'
   * });
   * 
   * 注意：购买前请确保账户有足够的ETH余额
   */
  purchaseETHStaking(params: { amt: string }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/finance/staking-defi/eth/purchase',
      params,
    );
  }

  /**
   * 赎回ETH质押
   * 
   * 赎回ETH质押产品
   * 
   * API端点：POST /api/v5/finance/staking-defi/eth/redeem
   * 
   * @param params - 赎回请求参数
   * @param params.amt - 赎回金额
   * @returns Promise<any[]> - 赎回结果
   * 
   * 使用方式：
   * const redeemResult = await client.redeemETHStaking({
   *   amt: '0.5'
   * });
   * 
   * 注意：赎回金额不能超过已质押的ETH数量
   */
  redeemETHStaking(params: { amt: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/eth/redeem', params);
  }

  /**
   * 获取ETH质押余额
   * 
   * 获取账户的ETH质押余额信息
   * 
   * API端点：GET /api/v5/finance/staking-defi/eth/balance
   * 
   * @returns Promise<any[]> - ETH质押余额信息
   * 
   * 使用方式：
   * const ethBalance = await client.getETHStakingBalance();
   * console.log('ETH质押余额:', ethBalance);
   * 
   * 注意：余额信息包括已质押的ETH数量和收益
   */
  getETHStakingBalance(): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/staking-defi/eth/balance');
  }

  /**
   * 获取ETH质押历史
   * 
   * 获取ETH质押的购买和赎回历史记录
   * 
   * API端点：GET /api/v5/finance/staking-defi/eth/purchase-redeem-history
   * 
   * @param params - 请求参数
   * @param params.type - 操作类型：'purchase'（购买）或'redeem'（赎回）
   * @param params.status - 状态：'pending'（待处理）、'success'（成功）、'failed'（失败）（可选）
   * @param params.after - 开始时间戳（可选）
   * @param params.before - 结束时间戳（可选）
   * @param params.limit - 返回结果的数量限制（可选）
   * @returns Promise<any[]> - ETH质押历史记录列表
   * 
   * 使用方式：
   * // 获取所有购买历史
   * const purchaseHistory = await client.getETHStakingHistory({
   *   type: 'purchase'
   * });
   * 
   * // 获取成功的赎回历史
   * const redeemHistory = await client.getETHStakingHistory({
   *   type: 'redeem',
   *   status: 'success'
   * });
   * 
   * 注意：历史记录包括所有ETH质押相关的操作
   */
  getETHStakingHistory(params: {
    type: 'purchase' | 'redeem';
    status?: 'pending' | 'success' | 'failed';
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/staking-defi/eth/purchase-redeem-history',
      params,
    );
  }

  /**
   * 获取APY历史
   * 
   * 获取ETH质押的年化收益率历史数据
   * 
   * API端点：GET /api/v5/finance/staking-defi/eth/apy-history
   * 
   * @param params - 请求参数
   * @param params.days - 天数
   * @returns Promise<any[]> - APY历史数据
   * 
   * 使用方式：
   * const apyHistory = await client.getAPYHistory({
   *   days: '30'
   * });
   * 
   * 注意：APY历史数据用于分析ETH质押的收益趋势
   */
  getAPYHistory(params: { days: string }): Promise<any[]> {
    return this.get('/api/v5/finance/staking-defi/eth/apy-history', params);
  }

  /**
   *
   * Financial product - simple earn flexible endpoints
   *
   */

  /**
   * 获取储蓄余额
   * 
   * 获取账户的储蓄余额信息
   * 
   * API端点：GET /api/v5/finance/savings/balance
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<any[]> - 储蓄余额信息
   * 
   * 使用方式：
   * // 获取所有币种的储蓄余额
   * const allSavingBalance = await client.getSavingBalance();
   * 
   * // 获取特定币种的储蓄余额
   * const usdtSavingBalance = await client.getSavingBalance({ ccy: 'USDT' });
   * 
   * 注意：储蓄余额用于获得稳定收益
   */
  getSavingBalance(params?: { ccy?: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/savings/balance', params);
  }

  /**
   * 储蓄购买/赎回
   * 
   * 购买或赎回储蓄产品
   * 
   * API端点：POST /api/v5/finance/savings/purchase-redempt
   * 
   * @param params - 购买/赎回请求参数
   * @param params.ccy - 币种
   * @param params.amt - 金额
   * @param params.side - 操作类型：'purchase'（购买）或'redempt'（赎回）
   * @param params.rate - 利率
   * @returns Promise<any[]> - 购买/赎回结果
   * 
   * 使用方式：
   * // 购买储蓄产品
   * const purchaseResult = await client.savingsPurchaseRedemption({
   *   ccy: 'USDT',
   *   amt: '1000',
   *   side: 'purchase',
   *   rate: '0.05'
   * });
   * 
   * // 赎回储蓄产品
   * const redemptionResult = await client.savingsPurchaseRedemption({
   *   ccy: 'USDT',
   *   amt: '500',
   *   side: 'redempt',
   *   rate: '0.05'
   * });
   * 
   * 注意：购买和赎回都使用同一个接口，通过side参数区分
   */
  savingsPurchaseRedemption(params: {
    ccy: string;
    amt: numberInString;
    side: 'purchase' | 'redempt';
    rate: numberInString;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/savings/purchase-redempt', params);
  }

  /**
   * 设置借贷利率
   * 
   * 设置指定币种的借贷利率
   * 
   * API端点：POST /api/v5/finance/savings/set-lending-rate
   * 
   * @param params - 设置利率请求参数
   * @param params.ccy - 币种
   * @param params.rate - 利率
   * @returns Promise<any[]> - 设置结果
   * 
   * 使用方式：
   * const result = await client.setLendingRate({
   *   ccy: 'USDT',
   *   rate: '0.05'
   * });
   * 
   * 注意：利率设置会影响借贷收益
   */
  setLendingRate(params: {
    ccy: string;
    rate: numberInString;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/savings/set-lending-rate', params);
  }

  /**
   * 获取借贷历史
   * 
   * 获取账户的借贷历史记录
   * 
   * API端点：GET /api/v5/finance/savings/lending-history
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<any[]> - 借贷历史记录列表
   * 
   * 使用方式：
   * // 获取所有借贷历史
   * const allLendingHistory = await client.getLendingHistory();
   * 
   * // 获取特定币种的借贷历史
   * const usdtLendingHistory = await client.getLendingHistory({ ccy: 'USDT' });
   * 
   * 注意：借贷历史包括所有借贷相关的操作记录
   */
  getLendingHistory(params?: PaginatedSymbolRequest): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/savings/lending-history', params);
  }

  /**
   * 获取公共借贷信息
   * 
   * 获取公共的借贷利率汇总信息
   * 
   * API端点：GET /api/v5/finance/savings/lending-rate-summary
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<any[]> - 公共借贷信息
   * 
   * 使用方式：
   * // 获取所有币种的借贷信息
   * const allBorrowInfo = await client.getPublicBorrowInfo();
   * 
   * // 获取特定币种的借贷信息
   * const usdtBorrowInfo = await client.getPublicBorrowInfo({ ccy: 'USDT' });
   * 
   * 注意：此接口返回的是公共信息，无需认证
   */
  getPublicBorrowInfo(params?: { ccy?: string }): Promise<any[]> {
    return this.get('/api/v5/finance/savings/lending-rate-summary', params);
  }

  /**
   * 获取公共借贷历史
   * 
   * 获取公共的借贷利率历史数据
   * 
   * API端点：GET /api/v5/finance/savings/lending-rate-history
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<any[]> - 公共借贷历史数据
   * 
   * 使用方式：
   * // 获取所有借贷历史
   * const allBorrowHistory = await client.getPublicBorrowHistory();
   * 
   * // 获取特定币种的借贷历史
   * const usdtBorrowHistory = await client.getPublicBorrowHistory({ ccy: 'USDT' });
   * 
   * 注意：此接口返回的是公共历史数据，无需认证
   */
  getPublicBorrowHistory(params?: PaginatedSymbolRequest): Promise<any[]> {
    return this.get('/api/v5/finance/savings/lending-rate-history', params);
  }

  /**
   *
   * Financial product - simple earn fixed endpoints
   *
   */

  /**
   * 获取借贷产品列表
   * 
   * 获取固定收益借贷产品列表
   * 
   * API端点：GET /api/v5/finance/fixed-loan/lending-offers
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种（可选）
   * @param params.term - 期限（可选）
   * @returns Promise<any[]> - 借贷产品列表
   * 
   * 使用方式：
   * // 获取所有借贷产品
   * const allOffers = await client.getLendingOffers();
   * 
   * // 获取特定币种的借贷产品
   * const usdtOffers = await client.getLendingOffers({ ccy: 'USDT' });
   * 
   * 注意：固定收益借贷产品提供稳定的收益回报
   */
  getLendingOffers(params?: { ccy?: string; term?: string }): Promise<any[]> {
    return this.get('/api/v5/finance/fixed-loan/lending-offers', params);
  }

  /**
   * 获取借贷APY历史
   * 
   * 获取固定收益借贷产品的年化收益率历史数据
   * 
   * API端点：GET /api/v5/finance/fixed-loan/lending-apy-history
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种
   * @param params.term - 期限
   * @returns Promise<any[]> - APY历史数据
   * 
   * 使用方式：
   * const apyHistory = await client.getLendingAPYHistory({
   *   ccy: 'USDT',
   *   term: '7D'
   * });
   * 
   * 注意：APY历史数据用于分析借贷产品的收益趋势
   */
  getLendingAPYHistory(params: { ccy: string; term: string }): Promise<any[]> {
    return this.get('/api/v5/finance/fixed-loan/lending-apy-history', params);
  }

  /**
   * 获取借贷量
   * 
   * 获取固定收益借贷产品的待处理借贷量
   * 
   * API端点：GET /api/v5/finance/fixed-loan/pending-lending-volume
   * 
   * @param params - 请求参数
   * @param params.ccy - 币种
   * @param params.term - 期限
   * @returns Promise<any[]> - 借贷量信息
   * 
   * 使用方式：
   * const lendingVolume = await client.getLendingVolume({
   *   ccy: 'USDT',
   *   term: '7D'
   * });
   * 
   * 注意：借贷量信息用于了解产品的市场需求
   */
  getLendingVolume(params: { ccy: string; term: string }): Promise<any[]> {
    return this.get(
      '/api/v5/finance/fixed-loan/pending-lending-volume',
      params,
    );
  }

  /**
   * 下借贷订单
   * 
   * 下固定收益借贷订单
   * 
   * API端点：POST /api/v5/finance/fixed-loan/lending-order
   * 
   * @param params - 借贷订单参数
   * @returns Promise<any[]> - 订单结果
   * 
   * 使用方式：
   * const orderResult = await client.placeLendingOrder({
   *   ccy: 'USDT',
   *   amt: '1000',
   *   term: '7D',
   *   rate: '0.05'
   * });
   * 
   * 注意：借贷订单一旦确认，资金将被锁定到指定期限
   */
  placeLendingOrder(params: LendingOrder): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/fixed-loan/lending-order', params);
  }

  /**
   * 修改借贷订单
   * 
   * 修改已下的固定收益借贷订单
   * 
   * API端点：POST /api/v5/finance/fixed-loan/amend-lending-order
   * 
   * @param params - 修改订单参数
   * @returns Promise<any[]> - 修改结果
   * 
   * 使用方式：
   * const amendResult = await client.amendLendingOrder({
   *   ordId: '12345',
   *   newAmt: '1500',
   *   newRate: '0.06'
   * });
   * 
   * 注意：只能修改未确认的借贷订单
   */
  amendLendingOrder(params: LendingOrder): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/finance/fixed-loan/amend-lending-order',
      params,
    );
  }

  /**
   * 获取借贷订单列表
   * 
   * 获取固定收益借贷订单列表
   * 
   * API端点：GET /api/v5/finance/fixed-loan/lending-orders-list
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 借贷订单列表
   * 
   * 使用方式：
   * const orders = await client.getLendingOrders({
   *   ccy: 'USDT',
   *   state: 'live'
   * });
   * 
   * 注意：可以按状态、币种等条件筛选订单
   */
  getLendingOrders(params: GetLendingOrderListRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/fixed-loan/lending-orders-list',
      params,
    );
  }

  /**
   * 获取借贷子订单列表
   * 
   * 获取固定收益借贷的子订单列表
   * 
   * API端点：GET /api/v5/finance/fixed-loan/lending-sub-orders
   * 
   * @param params - 请求参数
   * @returns Promise<any[]> - 借贷子订单列表
   * 
   * 使用方式：
   * const subOrders = await client.getLendingSubOrders({
   *   ordId: '12345'
   * });
   * 
   * 注意：子订单是主订单拆分后的具体执行订单
   */
  getLendingSubOrders(params: GetLendingSubOrderListRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/fixed-loan/lending-sub-orders',
      params,
    );
  }

  /**
   *
   * Financial product - Flexible loan endpoints
   *
   */

  /**
   * 获取可借贷币种
   * 
   * 获取灵活借贷支持的可借贷币种列表
   * 
   * API端点：GET /api/v5/finance/flexible-loan/borrow-currencies
   * 
   * @returns Promise<{borrowCcy: string}[]> - 可借贷币种列表
   * 
   * 使用方式：
   * const borrowableCurrencies = await client.getBorrowableCurrencies();
   * console.log('可借贷币种:', borrowableCurrencies);
   * 
   * 注意：返回的币种都可以进行灵活借贷
   */
  getBorrowableCurrencies(): Promise<
    {
      borrowCcy: string;
    }[]
  > {
    return this.get('/api/v5/finance/flexible-loan/borrow-currencies');
  }

  /**
   * 获取抵押资产
   * 
   * 获取灵活借贷支持的抵押资产列表
   * 
   * API端点：GET /api/v5/finance/flexible-loan/collateral-assets
   * 
   * @param params - 请求参数（可选）
   * @param params.ccy - 币种（可选）
   * @returns Promise<CollateralAssetsResponse[]> - 抵押资产列表
   * 
   * 使用方式：
   * // 获取所有抵押资产
   * const allCollateralAssets = await client.getCollateralAssets();
   * 
   * // 获取特定币种的抵押资产
   * const usdtCollateralAssets = await client.getCollateralAssets({ ccy: 'USDT' });
   * 
   * 注意：抵押资产用于担保借贷，影响借贷额度和利率
   */
  getCollateralAssets(params?: {
    ccy?: string;
  }): Promise<CollateralAssetsResponse[]> {
    return this.get('/api/v5/finance/flexible-loan/collateral-assets', params);
  }

  /**
   * 获取最大借贷额度
   * 
   * 获取灵活借贷的最大可借贷额度
   * 
   * API端点：POST /api/v5/finance/flexible-loan/max-loan
   * 
   * @param params - 请求参数
   * @returns Promise<MaxLoanResponse[]> - 最大借贷额度信息
   * 
   * 使用方式：
   * const maxLoanAmount = await client.getMaxLoanAmount({
   *   instId: 'BTC-USDT',
   *   mgnMode: 'cross'
   * });
   * 
   * 注意：最大借贷额度基于抵押资产和风险控制计算
   */
  getMaxLoanAmount(params: MaxLoanRequest): Promise<MaxLoanResponse[]> {
    return this.postPrivate('/api/v5/finance/flexible-loan/max-loan', params);
  }

  /**
   * 调整抵押品
   * 
   * 调整灵活借贷的抵押品配置
   * 
   * API端点：POST /api/v5/finance/flexible-loan/adjust-collateral
   * 
   * @param params - 调整抵押品请求参数
   * @returns Promise<[]> - 调整结果
   * 
   * 使用方式：
   * const result = await client.adjustCollateral({
   *   instId: 'BTC-USDT',
   *   mgnMode: 'cross',
   *   collAction: 'add'
   * });
   * 
   * 注意：调整抵押品会影响借贷额度和风险控制
   */
  adjustCollateral(params: AdjustCollateralRequest): Promise<[]> {
    return this.postPrivate(
      '/api/v5/finance/flexible-loan/adjust-collateral',
      params,
    );
  }

  /**
   * 获取借贷信息
   * 
   * 获取灵活借贷的详细信息
   * 
   * API端点：GET /api/v5/finance/flexible-loan/loan-info
   * 
   * @returns Promise<LoanInfo[]> - 借贷信息列表
   * 
   * 使用方式：
   * const loanInfo = await client.getLoanInfo();
   * console.log('借贷信息:', loanInfo);
   * 
   * 注意：返回当前账户的所有借贷信息
   */
  getLoanInfo(): Promise<LoanInfo[]> {
    return this.getPrivate('/api/v5/finance/flexible-loan/loan-info');
  }

  /**
   * 获取借贷历史
   * 
   * 获取灵活借贷的历史记录
   * 
   * API端点：GET /api/v5/finance/flexible-loan/loan-history
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<LoanHistoryItem[]> - 借贷历史记录列表
   * 
   * 使用方式：
   * // 获取所有借贷历史
   * const allLoanHistory = await client.getLoanHistory();
   * 
   * // 获取特定条件的借贷历史
   * const filteredHistory = await client.getLoanHistory({
   *   ccy: 'USDT',
   *   after: '1640995200000'
   * });
   * 
   * 注意：可以按币种、时间等条件筛选历史记录
   */
  getLoanHistory(params?: LoanHistoryRequest): Promise<LoanHistoryItem[]> {
    return this.getPrivate(
      '/api/v5/finance/flexible-loan/loan-history',
      params,
    );
  }

  /**
   * 获取应计利息
   * 
   * 获取灵活借贷的应计利息信息
   * 
   * API端点：GET /api/v5/finance/flexible-loan/interest-accrued
   * 
   * @param params - 请求参数（可选）
   * @returns Promise<AccruedInterestItem[]> - 应计利息信息列表
   * 
   * 使用方式：
   * // 获取所有应计利息
   * const allAccruedInterest = await client.getAccruedInterest();
   * 
   * // 获取特定币种的应计利息
   * const usdtAccruedInterest = await client.getAccruedInterest({
   *   ccy: 'USDT'
   * });
   * 
   * 注意：应计利息是借贷期间产生的利息费用
   */
  getAccruedInterest(
    params?: AccruedInterestRequest,
  ): Promise<AccruedInterestItem[]> {
    return this.getPrivate(
      '/api/v5/finance/flexible-loan/interest-accrued',
      params,
    );
  }

  /**
   *
   * Affiliate endpoints
   *
   */

  /**
   * 获取被邀请人详情
   * 
   * 获取被邀请人的详细信息
   * 
   * API端点：GET /api/v5/affiliate/invitee/detail
   * 
   * @param params - 请求参数
   * @param params.uid - 被邀请人UID
   * @returns Promise<any[]> - 被邀请人详情
   * 
   * 使用方式：
   * const inviteeDetail = await client.getInviteeDetail({
   *   uid: '12345'
   * });
   * 
   * 注意：用于查看被邀请人的相关信息
   */
  getInviteeDetail(params: { uid: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/affiliate/invitee/detail', params);
  }

  /**
   * 获取推荐返佣信息
   * 
   * 获取合作伙伴的推荐返佣信息
   * 
   * API端点：GET /api/v5/users/partner/if-rebate
   * 
   * @param params - 请求参数
   * @param params.apiKey - API密钥
   * @returns Promise<any[]> - 推荐返佣信息
   * 
   * 使用方式：
   * const rebateInfo = await client.getAffiliateRebateInfo({
   *   apiKey: 'your-api-key'
   * });
   * 
   * 注意：用于查看推荐返佣的相关信息
   */
  getAffiliateRebateInfo(params: { apiKey: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/users/partner/if-rebate', params);
  }

  /**
   *
   * Status endpoints (public)
   *
   */

  /**
   * 获取系统状态
   * 
   * 获取OKX系统的运行状态信息
   * 
   * API端点：GET /api/v5/system/status
   * 
   * @param params - 请求参数（可选）
   * @param params.state - 系统状态：'scheduled'（计划中）、'ongoing'（进行中）、'pre_open'（预开放）、'completed'（已完成）、'canceled'（已取消）
   * @returns Promise<any[]> - 系统状态信息
   * 
   * 使用方式：
   * // 获取所有系统状态
   * const allSystemStatus = await client.getSystemStatus();
   * 
   * // 获取特定状态的系统信息
   * const ongoingStatus = await client.getSystemStatus({ state: 'ongoing' });
   * 
   * 注意：用于监控OKX系统的运行状态
   */
  getSystemStatus(params: {
    state?: 'scheduled' | 'ongoing' | 'pre_open' | 'completed' | 'canceled';
  }): Promise<any[]> {
    return this.get('/api/v5/system/status', params);
  }

  /**
   *
   * Announcement endpoints
   *
   */

  /**
   * 获取公告列表
   * 
   * 获取OKX平台的公告信息列表
   * 
   * API端点：GET /api/v5/support/announcements
   * 
   * @param params - 请求参数（可选）
   * @param params.annType - 公告类型（可选）
   * @param params.page - 页码（可选）
   * @returns Promise<{totalPage: string; details: Announcement[]}[]> - 公告列表信息
   * 
   * 使用方式：
   * // 获取所有公告
   * const allAnnouncements = await client.getAnnouncements();
   * 
   * // 获取特定类型的公告
   * const maintenanceAnnouncements = await client.getAnnouncements({
   *   annType: 'maintenance'
   * });
   * 
   * 注意：公告信息包括平台维护、产品更新等重要通知
   */
  getAnnouncements(params?: { annType?: string; page?: string }): Promise<
    {
      totalPage: string;
      details: Announcement[];
    }[]
  > {
    return this.get('/api/v5/support/announcements', params);
  }

  /**
   * 获取公告类型
   * 
   * 获取OKX平台支持的公告类型列表
   * 
   * API端点：GET /api/v5/support/announcement-types
   * 
   * @returns Promise<{annType: string; annTypeDesc: string}[]> - 公告类型列表
   * 
   * 使用方式：
   * const announcementTypes = await client.getAnnouncementTypes();
   * console.log('支持的公告类型:', announcementTypes);
   * 
   * 注意：用于了解平台支持哪些类型的公告
   */
  getAnnouncementTypes(): Promise<
    {
      annType: string;
      annTypeDesc: string;
    }[]
  > {
    return this.get('/api/v5/support/announcement-types');
  }

  /**
   *
   * Broker endpoints (private)
   *
   */

  /**
   * 创建子账户
   * 
   * 创建新的子账户
   * 
   * API端点：POST /api/v5/broker/nd/create-subaccount
   * 
   * @param params - 创建子账户请求参数
   * @param params.subAcct - 子账户名称
   * @param params.label - 标签（可选）
   * @param params.clientIP - 客户端IP（可选）
   * @param params.mainAcct - 主账户名称
   * @returns Promise<any[]> - 创建结果
   * 
   * 使用方式：
   * const result = await client.createSubAccount({
   *   subAcct: 'subaccount1',
   *   label: '交易子账户',
   *   mainAcct: 'mainaccount'
   * });
   * 
   * 注意：子账户用于资金管理和风险控制
   */
  createSubAccount(params: {
    subAcct: string;
    label?: string;
    clientIP?: string;
    mainAcct: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/broker/nd/create-subaccount', params);
  }

  /**
   * 删除子账户
   * 
   * 删除指定的子账户
   * 
   * API端点：POST /api/v5/broker/nd/delete-subaccount
   * 
   * @param params - 删除子账户请求参数
   * @param params.subAcct - 子账户名称
   * @returns Promise<any[]> - 删除结果
   * 
   * 使用方式：
   * const result = await client.deleteSubAccount({
   *   subAcct: 'subaccount1'
   * });
   * 
   * 注意：删除子账户前需要确保账户内没有资金和持仓
   */
  deleteSubAccount(params: { subAcct: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/broker/nd/delete-subaccount', params);
  }

  /**
   * 创建子账户API密钥
   * 
   * 为子账户创建新的API密钥
   * 
   * API端点：POST /api/v5/broker/nd/subaccount/apikey
   * 
   * @param params - 创建API密钥请求参数
   * @param params.subAcct - 子账户名称
   * @param params.label - 标签
   * @param params.passphrase - 密码短语
   * @param params.ip - IP地址限制（可选）
   * @param params.perm - 权限设置（可选）
   * @returns Promise<any[]> - 创建结果
   * 
   * 使用方式：
   * const result = await client.createSubAccountAPIKey({
   *   subAcct: 'subaccount1',
   *   label: '交易API',
   *   passphrase: 'your-passphrase',
   *   ip: '192.168.1.1',
   *   perm: 'read_only'
   * });
   * 
   * 注意：API密钥用于子账户的API访问，请妥善保管
   */
  createSubAccountAPIKey(params: {
    subAcct: string;
    label: string;
    passphrase: string;
    ip?: string;
    perm?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/broker/nd/subaccount/apikey', params);
  }
}
