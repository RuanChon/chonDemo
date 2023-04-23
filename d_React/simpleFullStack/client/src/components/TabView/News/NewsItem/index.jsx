export default function NewsItem({ news }) {
  for (let i = 0; i < 100; i++) {
    console.log(i)
  }

  return (
    <div>
      当前新闻：{news} <span>条</span>
    </div>
  )
}
