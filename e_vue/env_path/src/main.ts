import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

function pingName(...args: any[]) {
  console.log("pingName", args)
}

function lineName(...args: any[]) {
  console.log("lineName", args)
  const dereaction = args[2]
  dereaction.value = (name: string) => {
    console.log("deleteName", name)
  }
}
class Person {
  @pingName
  readName(name: string) {}

  @lineName
  deleteName(name: string) {}
}

new Person().readName("hello")
new Person().deleteName("world")

createApp(App).mount("#app")
