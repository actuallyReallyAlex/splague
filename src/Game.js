import { Component } from 'react'
import { findNextScreen, renderView } from './UtilityFunctions'

class Game extends Component {
  state = {
    gameUI: {
      currentScreen: 'Start Screen',
      nextScreen: 'Name Form Screen',
      shouldFadeOut: false
    },
    player: {
      className: null,
      classType: null,
      morality: null,
      name: ''
    }
  }

  /**
   * Changes background-color of body to either green or red depending on morality.
   * @param {String} morality Either "good" or "evil". Sets a theme for the rest of the game. Used here to show either a green or red background.
   */
  handleHover = morality => {
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
   * Responsibile for switching which screen is displayed to the user.
   * @param {String} currentScreen Name of the current screen being displayed to the user.
   * @param {Boolean} reset Used to reset the background-color of the body to white if 'reset' is true. Default = false.
   */
  handleScreenChange = (screenToFadeOut, reset = false) => {
    // Will reset the background-color of the body to white if 'reset' is true.
    if (reset) {
      this.resetBackground()
    }

    // Sets shouldFadeOut to true. Tells render() to fade out the current screen.
    let newGameUI = {
      currentScreen: this.state.gameUI.currentScreen,
      nextScreen: this.state.gameUI.nextScreen,
      shouldFadeOut: true
    }

    // Update GameUI state
    this.setState({ gameUI: newGameUI })

    setTimeout(() => {
      if (this.state.gameUI.currentScreen === 'Main Game') {
        return
      } else {
        const screenToFadeIn = findNextScreen(screenToFadeOut)
        const newNextScreen = findNextScreen(screenToFadeIn)

        let newGameUI = {
          currentScreen: screenToFadeIn,
          nextScreen: newNextScreen,
          shouldFadeOut: false
        }

        // Update GameUI state
        this.setState({ gameUI: newGameUI })
      }
    }, 2000)
  }

  /**
   * Called when a user selects a morality from the start screen. Sets state and calls handleScreenChange().
   */
  handleMoralityChoice = choice => {
    // Create a temporary object, spreading in the current player state
    let { player } = this.state
    // Update the morality within this temporary object
    player.morality = choice
    // Replace the current state with the temporary object
    this.setState({ player })

    this.handleScreenChange(this.state.gameUI.currentScreen, true)
  }

  /**
   * Sets background-color of body to white.
   */
  resetBackground = color => {
    const body = document.body
    color
      ? ((body.style.backgroundColor = color), (body.style.color = 'white'))
      : (body.style.backgroundColor = 'white')
  }

  /**
   * Sets state when a user submits a name.
   */
  handleNameSubmit = name => {
    let { player } = this.state
    player.name = name
    this.setState({ player })

    this.handleScreenChange(this.state.gameUI.currentScreen)
  }

  handleClassSubmit = (classType, className) => {
    let { player } = this.state
    player.classType = classType
    player.className = className
    this.setState({ player })

    this.handleScreenChange(this.state.gameUI.currentScreen)
  }

  startScreenMethods = {
    resetBackground: this.resetBackground,
    handleMoralityChoice: this.handleMoralityChoice,
    handleScreenChange: this.handleScreenChange,
    handleHover: this.handleHover
  }

  nameFormMethods = {
    handleNameSubmit: this.handleNameSubmit
  }

  classFormMethods = {
    handleClassSubmit: this.handleClassSubmit
  }

  methods = {
    startScreenMethods: this.startScreenMethods,
    nameFormMethods: this.nameFormMethods,
    classFormMethods: this.classFormMethods
  }

  render() {
    if (this.state.gameUI.shouldFadeOut) {
      return renderView(
        this.state.gameUI.currentScreen,
        this.state.gameUI,
        this.state.player,
        this.methods,
        true
      )
    } else {
      return renderView(
        this.state.gameUI.currentScreen,
        this.state.gameUI,
        this.state.player,
        this.methods
      )
    }
  }
}

export default Game
