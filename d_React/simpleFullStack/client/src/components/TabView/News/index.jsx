import { useState } from "react"
import NewsItem from "./NewsItem"

const arr = []

for (let i = 0; i < 500; i++) {
  arr.push(i)
}

export default function News() {
  const [news] = useState(arr)
  return (
    <div>
      {news.map(item => (
        <NewsItem key={item} news={item} />
      ))}
    </div>
  )
}
