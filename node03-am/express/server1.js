const express = require('express')
const app = express()//做 express 的实例化
const bodyParser=require('body-parser')
const path=require('path')
// app.use(bodyParser.json())//解析 json 格式的数据
app.use(bodyParser.urlencoded({extended:true}))  //解析 form 表单的post数据
//{extended:true}解决错误

// app.use(express.static('public')) //静态路由
//通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了
//通过localhost:3000/img/**.png 访问图片 */
// app.use('/static',express.static('public'))
// 通过localhost:3000:static/img/**.png 访问图片
app.use('/static', express.static(path.join(__dirname, 'public')))
//path 内置模块 需要引用

app.get('/login', (req, res) =>{  //注册
    console.log(req.query)  //  get传递数据
    res.send('login ok')
})

app.post('/reg', (req, res) =>{   //登录
    console.log(req.body)   //  post 传递数据
    res.send('reg ok')
})
// 第一个参数是 api 接口的路径   
// 源生 res.end  这里是res.send 表示回复一个信息
app.listen(3000, () =>{
    console.log('服务器启动 prot：'+3000)
})


/* 
静态目录：
相当于 Apache 下的 www 目录
作用：可以通过 IP+端口号（localhost：3000）直接访问目录下的文件
app.use('/static', express.static(path.join(__dirname, 'public')))
参数一 path（路径）追加   需要在端口号后添加path
参数二 静态目录路径 推荐使用绝对路径

优点访问本服务器的api没有跨域问题

可以写多个目录
*/