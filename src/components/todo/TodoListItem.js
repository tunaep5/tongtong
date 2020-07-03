import React, { Component } from 'react'
import cn from 'classnames'
import './styles/TodoListItem.scss'

class TodoListItem extends Component {
  render() {
    const { todo } = this.props

    return (
      <li className="TodoListItem">
        <div className={cn('todo-item', {checked: todo.checked})}>
          <div className="text">{todo.text}</div>
        </div>
        <button className="remove">X</button>
      </li>
    )
  }
}

export default TodoListItem