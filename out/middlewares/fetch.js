/*
 * @Author: Luzy
 * @Date: 2023-08-10 21:40:44
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-14 22:36:24
 * @Description: 提供fetch核心功能的中间件
 */
import 'isomorphic-fetch';
export default class FetchMiddleware {
    call(ctx, next) {
        if (!ctx)
            return next();
        const { req: { options = {}, url = '' } = {}, cache } = ctx;
        // use isomorphic-fetch to adapt to both browser and nodeJS environment
        const adapterFetch = fetch;
        if (!adapterFetch) {
            throw new Error('Global fetch not exist!');
        }
        // 从缓存池检查是否有缓存数据 
        if (options.useCache) {
            let responseCache = cache.get(ctx.req);
            if (responseCache) {
                ctx.finalRes = responseCache;
                return;
            }
        }
        // real call  fetch 推荐使用  this[INTERNALS$1] 的方式获取属性, 故断点调试时response上所有属性都是隐藏的
        let response = adapterFetch(url, options);
        return response.then(res => {
            ctx.res = res;
            return next();
        });
    }
}
