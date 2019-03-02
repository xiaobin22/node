
//promise 实现链式调用


// function fun(){
//     return new Promise((resolve,rejects)=>{
//         setTimeout(()=>{
//             console.log(1)
//             if(false){
//                 resolve('hehe')
//                 // 成功执行 reslove 可以触发外部then方法
//             }else{
//                 rejects('haha')
//                 // 失败执行 reslove 可以触发外部catch方法
//             }
//         },3000)
//     })
// }
// fun()
// .then((data)=>{
//     // 成功执行
//     console.log(data)
// })
// .catch((data)=>{
//     // 失败执行
//     console.log(data)
// })

function fun1(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            console.log(1)
            if(true){
                resolve('ok1')
            }else{
                rejects('err1')
            }
        },1000)
    })
}

function fun2(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            console.log(2)
            if(true){
                resolve('ok2')
            }else{
                rejects('err2')
            }
        },500)
    })
}  

function fun3(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            console.log(3)
            if(true){
                resolve('ok3')
            }else{
                rejects('err3')
            }
        },200)
    })
}

fun1()
.then((data)=>{
    console.log(data)
    return fun2() 
})
.then((data)=>{
    console.log(data)
    return fun3() 
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})