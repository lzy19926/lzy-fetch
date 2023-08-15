/*
 * @Author: Luzy
 * @Date: 2023-08-10 14:22:08
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-15 15:03:54
 * @Description: 外层工厂函数 用于创建可使用的Fetch对象
 */

import Core from "./core.js"

type FinalResponse = {
    status: number
    message: any
}

interface Fetch {
    cancel(): void

    get(url: string, options: any): Promise<FinalResponse>
    post(url: string, options: any): Promise<FinalResponse>
    delete(url: string, options: any): Promise<FinalResponse>
    put(url: string, options: any): Promise<FinalResponse>
    patch(url: string, options: any): Promise<FinalResponse>
    head(url: string, options: any): Promise<FinalResponse>
    options(url: string, options: any): Promise<FinalResponse>
    rpc(url: string, options: any): Promise<FinalResponse>
}


function createFetch(initOptions = {}): Fetch {

    const coreInstance = new Core(initOptions)
    const fetchInstance: any = {}

    fetchInstance.cancel = () => { }

    // 注册请求语法糖 Fetch.get Fetch.post ……
    const METHODS = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];

    METHODS.forEach(method => {
        fetchInstance[method] = (url: string, options: any) =>
            coreInstance.request(url, { method: method.toLowerCase(), ...options })
    });

    return fetchInstance
}


export default createFetch({})