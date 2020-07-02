import React, { Component } from 'react'
import './styles/TodoListItem.scss'

class TodoListItem extends Component {
  render() {
    return (
      <li className="TodoListItem">
        <div className="todo-item">
          <input type="checkbox" className="checkbox" />
          <div className="text">통통 개발하기!</div>
        </div>
        <button className="remove">X</button>
      </li>
    )
  }
}

export default TodoListItem