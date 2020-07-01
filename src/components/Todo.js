import React, { Component } from 'react'
import TodoInput from './TodoInput'

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <TodoInput />
      </div>
    )
  }
}

export default Todo
