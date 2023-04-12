import Conter from "./components/Conter"

function App() {
  return (
    <div
      style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      onClick={() => {
        console.log("app.js")
      }}
    >
      <Conter />
    </div>
  )
}

export default App
