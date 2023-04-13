import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:1999",
})

export const getStudentList = () => {
  return axiosInstance.get("/student")
}
