import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  state = {
    move: false,
  }

  handleCheckedAll = event => {
    // console.log('event', event.target.checked)
    this.props.checkedAll(event.target.checked)
  }

  handleMouse = flag => {
    return () => {
      this.setState({ move: flag })
    }
  }

  delDoneTodo = () => {
    this.props.delDoneTodo()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length

    return (
      <div
        className="todo-footer"
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={total > 0 && doneCount === total}
            onChange={this.handleCheckedAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button
          onClick={this.delDoneTodo}
          className="btn btn-danger"
          style={{ display: this.state.move ? 'block' : 'none' }}
        >
          清除已完成
        </button>
      </div>
    )
  }
}
