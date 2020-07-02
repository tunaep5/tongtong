import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
import '../styles/TodoList.scss'

class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    )
  }
}

export default TodoList