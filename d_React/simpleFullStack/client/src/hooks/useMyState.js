const currenStateArr = []
let callIndex // 代表当前第几个hook, react源码里用的环形链表

export default function useMyState(initState) {
  if (callIndex === undefined) {
    callIndex = 0
  }

  if (!currenStateArr[callIndex]) {
    currenStateArr.push({
      isFirst: false,
      state: typeof initState === "function" ? initState() : initState,
    })
  }

  const dispatchState = (() => {
    let _callIndex = callIndex
    return newState => {
      callIndex = 0
      const prevState = currenStateArr[_callIndex].state
      currenStateArr[_callIndex].state = typeof newState === "function" ? newState(prevState) : newState
      window.render()
    }
  })()

  const matchState = currenStateArr[callIndex++]
  return [matchState.state, dispatchState]
}
