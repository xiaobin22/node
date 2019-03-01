//路由
const express = require('express')
const app = express()//做 express 的实例化
const bodyParser=require('body-parser')
// app.use(bodyParser.json())//解析 json 格式的数据
app.use(bodyParser.urlencoded({extended:true}))  //解析 form 表单的post数据
//{extended:true}解决错误
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
路由：
登录功能  前台：3000/home/login    后台：3000/admin/login
注册功能  前台：3000/home/reg     后台：3000/admin/reg
*/