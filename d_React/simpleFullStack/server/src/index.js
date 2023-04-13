const Koa = require("koa")

const app = new Koa()

app.listen(1996, () => {
  console.log("1996 port working...")
})

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

app.use(async ctx => {
  if (ctx.url === "/user") {
    console.log("user")
    const responseJson = require("./db/student.json")
    await sleep(2000)
    ctx.response.body = {
      status: 200,
      message: "ok",
      body: responseJson,
    }
  }
})
