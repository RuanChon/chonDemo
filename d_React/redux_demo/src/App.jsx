import "./App.css"
import { store } from "./store"

function App() {
  let res = store.getState()
  console.log(res)
  return (
    <>
      <div>
        <button
          onClick={() => {
            store.dispatch({ type: "async_increment" })
          }}
        >
          INCREMENT
        </button>
        <p>{res.count}</p>
        <button
          onClick={() => {
            store.dispatch({ type: "DECREMENT" })
          }}
        >
          DECREMENT
        </button>
      </div>
    </>
  )
}

export default App
