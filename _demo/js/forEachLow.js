const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.forEach((item, index) => {
  console.log(item)

  if (item === 3) {
    // 报错终止，不优雅
    // throw new Error('error')

    // 控制长度
    arr.length = index
  }
})
