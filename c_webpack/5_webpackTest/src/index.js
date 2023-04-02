import "./index.less"

function component() {
  const element = document.createElement("div")

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ")
  return element
}

document.body.appendChild(component())

document.getElementById("btn").onclick = function () {
  import(/* webpackChunkName: 'Math' */ "./web.js").then(res => {
    console.log(res.default(1, 2))
  })
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW 注册成功: ", registration)
      })
      .catch(registrationError => {
        console.log("SW 注册失败: ", registrationError)
      })
  })
}
