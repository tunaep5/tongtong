import React, { Component } from 'react'
import cn from 'classnames'
import './styles/TodoListItem.scss'

class TodoListItem extends Component {
  render() {
    return (
      <li className="TodoListItem">
        <div className={cn('todo-item', {checked: this.props.todo.checked})}>
          <div className="text">{this.props.todo.text}</div>
        </div>
        <button className="remove">X</button>
      </li>
    )
  }
}

export default TodoListItem