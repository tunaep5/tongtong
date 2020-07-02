import React, { Component } from 'react'
class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        {this.props.children}
      </div>
    )
  }
}

export default Todo
