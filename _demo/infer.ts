// infer 关键字提取数组元素
type Arr = ["a", "b", "c"]

// 如果泛型是数组类型，那么就使用 infer 取第一个
type First<T extends any[]> = T extends [infer First, ...any[]] ? First : []

type test1 = First<Arr>

// -------------------------------------
// infer 关键字实现递归
// 如果泛型是数组类型，那么就使用 infer 取第一个, 重新递归拼接
type Rever<T extends any[]> = T extends [infer First, ...infer rest] ? [...Rever<rest>, First] : T

type test2 = Rever<Arr>
