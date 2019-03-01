//前台路由   官方文档  指南  路由
const express = require('express') //引入
const router = express.Router() //创建路由实例

router.get('/login',(req,res)=>{
    console.log(req.query)
    res.send('home login')
})

module.exports = router  //抛出路由