/**
 * 日志记录工具模块
 * 
 * 提供统一的日志记录接口，支持不同级别的日志输出
 */

/**
 * 日志参数类型
 * 
 * 可以是null或任意类型的数据
 */
export type LogParams = null | any;

/**
 * 默认日志记录器
 * 
 * 实现了标准的日志级别接口，将日志输出到控制台
 * 
 * 日志级别说明：
 * - silly: 最详细的调试信息（当前被禁用）
 * - debug: 调试信息，输出到console.log
 * - notice: 通知信息，输出到console.log
 * - info: 一般信息，输出到console.info
 * - warning: 警告信息，输出到console.error
 * - error: 错误信息，输出到console.error
 * 
 * 使用方式：
 * import { DefaultLogger } from 'okx-api';
 * 
 * DefaultLogger.info('API调用成功');
 * DefaultLogger.error('网络连接失败');
 */
export const DefaultLogger = {
  /**
   * 最详细的调试日志（当前被禁用）
   * @param params - 日志参数
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  silly: (...params: LogParams): void => {
    // console.log(params);
  },
  
  /**
   * 调试日志
   * @param params - 日志参数
   */
  debug: (...params: LogParams): void => {
    console.log(params);
  },
  
  /**
   * 通知日志
   * @param params - 日志参数
   */
  notice: (...params: LogParams): void => {
    console.log(params);
  },
  
  /**
   * 信息日志
   * @param params - 日志参数
   */
  info: (...params: LogParams): void => {
    console.info(params);
  },
  
  /**
   * 警告日志
   * @param params - 日志参数
   */
  warning: (...params: LogParams): void => {
    console.error(params);
  },
  
  /**
   * 错误日志
   * @param params - 日志参数
   */
  error: (...params: LogParams): void => {
    console.error(params);
  },
};
