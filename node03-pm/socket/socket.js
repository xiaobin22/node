// 实时更新数据  1s请求一次（轮寻）浪费资源
// 方法：服务器主动发送
// socket 长连接  ajax 短连接

/*
1、ajax 前端发起请求 请求结束 断开连接
2、socket 长连接
       一直保持连接   前端向后端请求   后端向前端发送请求
       做到正真的前后端数据交互
    用处：
       实时刷新   给固定客户推送消息
*/ 

//socket 实现的方式： websocket  net   socket.io