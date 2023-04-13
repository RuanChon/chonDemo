import { useState } from "react"
import { useEffect } from "react"
import useLoadingState from "../../hooks/useLoadingState"

export default function StudentList() {
  const [studentList, setStudentList] = useState([])
  const { loading, loadingFn } = useLoadingState

  const fetchStudentList = async () => {
    // loadingFn(get())
    // const res = await fetch("http://localhost:1999/student")
    // console.log(res)
    // setStudentList(res)
  }

  useEffect(() => {
    fetchStudentList()
  }, [studentList])

  return <div>{studentList}</div>
}
