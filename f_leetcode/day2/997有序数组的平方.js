// 双指针 有序数组的平方
// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]

// 暴力懒人方法，先循环乘平方，然后再排序
var sortedSquares1 = function (nums) {
  nums = nums.map(v => (v = v * v)).sort((max, min) => max - min)
  return nums
}

// 原生 js 写法
const sortedSquares2 = function (nums) {
  let res = []
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i])
    const right = Math.abs(nums[j])
    if (right > left) {
      // push element to the front of the array
      res.unshift(right * right)
      j--
    } else {
      res.unshift(left * left)
      i++
    }
  }
  return res
}

const nums = [-4, -1, 0, 3, 10]
console.log(sortedSquares1(nums))
console.log(sortedSquares2(nums))
