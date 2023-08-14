/*
 * @Author: Luzy
 * @Date: 2023-08-10 21:50:14
 * @LastEditors: Luzy
 * @LastEditTime: 2023-08-14 22:41:55
 * @Description: 
 */

import request from "../out/request.js";


async function test() {

    const id = "55528387-45ad-44eb-85f5-9fee46843b1f"
    const url = `http://10.0.8.151:8055/items/connection/${id}`;
    const Token = "jrc1jwp_Kfx5jisiim7IKq3x5LdMUL3A";
    const headers = { "Authorization": `Bearer ${Token}` }

    
    const res = await request.get(url, { headers, useCache: true })

    request.get(url, { headers, useCache: true }).then(res => {
        debugger
        console.log(res);
    })

}


test()
