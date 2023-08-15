/*
 * @Author: Luzy
 * @Date: 2023-08-15 14:18:39
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-15 16:17:54
 * @Description: Fecth module模块测试
 *  // !启动前需要运行server.js以启动测试用服务器
 */

import Fetch from "../src/Fetch";


// 模拟网络请求数据
const url = "http://localhost:8848/test"
const headers = { "Content-Type": "application/json" }

// 外层请求模块测试
describe('Fecth module', () => {

    const testRes = (res: any) => {
        expect(res.status).toBe(200)
        expect(res.message).not.toBeNull()
    }

    test('get', async () => {
        const res = await Fetch.get(url, { headers })
        testRes(res)
    });

    test('post', async () => {
        const res = await Fetch.post(url, { headers })
        testRes(res)
    });

    test('delete', async () => {
        const res = await Fetch.delete(url, { headers })
        testRes(res)
    });

    test('put', async () => {
        const res = await Fetch.put(url, { headers })
        testRes(res)
    });

    test('patch', async () => {
        const res = await Fetch.patch(url, { headers })
        testRes(res)
    });

    test('head', async () => {
        const res = await Fetch.head(url, { headers })
        testRes(res)
    });
});