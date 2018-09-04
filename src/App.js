import React, { Component } from 'react'
import MainMenu from './Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      population: {
        alive: 100,
        dead: 0
      }
    }
  }

  render() {
    return <MainMenu population={this.state.population} />
  }
}

export default App
