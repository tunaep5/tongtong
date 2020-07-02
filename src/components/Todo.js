import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

export default Todo
