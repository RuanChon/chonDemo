import axios from "axios"

export const getStudentList = () => {
  return axios.get("/api/user")
}
