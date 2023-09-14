// this 的指向问题，这个是看情况的
// 分为严格模式和非严格模式，严格模式输出的是undefind
// 非严格模式又要分宿主环境，浏览器下输出 window ，node环境下输出 global

// 因为 bind 是在原型里的方法，所以我们要写的专业一点
Function.prototype.myBind = function (_this, ...args) {
  const fn = this

  const fnSymbol = Symbol("fn")

  _this.__proto__[fnSymbol] = fn

  // 这里的 props 是 seconedFn 的参数
  return function (...props) {
    _this[fnSymbol](...args, ...props)
    delete _this.__proto__[fnSymbol]
  }
}

function sayHello(params1, params2, params3) {
  console.log("sayHello", params1, params2, params3, this)
}

const obj = { a: 5 }
const seconedFn = sayHello.myBind(obj, 10, 20)

// sayHello 的第三个参数
seconedFn(1)

console.log("obj", obj)
