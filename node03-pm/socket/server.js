const WebSocket=require('ws')  //第三方插件
const ws=new WebSocket.Server({port:8080},()=>{
    console.log('scoket 服务器开启，德玛西亚')
})
//开启一个scoket 服务器
let clients={}
let clientName=0

ws.on('connection',(client)=>{ //connection 连接

    // client 连接上的客户对象
    console.log('客户端链接')
    client.send('欢迎光临')  //往客户端发送消息

    // client.name=++clientName
    // clients[client.name]=client
// 接收客户端发来的消息
    client.on('message',(msg)=>{
        // broadcast(client,msg)
        console.log(msg)
    })

    // client.on('close',()=>{
    //     delete clients[client.name]
    //     console.log(client.name+'离开了~')
    // })
})

// function broadcast(client,msg){
//     for(var key in clients){
//         clients[key].send(client.name+'说'+msg)
//     }
// }