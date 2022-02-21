const fs = require('fs');
const util = require('util');

// const p = new Promise((resolve, reject) => {
//   fs.readFile('../read.txt', (err, data) => {
//     if (err) reject(err)
//     resolve(data)
//   })
// })

// p.then(resolve => {
//   console.log(resolve.toString());
// }, reject => {
//   console.log(reject);
// })


// 利用 util.promisify() 可对 err 回调优先的 promise 简写
let p = util.promisify(fs.readFile)

p('../read.txt').then(resolve => {
  console.log(resolve.toString());
}, reject => {
  console.log(reject);
})
