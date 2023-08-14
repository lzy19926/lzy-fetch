/*
 * @Author: Luzy
 * @Date: 2023-08-10 21:13:20
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-11 16:17:17
 * @Description: 中间件化的请求器模块  用于执行请求和管理中间件 
 */
import { compose } from './utils.js'
import FetchMiddleware from "./middlewares/fetch.js"
import ParseResponseMiddleware from "./middlewares/parseResponse.js"

class Requestor {

    middlewares: any[]

    constructor() {
        this.middlewares = []
        this.registMiddleware()
    }

    // 用于外部添加中间件
    use(middleware: any) {
        this.middlewares.push(middleware)
    }

    // 注册中间件
    registMiddleware() {
        const middlers =
            [
                new FetchMiddleware(),
                new ParseResponseMiddleware()
            ]

        middlers.forEach(m => {
            this.use(m)
        })
    }

    // 检查中间件
    checkMiddlewares(middlewares: any[]) {

        if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!');

        const len = this.middlewares.length;
        for (let i = 0; i < len; i++) {
            if (typeof middlewares[i] !== 'object') {
                throw new TypeError('Middleware must be an Instance');
            }

            if (typeof middlewares[i]['call'] !== "function") {
                throw new TypeError('Middleware must implement the call method.');
            }
        }

        return middlewares
    }

    // 执行请求
    execute(param: any = null) {
        const checkedMiddlewares = this.checkMiddlewares(this.middlewares)
        const fn = compose(checkedMiddlewares)
        return fn(param)
    }
}

export default Requestor
