/*
 * @Author: Chon
 * @Date: 2023-02-23 14:34:08
 * @Description: 文件说明
 */
// 使用 Promise 包着 setTimeout，并使用箭头函数返回
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

var num = 1

devSleep()

async function devSleep() {
  // 需要和 await 配合使用
  await sleep(2000)
  console.log("sleep log", num)
  var num = 2
}
