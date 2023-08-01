let obj = {
  aaa: "2121",
  bbb: [1, 2, 3],
  ccc: 123,
  ddd: [4, 5, 6],
}

const newobj = new Proxy(obj, {
  get(target, key, value) {
    console.log("触发读取了")
    console.log("target=", target)
    console.log("key=", key)
    console.log("value=", value)
  },
  set() {
    console.log("触发设置了")
  },
  deleteProperty() {
    console.log("触发删除了")
  },
})

delete newobj.aaa
