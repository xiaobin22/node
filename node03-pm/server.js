const express = require('express')
const app = express()//做 express 的实例化
const bodyParser=require('body-parser')
const path=require('path')
const mail=require('./utils/mail')
// app.use(bodyParser.json())//解析 json 格式的数据
app.use(bodyParser.urlencoded({extended:true}))  //解析 form 表单的post数据
//{extended:true}解决错误
let checks={}//保存账号和验证码
app.post('/reg',(req,res)=>{    //验证码的逻辑   时间验证（时间差）
    let{email,ps,code}=req.body
    //验证code是否真确
    // console.log(checks)
    if(checks[email]==code){
        //将账号密码存入数据库
        res.send({err:0,msg:'注册ok'})
    }
    else{
        res.send({err:-1,msg:'验证码错误，请重试'})
    }
   
})
app.post('/getEmailCode',(req,res)=>{
   
    let email=req.body.email//前端以email为key值传过来
    // let {email}=req.body  解构赋值
    let code=parseInt(Math.random()*100000)
    checks[email]=code
    mail.send(email,code)
    .then(()=>{
        res.send({err:-1,msg:'获取验证码失败'})
    })
    .catch(()=>{
        res.send({err:0,msg:'获取验证码成功'})
    })
    
})
app.listen(3000, () =>{
    console.log('纯真的信赖之心，果然是罪恶的源泉'+3000)
})

/** 
 * 注册功能  邮箱
 * 1、验证邮箱存在
 * 2、获取验证码
 * 3、注册  邮箱  + 验证码  + ps
 * 
 * utils  工具类文件夹
 * 
 * 时间验证  短信验轰炸机（防止薅羊毛）
 *   60s  倒计时
 *   服务验证  一天只能发十条
*/

/* 
 返回的信息包括：
 {
     err: //状态码
     msg:信息
     data: 数据
 }

 十人原则
*/