/*
 * @Author: Chon
 * @Date: 2023-02-25 17:19:07
 * @Description: 文件说明
 */
const server = require("express")()
const Vue = require("vue")
const renderer = require("vue-server-renderer").createRenderer()

server.get("/ssr", (req, res) => {
  const app = new Vue({
    template: `<div>hello SSR, link: ${req.url}</div>`,
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error")
      return
    }
    res.json({
      code: 200,
      msg: "success",
      data: {
        name: "Chon",
        age: 25,
        boby: html,
      },
    })
  })
})

server.listen(1998, () => {
  console.log("当前服务已启动...")
})
