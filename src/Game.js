import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import StartScreen from './StartScreen'
import MoralityButtonGroup from './MoralityButtonGroup'
import NameForm from './NameForm'

class Game extends Component {
  state = {
    morality: null,
    screen: 'Start Screen',
    name: null,
    shouldSetMainMenu: false
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
  handleScreenChange(screenName) {
    this.resetBackground()
  }

  // When a user chooses "good" or "evil" on the start screen:
  // * set the state of the Game component
  handleChoice = choice => {
    const newScreen = 'Name Input Screen'
    this.setState({
      morality: choice,
      screen: newScreen
    })
    this.handleScreenChange(newScreen)
  }

  // When the user hovers off either button, the body background color is reset to white
  resetBackground() {
    const body = document.body
    body.style.backgroundColor = 'white'
  }

  // For NameForm name submit input
  onNameSubmit = name => {
    this.setState({ name, screen: 'Main Game' })
  }

  // ! This is broken. You were trying to figure out how to get this, so that the Game component rerenders to the Main Menu
  setToMainMenu = () => {
    this.setState({ shouldSetMainMenu: true })
  }

  render() {
    if (this.state.shouldSetMainMenu) {
      return <h1>Main Menu</h1>
    } else if (this.state.name) {
      // The user has chosen a morality, and a name
      // Fade out the name input
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
                <NameForm
                  gameState={this.state}
                  onNameSubmit={this.onNameSubmit}
                  morality={this.state.morality}
                  nameValue={this.state.name}
                  fadeOut={true}
                  setToMainMenu={this.setToMainMenu}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )
    } else if (this.state.screen === 'Name Input Screen') {
      // The user has chosen a morality
      // Fade out the button group, and show a name input
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
                <NameForm
                  gameState={this.state}
                  onNameSubmit={this.onNameSubmit}
                  morality={this.state.morality}
                  nameValue={null}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )
    } else {
      // The user has not chosen a morality
      // Show the morality button group
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
