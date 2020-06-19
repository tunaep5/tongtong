import React, { Component } from 'react'
import Character from './components/Character'
import Todo from './components/Todo'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Character />
        <Todo />
        <About />
      </div>
    )
  }
}

export default App
