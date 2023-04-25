import { useCallback } from "react"
import useState from "../../hooks/useMyState"

export default function Count() {
  const [count, setCount] = useState(0)
  const [news, setNews] = useState("chon ")

  const changeAdd = useCallback(() => {
    console.log("sadads")
    setCount(prev => prev + 1)
  }, [])

  const changeNews = useCallback(() => {
    console.log("sadads")
    setNews("ruan")
  }, [])

  return (
    <div>
      count:{count}
      <button onClick={changeAdd}>++</button>
      news:{news}
      <button onClick={changeNews}>change</button>
    </div>
  )
}
