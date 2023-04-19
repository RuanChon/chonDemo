import { forwardRef, useState, useCallback, useMemo, useImperativeHandle, useContext } from "react"
import useForceUpdate from "../../hooks/useForceUpdate"
import ThemeValue from "../../context/ThemeContext"

function inputTest(props, parentRef) {
  // console.log("input test", props, parentRef)
  const [count, setCount] = useState(0)
  const handleUpdate = useForceUpdate()

  const handleAdd = useCallback(() => {
    setCount(prev => ++prev)
  }, [])

  const contextValue = useContext(ThemeValue)
  console.log("contextValue", contextValue)

  // const res = useMemo(() => count + Math.random(), [count])
  // parentRef.current = res

  useImperativeHandle(parentRef, () => count + Math.random(), [count])

  return (
    <div>
      {/* 获取真实DOM */}
      {/* <input type="text" ref={parentRef} /> */}
      {/* 缓存渲染 */}
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleUpdate}>强制刷新</button>
    </div>
  )
}

export default forwardRef(inputTest)
