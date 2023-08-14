/*
 * @Author: Luzy
 * @Date: 2023-08-10 14:22:08
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-11 16:23:03
 * @Description: 外层工厂函数 用于创建可使用的Fetch对象
 */
import Core from "./core.js";
function createFetch(initOptions = {}) {
    const coreInstance = new Core(initOptions);
    const fetchInstance = {};
    fetchInstance.cancel = () => { };
    // 注册请求语法糖 Fetch.get Fetch.post ……
    const METHODS = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];
    METHODS.forEach(method => {
        fetchInstance[method] = (url, options) => coreInstance.request(url, Object.assign({ method: method.toLowerCase() }, options));
    });
    return fetchInstance;
}
export default createFetch({});
