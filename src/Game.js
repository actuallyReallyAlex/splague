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
    },
    plague: {
      mutations: 0
    },
    world: {
      alivePopulation: 450000000,
      infectedPopulation: 0,
      deadPopulation: 0
    },
    cure: {
      percentComplete: 0
    },
    log: {}
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
   * @param {String} name User inputted name.
   */
  handleNameSubmit = name => {
    let { player } = this.state
    player.name = name
    this.setState({ player })

    this.handleScreenChange(this.state.gameUI.currentScreen)
  }

  /**
   * Responsible for setting state when a user submits a class.
   * @param {String} classType A type of class. Either Plague or Faction.
   * @param {String} className A specific subset of either a Plague or Faction.
   */
  handleClassSubmit = (classType, className) => {
    let { player } = this.state
    player.classType = classType
    player.className = className
    this.setState({ player })

    this.handleScreenChange(this.state.gameUI.currentScreen)
  }

  /**
   * Responsible for infecting the population.
   * @param {Number} numberToInfect The number of healthy people to infect. Must not be larger than the current alive population.
   * @param {Boolean} [isPatientZero=false] If set to true, will log an event stating that patient zero has been infected.
   */
  infectPopulation = (numberToInfect, isPatientZero = false) => {
    let { world } = this.state
    const currentInfectedPopulation = world.infectedPopulation
    world.infectedPopulation = currentInfectedPopulation + numberToInfect
    if (isPatientZero) {
      this.logAnEvent(
        'patientZero',
        'Patient Zero has been infected. The plague has begun.'
      )
    }
    this.setState({ world })
  }

  /**
   * Responsible for deciding if a person will become infected. Will run every 1 second of gametime.
   * @param {Boolean} override If set to true, will automatically infect 1 person, and not do any math logic.
   */
  decideToInfect = (override = false) => {
    if (override) {
      this.infectPopulation(1)
    } else {
      // To infect someone, value must be greater than 0.75
      const infectionValue = Math.random()
      console.log(infectionValue)

      infectionValue > 0.75 ? this.infectPopulation(1) : null
    }
  }

  /**
   * Logs an event to the log.
   * @param {String} key Key to add to the log object.
   * @param {String} value Value to add to the log object. Will be used as text for the log item.
   */
  logAnEvent = (key, value) => {
    let { log } = this.state
    log[key] = value
    this.setState({ log })
  }

  /**
   * Clears the Game Log.
   */
  clearLog = () => {
    let log = {}
    this.setState({ log })
  }

  skip = () => {
    let { gameUI } = this.state
    gameUI.currentScreen = 'Main Game'
    this.handleMoralityChoice('evil')
    this.handleNameSubmit('Black Death')
    this.handleClassSubmit('Plague', 'Bubonic')
    this.setState({ gameUI })
  }

  startScreenMethods = {
    resetBackground: this.resetBackground,
    handleMoralityChoice: this.handleMoralityChoice,
    handleScreenChange: this.handleScreenChange,
    handleHover: this.handleHover,
    skip: this.skip
  }

  nameFormMethods = {
    handleNameSubmit: this.handleNameSubmit
  }

  classFormMethods = {
    handleClassSubmit: this.handleClassSubmit
  }

  plagueMethods = {
    infectPopulation: this.infectPopulation,
    decideToInfect: this.decideToInfect
  }

  gameMethods = {
    logAnEvent: this.logAnEvent,
    clearLog: this.clearLog
  }

  methods = {
    startScreenMethods: this.startScreenMethods,
    nameFormMethods: this.nameFormMethods,
    classFormMethods: this.classFormMethods,
    plagueMethods: this.plagueMethods,
    gameMethods: this.gameMethods
  }

  render() {
    if (this.state.gameUI.shouldFadeOut) {
      return renderView(
        this.state.gameUI.currentScreen,
        this.state.gameUI,
        this.state.player,
        this.state.plague,
        this.state.cure,
        this.state.world,
        this.state.log,
        this.methods,
        true
      )
    } else {
      return renderView(
        this.state.gameUI.currentScreen,
        this.state.gameUI,
        this.state.player,
        this.state.plague,
        this.state.cure,
        this.state.world,
        this.state.log,
        this.methods
      )
    }
  }
}

export default Game
