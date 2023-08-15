/*
 * @Author: Luzy
 * @Date: 2023-08-15 15:09:48
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-15 15:49:13
 * @Description: 
 */


const Koa = require('koa');
const app = new Koa();

function startServer() {
    // 定义路由和处理程序
    app.use(async (ctx) => {
        if (ctx.request.path === '/test') {

            if (ctx.method === 'GET') {
                ctx.body = { msg: 'SUCCESS GET!' };
            }
            if (ctx.method === 'POST') {
                ctx.body = { msg: 'SUCCESS POST!' };
            }
            if (ctx.method === 'DELETE') {
                ctx.body = { msg: 'SUCCESS DELETE!' };
            }
            if (ctx.method === 'PUT') {
                ctx.body = { msg: 'SUCCESS PUT!' };
            }
            if (ctx.method === 'PATCH') {
                ctx.body = { msg: 'SUCCESS PATCH!' };
            }
            if (ctx.method === 'HEAD') {
                ctx.body = { msg: 'SUCCESS HEAD!' };
            }

        } else {
            ctx.response.status = 404;
            ctx.body = '404 Not Found';
        }
    });


    app.listen(8848);
    console.log('Server running at http://localhost:8848/');
}

function stopServer() {
    app.close()
    console.log('Server stopped');
}

startServer()

module.exports = { startServer, stopServer }