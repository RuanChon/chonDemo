import { useState } from "react"

export default function useForceUpdate() {
  // 下划线代表第一个参数不要了
  // 初始化的空对象是一个引用值，后续每次赋值都是创建一个新的引用地址
  const [_, setValue] = useState({})
  const forceUpdate = () => {
    setValue({})
  }

  return forceUpdate
}
