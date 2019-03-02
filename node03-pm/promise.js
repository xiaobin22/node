// setTimeout() 方法回调导致代码混乱  不好掌握执行顺序和时间
function fun1(){
    setTimeout(()=>{
        console.log(1)
        setTimeout(()=>{
            console.log(2)
            setTimeout(()=>{
                console.log(3)
            },1000)
        },2000)
    },3000)
}//回调地狱
//代码混乱（代码套的太多）
// function fun2(){
//     setTimeout(()=>{
//         console.log(2)
//     },2000)
// }
// function fun3(){
//     setTimeout(()=>{
//         console.log(3)
//     },1000)
// }
fun1()
// fun2()
// fun3()


/* 
1、异步操作封装成一个函数
2、该函数返回promise 对象
3、通过链式调用解决异步问题
4、每个promise 对象有两个方法 一个是then catch
5、中断链式调用 抛出一个错误catch 捕获rejects()  throw new errer(err)
*/

/*
1、创建一个promise对象并返回 把他封装到一个函数中
2、在函数中指定异步处理
    正确执行resolve
    错误执行reject
*/