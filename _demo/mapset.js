// Map 结构 转 键值对

const { nextTick } = require("vue/types/umd")

// const arr = [['a', '1'], ['b', '2']]
// let myMap = new Map(arr)

let myMap = new Map()

myMap.set("a", 1)

console.log(myMap) // Map(1) { 'a' => 1 }
console.log(myMap.get("a")) // 1

// ---------------------
// Set 结构 允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

const mySet = new Set()

mySet.add(1) // Set [ 1 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add("some text") // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 }
mySet.add(o)

console.log(mySet)

const fn = async () => {
  app.push("push")

  await nextTick()
  box.value.scrollTop = 9999
}
