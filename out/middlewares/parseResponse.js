/*
 * @Author: Luzy
 * @Date: 2023-08-11 12:46:45
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-14 22:42:30
 * @Description: 用于解析Reponse并生成最终结果的中间件
 */
import { safeJsonParse } from "../utils.js";
export default class ParseResponseMiddleware {
    call(ctx, next) {
        const { res, cache, req, finalRes } = ctx;
        // 如果有缓存结果直接返回结果
        if (finalRes)
            return next();
        // 否则正常解析
        return res.text().then((data) => {
            const status = res.status;
            const message = safeJsonParse(data);
            // 缓存处理
            if (status == 200) {
                cache.set(req, message);
            }
            ctx.finalRes = {
                status,
                message,
            };
            // todo 错误处理
            if (status !== 200) {
            }
            else {
            }
            return next();
        });
    }
}
