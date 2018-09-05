import React, { Component } from 'react'
import StartScreen from './StartScreen'

class Game extends Component {
  state = {
    morality: null
  }

  // When a user chooses "good" or "evil" on the start screen:
  // * set the state of the Game component
  handleChoice(choice) {
    this.setState({ morality: choice })
  }

  render() {
    return (
      <StartScreen
        morality={this.state.morality}
        handleChoice={choice => {
          this.handleChoice(choice)
        }}
      />
    )
  }
}

export default Game
