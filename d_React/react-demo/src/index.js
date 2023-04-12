import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div
    onClick={e => {
      console.log("index.js")
      e.stopPropagation()
    }}
  >
    <App />
  </div>
)
