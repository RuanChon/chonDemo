import { useState } from "react"
import { getStudentList } from "../../request/index"
import { useEffect } from "react"

export default function StudentList() {
  const [studentList, setStudentList] = useState([])

  const fetchStudentList = async () => {
    const res = await getStudentList()
    setStudentList(res)
  }

  useEffect(() => {
    fetchStudentList()
  }, [studentList])

  return <div>{studentList}</div>
}
