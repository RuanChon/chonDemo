import ws from "ws"

// 创建一个 WebSocket 服务，监听 8080 端口
const wss = new ws.Server({ port: 8080 }, () => {
  console.log("WebSocket 服务已启动")
})

// 枚举 WebSocket 的状态类型
const wsState = {
  HEART: 1, // 心跳
  MESSAGE: 2, // 消息
}

// 监听客户端的连接请求
wss.on("connection", socket => {
  console.log("客户端已连接")

  // 监听客户端的消息
  socket.on("message", message => {
    console.log("接收到客户端的消息:", message.toString())
    // 单发，点对点发送消息
    // socket.send("你好，客户端")
    // 广播消息，wss.clients 是一个 Set 集合，存放所有连接的客户端数组
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify({ type: wsState.MESSAGE, data: message.toString() }))
      }
    })
  })

  // 心跳机制 进行保活
  const heartBeat = () => {
    if (socket.readyState !== ws.OPEN) {
      clearInterval(interval)
      return
    }
    socket.send(
      JSON.stringify({
        type: wsState.HEART,
        data: "heart ping",
      })
    )
  }
  const interval = setInterval(heartBeat, 5000)

  // 监听客户端的关闭
  socket.on("close", () => {
    console.log("客户端已断开连接")
  })
})
