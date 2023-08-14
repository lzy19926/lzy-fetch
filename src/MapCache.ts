/*
 * @Author: Luzy
 * @Date: 2023-08-10 21:39:08
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-14 22:40:37
 * @Description: 一个简易的请求缓存
 */


class MapCache {

    maxCache: number
    ttl: number
    cache: Map<string, any>
    timer: Map<string, any>

    constructor(options: any) {
        this.maxCache = options.maxCache | 0
        this.ttl = options.cacheTtl | 60000
        this.cache = new Map()
        this.timer = new Map()
    }


    constructCacheKey(req: any) {
        const { url, options } = req
        const { method, params } = options

        return JSON.stringify({
            url,
            method,
            params
        });
    }

    clearOverflow() {

    }

    setTimer(key: string) {
        if (this.ttl > 0) {
            this.timer.set(key, setTimeout(() => {
                this.cache.delete(key);
                this.timer.delete(key);
            }, this.ttl))
        }
    }

    set(req: any, message: any) {
        //todo 超过最大缓存数 删除时间最久的缓存
        if (this.maxCache > 0 && this.cache.size >= this.maxCache) {
            this.clearOverflow()
        }

        const cacheKey = this.constructCacheKey(req)

        this.cache.set(cacheKey, message);

        this.setTimer(cacheKey)
    }

    get(req: any) {
        debugger
        const cacheKey = this.constructCacheKey(req)
        return this.cache.get(cacheKey);
    }

}

export default MapCache