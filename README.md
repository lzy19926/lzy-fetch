## 一个Axios风格的轻量级Fetch请求工具
```js
import Fetch from "../src/Fetch";

const options = {
    headers: { "Content-Type": "application/json" }
}

const res = await Fetch.get("http://localhost:3000",options)
```

### 缓存功能

```js
// 首次请求
const res = await Fetch.get("http://localhost:3000",{useCache:true})
// 获取上一次的结果
const res2 = await Fetch.get("http://localhost:3000",{useCache:true})
```

### 自动结果解析
```js

const res = await Fetch.get("http://localhost:3000")
console.log(res)
//    {
//     status:200,
//     message:{}
//     }
```