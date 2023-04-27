const testFn = () => {
  return new Promise(() => {
    setTimeout(resolve => {
      resolve("setTimeout+++")
    }, 1221)
  })
}

function* generator() {
  yield Promise.resolve("小杯")
  yield "中杯"
  yield testFn()
  yield "大杯"
  yield "超大杯"
}

const gen = generator()
//必须使用next方法调用
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// 依次输出，done代表下层再无数据
// {value: Promise {'小杯'}, done: false}
// {value: '中杯', done: false}
// {value: '大杯', done: false}
// {value: '超大杯', done: false}
// {value: 'undefined', done: true}
