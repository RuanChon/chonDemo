// 二分查找，适用于递增数组查找，通过取中位数判断大小
// 内部利用了闭包控制left right 下标
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

const arr = [1, 4, 5, 8, 99, 121, 222]
console.log(search(arr, 5)) // 2
console.log(search(arr, 7)) // -1
