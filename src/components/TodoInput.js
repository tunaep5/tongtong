import React, { Component } from 'react'
import '../styles/TodoInput.scss'

class TodoInput extends Component {
  render() {
    return (
      <form className="TodoInput">
        <input type="text" placeholder="할 일을 입력하세요" />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default TodoInput