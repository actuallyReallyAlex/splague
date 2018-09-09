import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import StartScreen from './StartScreen'
import MoralityButtonGroup from './MoralityButtonGroup'
import FirstScreenForm from './FirstScreenForm'

class Game extends Component {
  state = {
    morality: null,
    screen: 'Start Screen'
  }

  // Changes color of body when user hovers over a morality button option
  onHover(morality) {
    const body = document.body
    if (morality === 'good') {
      body.style.backgroundColor = '#016936'
    } else {
      body.style.backgroundColor = '#B03060'
    }
  }

  // Does something when the screen has been changed.
  handleScreenChange(screen) {
    this.resetBackground()

  }

  // When a user chooses "good" or "evil" on the start screen:
  // * set the state of the Game component
  handleChoice(choice) {
    const nextScreen = 'First Screen'
    this.setState({
      morality: choice,
      screen: nextScreen
    })
    this.handleScreenChange(nextScreen)
  }

  // When the user hovers off either button, the body background color is reset to white
  resetBackground() {
    const body = document.body
    body.style.backgroundColor = 'white'
  }

  render() {
    if (this.state.screen === 'First Screen') {
      return (
        <Container textAlign="center" className="full-height">
          <Grid
            inverted
            columns={1}
            divided
            verticalAlign="middle"
            className="full-height"
          >
            <Grid.Row>
              <Grid.Column>
                <MoralityButtonGroup
                  onHover={this.onHover}
                  resetBackground={this.resetBackground}
                  handleChoice={this.handleChoice}
                  animated="fadeOutLeft delay-1s"
                />
                <FirstScreenForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )
    } else {
      return (
        <StartScreen
          morality={this.state.morality}
          handleChoice={choice => {
            this.handleChoice(choice)
          }}
          handleScreenChange={screen => {
            this.handleScreenChange(screen)
          }}
          resetBackground={() => {
            this.resetBackground()
          }}
          onHover={this.onHover}
        />
      )
    }
  }
}

export default Game
