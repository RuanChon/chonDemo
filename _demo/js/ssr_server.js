/*
 * @Author: Chon
 * @Date: 2023-02-25 17:19:07
 * @Description: 文件说明
 */
const server = require("express")()
const fs = require("fs")
const Vue = require("vue")
const vueRenderer = require("vue-server-renderer")

server.get("/ssr", (req, res) => {
  const app = new Vue({
    template: `<div>hello SSR, link: ${req.url}</div>`,
  })

  const ssrTemplate = fs.readFileSync("./ssr_template.html", "utf-8")

  const renderer = vueRenderer.createRenderer({
    ssrTemplate,
  })

  // 自定义上下文
  const context = {
    title: "vue ssr",
    metes: `
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
    `,
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error")
      return
    }
    console.log(context.title)
    res.end(html)
  })
})

server.listen(1998, () => {
  console.log("当前服务已启动...")
})
