import React, { Component } from "react"
import {nanoid} from 'nanoid'
import "./index.css"

export default class Header extends Component {
  handleKeyUp = (event)=>{
    const {key, target} = event

    if(key !== "Enter") return

    if(target.value.trim() === "") return

    const todoObj = {
      id: nanoid(),
      title: target.value,
      done: false
    }
    this.props.addTodo(todoObj)
    target.value = ''
  }
  
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="输入你的任务" />
      </div>
    )
  }
}
