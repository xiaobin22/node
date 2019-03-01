//爬取一个网站， 2、将网站的所有图片下载到的本地
//第三方模块 request （初始化 npm init --yes  npm install request）
const request=require('request')
const fs=require('fs')
const cheerio=require('cheerio')
request('https://www.qunar.com/', function (error, response, body) {
  console.log('error:', error); // 错误优先
  console.log('statusCode:', response && response.statusCode); // 
//   fs.writeFileSync('./quna.html',body,'utf8') //
  //获取爬取的页面信息 

 //通过正则可以选出所有 img 标签（也可以的通过第三方模块 cheerio）
 //引入 cheerio
  const $ = cheerio.load(body)
  let imgs=[]
  //目标网站图片链接地址
  $('img').each((i,e)=>{
      imgs.push($(e).attr('src'))
  })
//   console.log(imgs)

//下载数组里的图片
   for(let index=0;index<imgs.length;index++){
       if(imgs[index].indexOf('http')!==-1){
           request(imgs[index]).pipe(fs.createWriteStream(`./img/${index}.png`))
       }
   }
});
