class Observer {
  obj = {}
  on = function (name, callback) {
    if (!this.obj[name]) {
      this.obj[name] = [callback]
    } else {
      this.obj[name].push(callback)
    }
  }

  trigger = function (name) {
    const sub = this.obj[name] || []
    sub.forEach(v => v())
  }

  remove = function (name, fn) {
    const sub = this.obj[name] || []
    const index = sub.findIndex(el => fn === el)
    if (index > -1) {
      sub.splice(index, 1)
    }
  }
}

const even = new Observer()

const listener = () => {
  console.log("onClick")
}

even.on("click", listener)
even.on("click", () => {
  console.log("onHandle")
})

even.trigger("click")

even.remove("click", listener)

even.trigger("click")

// 输出：onClick onHandle onHandle
