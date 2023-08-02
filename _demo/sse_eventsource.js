const eventSource = new EventSource("http://localhost:3000/sse", {})

// 客户端主动关闭连接
eventSource.close()

// 链接成功钩子
eventSource.onopen = function (event) {
  console.log("链接成功", event)
}

// 链接失败钩子
eventSource.onerror = function (event) {
  console.log("发生错误", event)
}

// 接收到消息钩子
eventSource.onmessage = function (event) {
  console.log("接收到消息", event)
}
