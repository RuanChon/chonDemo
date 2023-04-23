import { useCallback, useState, useTransition } from "react"

export default function TransitonCase() {
  const [inputValue, setInputValue] = useState("")
  const [recoList, setRecoList] = useState([])
  const [isPending, startTransition] = useTransition()

  const changeInput = useCallback(e => {
    setInputValue(e.target.value)

    // 此函数内的任务优先级被降到最低，不会阻塞代码
    startTransition(() => {
      let _recoList = []

      for (let i = 0; i < 10000; i++) {
        _recoList.push(`${e.target.value}_${i}_chon`)
      }

      setRecoList(_recoList)
    })
  }, [])

  return (
    <div>
      <span>input</span>
      <input type="text" value={inputValue} onChange={changeInput} />
      <div>{!isPending ? recoList.map(item => <div key={item}>{item}</div>) : "正在加载"}</div>
    </div>
  )
}
