/*
 * @Author: Luzy
 * @Date: 2023-08-10 20:58:03
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-14 21:48:14
 * @Description: 核心模块  用于外层发起请求和管理和初始化所有下级模块
 */
import Requestor from "./Requestor.js";
import MapCache from "./MapCache.js";
class Core {
    constructor(initOptions) {
        this.requestor = new Requestor();
        this.cache = new MapCache(initOptions);
    }
    checkParams(url, options) {
        if (typeof url !== 'string') {
            throw new Error('url MUST be a string');
        }
    }
    request(url, options) {
        const obj = {
            req: { url, options },
            res: null,
            cache: this.cache,
            finalRes: null,
        };
        return new Promise((resolve, reject) => {
            this.requestor.execute(obj)
                // 返回最终结果
                .then(() => resolve(obj.finalRes))
                // 错误处理
                .catch(error => reject(error));
        });
    }
}
export default Core;
