/*
 * @Author: Luzy
 * @Date: 2023-08-10 21:29:36
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-15 16:01:51
 * @Description: 工具函数集
 */
/**
 * @description: 标准中间件compose化方法实现
 * @param {any[]} middlewares 中间件列表
 */
export function compose(middlewares: any[]) {
    return function wrapMiddlewares(ctx: any, next?: Function) {
        let index = -1;

        function dispatch(i: number) {
            index = i;
            const fn = middlewares[i]?.["call"] || next;
            if (!fn) return Promise.resolve();

            try {
                return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
            } catch (err) {
                return Promise.reject(err);
            }
        }

        return dispatch(0);
    };
}


/**
 * @description:  安全的JSON.parse
 * @param {string} data fetch响应体text
 */
export function safeJsonParse(data: string) {

    if (!data) return ""

    try {
        return JSON.parse(data);
    } catch (e: any) {
        throw new Error(e)
    }
}