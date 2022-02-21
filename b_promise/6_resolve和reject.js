// 
// 单独声明一个 resolve 对象
// 如果传入参数为非 promise 类型，则返回的就是成功的 promise 对象
// 如果传入参数为 promise 类型，则返回的结果根据 promise 返回的结果决定

// let p1 = Promise.resolve(12)

// let p1 = Promise.resolve(new Promise((resolve, reject) => {
//   reject('22')
// }))
// console.log(p1);


// 
// 单独声明一个 reject 对象
// 不管传入什么，返回的都是失败的 promise 对象

// let p2 = Promise.reject('22')

let p2 = Promise.reject(new Promise((resolve, reject) => {
  resolve('22')
}))
console.log(p2);