const Koa = require("koa")

const app = new Koa()

app.listen(1999, () => {
  console.log("1999 working...")
})

app.use(ctx => {
  if (ctx.url === "/student") {
    console.log("student")
    const responseJson = require("./db/student.json")
    ctx.response.body = {
      status: 200,
      message: "ok",
      body: responseJson,
    }
  }
})
