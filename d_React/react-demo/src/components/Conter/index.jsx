import { useState } from "react"

export default function Conter() {
  const [count, setCount] = useState([1, 2, 3])

  const handleClick = () => {
    const arr = count.splice(1)
    setCount(arr)
  }

  return (
    <div>
      <span onClick={handleClick}>conter.jsx {count}</span>
    </div>
  )
}
