const express = require('express') //引入
const router = express.Router() //创建路由实例

router.get('/login',(req,res)=>{
    res.send('admin login')
})

module.exports=router

/*
1、服务器启动错误
2、路径错误

*/