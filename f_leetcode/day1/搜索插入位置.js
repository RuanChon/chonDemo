// 其实就是二分的延伸，最简单的暴力写法
var searchInsert1 = function (nums, target) {
  if (target < nums[0]) {
    return 0
  } else if (target > nums[nums.length - 1]) {
    return nums.length
  } else {
    for (var i = 0, len = nums.length; i < len; i++) {
      if (nums[i] == target) {
        return i
      } else if (nums[i] < target && nums[i + 1] > target) {
        return i + 1
      }
    }
  }
}

// 官方写法如下
var searchInsert2 = function (nums, target) {
  let len = nums.length
  let left = 0
  let right = len - 1
  let ans = len
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}

const arr = [1, 4, 5, 8, 99, 121, 222]

console.log("searchInsert1", searchInsert1(arr, 2)) // 1
console.log("searchInsert1", searchInsert1(arr, 2)) // 1
