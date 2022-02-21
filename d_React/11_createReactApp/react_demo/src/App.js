// 创建组件
import { Component } from "react"
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"
import "./App.css"

export default class App extends Component {
  state = {
    todos: [
      { id: "001", title: "吃饭", done: false },
      { id: "002", title: "睡觉", done: true },
      { id: "003", title: "敲代码", done: true },
      { id: "004", title: "健身", done: false },
    ],
  }

  addTodo = (todoObj) => {
    console.log('retrne', todoObj);
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
