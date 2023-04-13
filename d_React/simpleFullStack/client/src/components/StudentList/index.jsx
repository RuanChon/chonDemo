import { useState, useEffect } from "react"
import useLoadingState from "../../hooks/useLoadingState"
import { getStudentList } from "../../request"
import ListItem from "./ListItem"

export default function StudentList() {
  const [studentList, setStudentList] = useState([])
  const { loading, loadingRequest } = useLoadingState()

  const fetchStudentList = () => {
    loadingRequest(async () => {
      const res = await getStudentList()
      console.log("res.data.boby", res.data.body)
      setStudentList(() => res.data.body)
      return res
    })
  }

  useEffect(() => {
    fetchStudentList()
  }, [])

  return (
    <div>
      {loading ? (
        <div>正在加载...</div>
      ) : (
        studentList.forEach(item => {
          console.log("item", item)
          return <ListItem {...item} />
        })
      )}
    </div>
  )
}
