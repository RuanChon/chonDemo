import StudentList from "./components/StudentList"
import FowardRef from "./components/FowardRef"
import { useRef, useState, useCallback } from "react"
import ThemeValue from "./context/ThemeContext"
import TabView from "./components/TabView"
import TransitonCase from "./components/TransitionCase"
import Count from "./components/Count"

function App() {
  const testRef = useRef(null)
  const [themeVal, setTheme] = useState("blue")

  const handleInput = useCallback(() => {
    console.log("testRef", testRef)
    // testRef.current.focus()
  }, [])

  return (
    <div>
      <ThemeValue.Provider value={themeVal}>
        {/* <StudentList /> */}
        {/* <FowardRef a={2} ref={testRef} />
        <button onClick={handleInput}>focuss</button> */}
        {/* <TabView /> */}
        {/* <TransitonCase /> */}
        <Count />
      </ThemeValue.Provider>
    </div>
  )
}

export default App
