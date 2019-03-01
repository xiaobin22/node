//下载一张图片
//服务器之间的请求
const https=require('https')
const fs=require('fs')
let url='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=54389378,1968748236&fm=26&gp=0.jpg'
https.get(url,(res)=>{
    res.setEncoding('binary')//二进制流

    let rawData=''
    res.on('data',(chunk)=>{
        rawData+=chunk
    })
    res.on('end',()=>{
        fs.writeFileSync('./baidu.png',rawData,'binary')
        // fs.writeFileSync('./baidu.html',rawData,'utf8')
    })
}).on('error',(e)=>{
    console.log(`Got error:${e.message}`)
})