// 去重
let arr = [1, 1, 2, 9, 8, 8, 2, 3, 4, 5, 5, 6, 6, 7, 7]

// case1
// let newArr = new Set(arr)

// case2
// let newArr = [];
// arr.map(i => {
//   let res = newArr.indexOf(i)

//   if (res == -1) {
//     newArr.push(i)
//   }
// })

// console.log(newArr);

// case3
const newArr = arr.reduce((pre, cur) => {
  if (pre.indexOf(cur) === -1) {
    pre.push(cur)
  }
  return pre
}, [])

// 排序
// case1
// newArr = newArr.sort()
// newArr.map((v, idx) => {
//   if(v > newArr[idx]) {

//   }
// })

console.log(newArr)
