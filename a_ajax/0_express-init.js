// 1.引入
const express = require('express');

// 2.创建对象
const app = express();

// 3.创建路由
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 设置响应体
  res.send("hello chon!")
})

// POST
app.post('/server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 设置响应体
  res.send("hello chon!")
})

// 此时自定义请求头还是会报错，因为服务端会返回一次请求确认是否可用，换成 all 就不会校验
app.all('/setHeader', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')

  // 设置响应体
  res.send("hello chon!")
})

// 返回 json
app.post('/json-server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');

  let body = {
    name: 'chon',
    age: 21
  }
  // 设置响应体
  let str = JSON.stringify(body)
  res.send(str)
})

// 设置延迟响应
app.get('/delay', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  setTimeout(() => {
    // 设置响应体
    res.send("hello chon!")
  }, 3000)
})

// axios 服务
app.all('/axios-server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  // 设置响应体
  res.send("hello axios!")
})

// jsonp 服务
app.all('/jsonp-server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')

  const data = {
    states: 1,
    msg: '该用户名已被注册 = ='
  }
  // 转换成字符串
  const str = JSON.stringify(data)
  // 设置响应体
  res.end(`handle(${str})`)
})


// =============================================================================
// 4.监听端口启动服务
app.listen(8800, () => {
  console.log("服务正在运行中...");
})
