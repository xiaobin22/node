//发送验证码的核心模块
const nodemailer = require("nodemailer");

  //创建发送邮箱验证码的请求对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",    //发送
    port: 465,
    secure: true, 
    auth: {
      user: '1421113780@qq.com', //发送方邮箱
      pass: 'gpypaxamoorfiada'   //发送方邮箱安全码
    }
  });

function send(to,msg,cb){
  let mailOptions = {
    from: '"Fred Foo 👻" <1421113780@qq.com>', 
    to: to, 
    subject:"1823邮箱注册验证码", //标题
    text:`欢迎注册，您的验证码是；${msg};五分钟有效`, //内容
    // html: "<h1>`1</h1>" // 
  };
  //通过请求对象的sendmail方法   参数有发送消息对象和回电函数
  transporter.sendMail(mailOptions,(err,info)=>{
    // console.log(err)  //打印信息err为null基本是对的
    // console.log(info)
    if(err){
      cb(err) //失败
    }else{
      cb(null)  //成功
    }
})
}

//send('1421113780@qq.com',123456)
module.exports={send}   //{send:send} es6中简写{send}