// 静态方法和实例方法的区别 - 静态方法无法被 new 实例化

// Promise.all 接收的不能叫数组，而是一个可迭代对象，都变成 fullfilled 状态才返回结果
// 什么是可迭代对象，要看对象的原型里有没有 Symbol 标识符，一般对象是没有的，所以需要我们手动添加迭代器

// 怎么写 Promise.all ? 首先分析因为可以 .then 所以返回的是一个 Promise
// 返回结果又是一个数组，并且有执行顺序和执行时机要求

Promise.myAll = function (iterableObj) {
  return new Promise((resolve, reject) => {
    const result = []
    let count = 0
    let finished = 0

    // 这里面进行对象迭代
    for (let item of iterableObj) {
      // 因为闭包所以不会跟着 count 变化，主要用于记录当前下标
      let workInProgressIndex = count
      if (item instanceof Promise) {
        item
          .then(data => {
            finished += 1
            // 必须判断所有的 promise 是不是都走完了再 resolve
            result[workInProgressIndex] = data
            if (finished === count) {
              // 代表所有的 promise 已经进入已决
              resolve(result)
            }
          })
          .catch(reject)
      } else {
        // 不是 promise
      }
      count += 1
    }
  })
}

const pro1 = Promise.resolve("hello")
const pro2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("chon")
  }, 2000)
})

Promise.myAll([pro2, pro1]).then(res => {
  console.log("res", res)
})
