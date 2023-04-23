import Home from "./Home"
import News from "./News"
import About from "./About"
import { useMemo, useState, useCallback, useTransition } from "react"

export default function TabView() {
  const [currentTab, setCurrentTab] = useState("home")

  const tabs = useMemo(() => {
    return [
      {
        key: "home",
        lable: "首页",
        component: <Home />,
      },
      {
        key: "news",
        lable: "新闻",
        component: <News />,
      },
      {
        key: "about",
        lable: "关于",
        component: <About />,
      },
    ]
  }, [])

  const parsentComponent = useMemo(() => {
    return tabs.find(item => item.key === currentTab).component
  }, [currentTab, tabs])

  const [pending, startTransition] = useTransition()

  const checkTab = useCallback(tabVal => {
    // 使用 starTransition 函数返回需要设置的操作，使其变成一个 transition 工作
    startTransition(() => setCurrentTab(tabVal))
  }, [])

  return (
    <div>
      {tabs.map(item => {
        return (
          <button onClick={() => checkTab(item.key)} key={item.key}>
            {item.lable}
          </button>
        )
      })}
      <div>{parsentComponent}</div>
    </div>
  )
}
