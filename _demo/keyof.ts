// keyof 遍历对象键值

interface types {
  name: string
  age: number
}

type newtypes<T extends object> = {
  [type in keyof T]?: T[type]
}

type be = newtypes<types>
