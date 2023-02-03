/*
 * @Author: Chon
 * @Date: 2023-02-03 16:45:52
 * @Description: 文件说明
 */
const express = require("express")

const app = express()

app.get("/user", (req, res) => {
  res.json({
    code: 200,
    msg: "success",
    data: {
      name: "Chon",
      age: 25,
    },
  })
})

app.listen(1998, () => {
  console.log("Example app listening on port 1998!")
})
