/*
 * @Author: Chon
 * @Date: 2023-02-13 16:17:50
 * @Description: 文件说明
 */
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('asnyc1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('setTimeOut')
}, 0)
async1()
new Promise(function (reslove) {
  console.log('promise1')
  reslove()
}).then(function () {
  console.log('promise2')
})
console.log('script end')
