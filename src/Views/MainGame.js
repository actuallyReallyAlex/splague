import React from 'react'
import PropTypes from 'prop-types'
import MainSidebar from '../MainSidebar'
import Log from '../Log'

const MainGame = props => {
  // Applied to div to the right of the sidebar. Ensures that div is scootched over from sidebar.
  const styles = {
    marginLeft: '250px',
    padding: '20px',
    color: 'white'
  }

  // Morality
  let morality = props.player.morality

  // Changes background to white or dark color
  morality === 'good'
    ? props.resetBackground()
    : props.resetBackground('#252839')

  // Plague
  let plagueHasBegun = props.plague.hasBegun

  if (plagueHasBegun) {
    // If the plague has already begun
    // Do nothing
  } else {
    // If the plague has not begun
    // start the plague
    // Decide if a person will be infected every 3 seconds
    setInterval(() => {
      props.plagueMethods.decideToInfect(false, true)
    }, 3000)

    props.plagueMethods.beginInfection()
  }

  return (
    <div className={props.className + ' full-height'}>
      <MainSidebar
        gameUI={props.gameUI}
        player={props.player}
        plague={props.plague}
        cure={props.cure}
        world={props.world}
        log={props.log}
      />
      <div style={styles} className="full-height">
        <Log log={props.log}/>
      </div>
    </div>
  )
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
  plagueMethods: PropTypes.object
}

export default MainGame
