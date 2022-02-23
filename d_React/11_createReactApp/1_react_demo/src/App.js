// 创建组件
import { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', title: '吃饭', done: false },
      { id: '002', title: '睡觉', done: true },
      { id: '003', title: '敲代码', done: true },
      { id: '004', title: '健身', done: false },
    ],
  }

  addTodo = todoObj => {
    console.log('retrne', todoObj)
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos,
    })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }

  checkedAll = done => {
    console.log('done', done)
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      return { ...todo, done }
    })

    this.setState({ todos: newTodos })
  }

  delDoneTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.done === false
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkedAll={this.checkedAll} delDoneTodo={this.delDoneTodo} />
        </div>
      </div>
    )
  }
}
