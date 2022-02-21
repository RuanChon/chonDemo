import React, { Component } from "react"
import "./index.css"

export default class Item extends Component {
  render() {
    const { title, done } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{title}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          delete
        </button>
      </li>
    )
  }
}
