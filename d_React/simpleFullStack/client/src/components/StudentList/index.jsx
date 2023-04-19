import { useState, useEffect } from "react"
import useLoadingState from "../../hooks/useLoadingState"
import { getStudentList } from "../../request"
import ListItem from "./ListItem/index"
import useForceUpdate from "../../hooks/useForceUpdate"
import useListenScroll from "../../hooks/useListenScroll"

export default function StudentList() {
  const [studentList, setStudentList] = useState([])
  const { loading, loadingRequest } = useLoadingState()

  const fetchStudentList = () => {
    loadingRequest(async () => {
      const res = await getStudentList()
      setStudentList(() => res.data.body)
      return res
    })
  }

  useListenScroll(e => {
    console.log("listen", e)
  })

  useEffect(() => {
    fetchStudentList()
  }, [])

  const forceUpdate = useForceUpdate()
  console.log("studentList组件刷新了")

  return (
    <div style={{ height: "2000px" }}>
      {loading ? (
        <div>正在加载...</div>
      ) : (
        studentList.map((item, index) => {
          return <ListItem {...item} key={index} />
        })
      )}
      <button onClick={forceUpdate}>刷新组件</button>
    </div>
  )
}
