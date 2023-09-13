import './App.css'
import { store } from './store'
import { useCallback } from 'react'

function App() {
  let res = store.getState()
  console.log('当前 store：', res)

  const handleClick = useCallback(() => {
    store.dispatch({ type: 'SET_USER_INFO', time: '112231231231' })
  }, [])

  return (
    <>
      <div>
        <button
          onClick={() => {
            store.dispatch({ type: 'async_increment' })
          }}
        >
          INCREMENT
        </button>
        <p>{res.count}</p>
        <button
          onClick={() => {
            store.dispatch({ type: 'DECREMENT' })
          }}
        >
          DECREMENT
        </button>
      </div>

      <div>
        <span>
          当前姓名：{store.getState().userInfo.name}, 年龄：{store.getState().userInfo.age}
        </span>
        <button onClick={handleClick}>click me</button>
      </div>
    </>
  )
}

export default App
