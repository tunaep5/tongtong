import React, { Component } from 'react'
import Character from './Character'
import Todo from './Todo'
import About from './About'

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
