import { legacy_createStore, applyMiddleware } from "redux"
import { reducer } from "./reducers"

// 简版 redux-thunk 的源码
const thunkMiddleware = config => store => next => action => {
  // config 是 thunkMiddleware 的配置对象 key 值
  // store 是 redux 的 store 对象，但是只有 getState 和 dispatch 方法
  // next 是 redux 的 dispatch 方法，洋葱模型
  // action 是 dispatch 的参数，action 对象

  // 类型筛选，只有传过来的 action.type 和 thunkMiddleware 的配置对象 key 值相等才会执行
  const matchAsyncRender = config[action.type]
  if (matchAsyncRender) matchAsyncRender(store.dispatch)

  // 在上面处理好了异步渲染的逻辑，然后再执行 dispatch
  next(action)
}

// thunk 的使用
export const store = legacy_createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware({
      async_increment: dispatch => {
        setTimeout(() => {
          console.log("数据dispatch来了", dispatch)
          dispatch({ type: "INCREMENT" })
        }, 2000)
      },
    })
  )
)
