// Promise
class Promise {
  // 构造函数
  constructor(executor) {
    // 保存实例对象 this 的值
    const that = this

    // 添加属性
    that.PromiseState = 'pending'
    that.PromiseResult = null
    that.callbacks = []

    // resolve
    function resolve(val) {
      if (that.PromiseState === 'pending') {
        // 修改状态（promiseState）
        that.PromiseState = 'success'
        // 设置结果（promiseResult）
        that.PromiseResult = val
        // 异步调用
        setTimeout(() => {
          that.callbacks.map(item => {
            item.onSuccess(val)
          })
        })
      }
    }

    // reject
    function reject(val) {
      if (that.PromiseState === 'pending') {
        // 修改状态（promiseState）
        that.PromiseState = 'rejected'
        // 设置结果（promiseResult）
        that.PromiseResult = val
        // 异步调用
        setTimeout(() => {
          that.callbacks.map(item => {
            item.onError(val)
          })
        })
      }
    }

    // 捕获 throw 抛出异常
    try {
      // 同步调用 执行器函数
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  // 添加 then 方法
  then(onSuccess, onError) {
    const that = this
    // 判断回调函数参数
    if (typeof onSuccess !== 'function') {
      onSuccess = res => res
    }
    if (typeof onError !== 'function') {
      onError = error => {
        throw error
      }
    }
    // 返回
    return new Promise((resolve, reject) => {
      // 封装函数
      function callback(type) {
        try {
          let result = type(that.PromiseResult)
          if (result instanceof Promise) {
            // 如果是 promise 类型
            result.then(res => {
              resolve(res)
            }, rej => {
              reject(rej)
            })
          } else {
            // 如果不是 promise 类型，结果的对象状态为成功
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }

      // 调用回调
      if (this.PromiseState === 'success') {
        // 设置为异步
        setTimeout(() => {
          callback(onSuccess)
        })
      }

      if (this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onError)
        })
      }

      // 判断异步 处理 pending 状态
      if (this.PromiseState === 'pending') {
        // 保存回调
        this.callbacks.push({
          onSuccess: () => {
            callback(onSuccess)
          },
          onError: () => {
            callback(onError)
          }
        })
      }
    })
  }

  // 添加 catch 方法
  catch(onError) {
    return this.then(undefined, onError)
  }

  // 添加 resolve 方法
  static resolve(val) {
    return new Promise((resolve, reject) => {
      if (val instanceof Promise) {
        // 如果是 promise 类型
        val.then(res => {
          resolve(res)
        }, rej => {
          reject(rej)
        })
      } else {
        resolve(val)
      }
    })
  }

  // 添加 reject 方法
  static reject(val) {
    return new Promise((resolve, reject) => {
      reject(val)
    })
  }

  // 添加 all 方法
  static all(arr) {
    return new Promise((resolve, reject) => {
      let count = 0
      let resArr = []
      for (let i = 0; i < arr.length; i++) {
        arr[i].then(res => {
          count++
          resArr[i] = res
          // 将当前 promise 对象成功的结果存到数组
          if (count === arr.length) resolve(resArr)
        }, rej => {
          reject(rej)
        })
      }
    })
  }

  // 添加 race 方法
  static race(arr) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].then(res => {
          resolve(resArr)
        }, rej => {
          reject(rej)
        })
      }
    })
  }
}
