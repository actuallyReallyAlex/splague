import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainSidebar from '../MainSidebar'
import Log from '../Log'

class MainGame extends Component {
  componentDidMount() {
    let morality = this.props.player.morality

    // Changes background to white or dark color
    morality === 'good'
      ? this.props.resetBackground()
      : this.props.resetBackground('#252839')

    // Logs an event to the Game Log after 2 seconds
    setTimeout(() => {
      this.props.gameMethods.logAnEvent('gameStart', 'Welcome to Splague!')
    }, 2000)

    // Infects Patient Zero after 10 seconds
    setTimeout(() => {
      this.props.plagueMethods.infectPopulation(1, true)
    }, 10000)

    // Sets infection decision interval for every 3 seconds, after 10.5 seconds
    setTimeout(() => {
      setInterval(() => {
        this.props.plagueMethods.decideToInfect()
      }, 3000)
    }, 10500)
  }

  render() {
    // Applied to div to the right of the sidebar. Ensures that div is scootched over from sidebar.
    const styles = {
      marginLeft: '250px',
      padding: '20px',
      color: 'white'
    }

    return (
      <div className={this.props.className + ' full-height'}>
        <MainSidebar
          gameUI={this.props.gameUI}
          player={this.props.player}
          plague={this.props.plague}
          cure={this.props.cure}
          world={this.props.world}
          log={this.props.log}
        />
        <div style={styles} className="full-height">
          <Log log={this.props.log} player={this.props.player} />
        </div>
      </div>
    )
  }
}

MainGame.propTypes = {
  resetBackground: PropTypes.func,
  className: PropTypes.string,
  gameUI: PropTypes.object,
  player: PropTypes.object,
  plague: PropTypes.object,
  cure: PropTypes.object,
  world: PropTypes.object,
  log: PropTypes.object,
  plagueMethods: PropTypes.object,
  gameMethods: PropTypes.object
}

export default MainGame
