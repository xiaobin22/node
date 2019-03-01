//第三方插件需要  安装 npm instaall express
const express = require('express')
const app = express()//做 express 的实例化
const bodyParser=require('body-parser')
const path=require('path')
// app.use(bodyParser.json())//解析 json 格式的数据
app.use(bodyParser.urlencoded({extended:true}))  //解析 form 表单的post数据
//{extended:true}解决错误

//路由引入
const home=require('./router/home')
app.use('/home',home)
const admin=require('./router/admin')
app.use('/admin',admin)
// app.get('/login', (req, res) =>{  //登录
//     console.log(req.query)  //  get传递数据
//     res.send('login ok')
// })

// app.post('/reg', (req, res) =>{   //注册
//     console.log(req.body)   //  post 传递数据
//     res.send('reg ok')
// })
// 第一个参数是 api 接口的路径   
// 源生 res.end  这里是res.send 表示回复一个信息
app.listen(3000, () =>{
    console.log('服务器启动 prot：'+3000)
})

/* 
 get 数据通过  req.query接收
 post 数据
   常用数据格式   x-www-from-urlencode(form表单)  json
   express 不能解析post数据  只能通过插件来解析（body-parser）
              npm install body-parser

json   一种数据格式  用来数据交互  没有语言限制
json字符串    json格式的字符串
json对象      json格式的对象
json 格式
*/

/*
前后端交互  遇到问题 
   1、数据格式不统一  解决方式：根据后端的数据格式走
   2、body-parser 获取数据
      post数据格式需要不同的解析方式：
       app.use(bodyParser.json())//解析 json 格式的数据
       app.use(bodyParser.urlencoded({extended:true}))  //解析 form 表单
*/