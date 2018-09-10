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

  /**
   * Changes background-color of body to either green or red depending on morality.
   * @param {String} morality Either "good" or "evil". Sets a theme for the rest of the game. Used here to show either a green or red background.
   */
  onHover(morality) {
    const body = document.body
    if (morality === 'good') {
      // Change body to green
      body.style.backgroundColor = '#016936'
    } else {
      // Change body to red
      body.style.backgroundColor = '#B03060'
    }
  }

  /**
   * Used to reset the background-color of the body to white.
   * @param {String} screenName Name of the current screen being displayed to the user.
   * @todo Sort of unfinished. May have need to do other things on screen change besides change background color.
   */
  handleScreenChange(screenName) {
    this.resetBackground()
  }

  /**
   * Called when a user selects a morality from the start screen. Sets state and calls handleScreenChange().
   */
  handleChoice = choice => {
    const newScreen = 'Name Input Screen'
    this.setState({
      morality: choice,
      screen: newScreen
    })
    this.handleScreenChange(newScreen)
  }

  /**
   * Sets background-color of body to white.
   */
  resetBackground() {
    const body = document.body
    body.style.backgroundColor = 'white'
  }

  /**
   * Sets state when a user submits a name.
   */
  onNameSubmit = name => {
    this.setState({ name, screen: 'Main Game' })
  }

  /**
   * Used to tell the Game component to render the Main Menu. Will be called once a user selects a morality, and inputs a name.
   */
  setToMainMenu = () => {
    this.setState({ shouldSetMainMenu: true })
  }

  render() {
    if (this.state.shouldSetMainMenu) {
      // The Main Menu will be rendered
      // TODO: Render an actual menu. This heading is a placeholder.
      return <h1>Main Menu</h1>
    } else if (this.state.name) {
      // The user has chosen a morality, and a name
      // REnder a nameform that fades out.
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
