// TS 的 Decorator 装饰器语法糖

function readName(...args: any[]): void {
  console.log("readName", args)
}

class Person {
  @readName
  sayName(name: string): void {}
}

new Person().sayName("hello")
