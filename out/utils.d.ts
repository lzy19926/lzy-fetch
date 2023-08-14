/**
 * @description: 标准中间件compose化方法实现
 * @param {any[]} middlewares 中间件列表
 */
export declare function compose(middlewares: any[]): (ctx: any, next?: Function) => Promise<any>;
/**
 * @description:  安全的JSON.parse
 * @param {string} data fetch响应体text
 */
export declare function safeJsonParse(data: string): any;
