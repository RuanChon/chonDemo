// 查找一个对象中是否存在某个属性最好的两种方式

function yn(obj, key) {
  // return Object.hasOwnProperty.call(obj, key)
  return key in obj
}

const v = 1
const res = yn({ a: 1, b: 2 }, v)

console.log(res)
