const arr1 = new Set([1, 2, 3, "chon"])
const arr2 = new Set([2, 3, "ruan", "chon", 4])

const arr = new Set([...arr1].filter(item => arr2.has(item)))

console.log("arr", arr)
