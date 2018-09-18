import React from 'react'
import PropTypes from 'prop-types'
import MainSidebar from '../MainSidebar'
import Plague from '../Plague'

const MenuScreen = props => {
  const styles = {
    marginLeft: '250px'
  }

  let morality = props.player.morality

  morality === 'good'
    ? props.resetBackground()
    : props.resetBackground('#252839')

  return (
    <div className={props.className + ' full-height'}>
      <MainSidebar
        gameUI={props.gameUI}
        player={props.player}
        plague={props.plague}
        cure={props.cure}
        world={props.world}
      />
      <div style={styles} className="full-height">
        <h1>Hello world.</h1>
        <Plague
          plagueMethods={props.plagueMethods}
          gameUI={props.gameUI}
          player={props.player}
          plague={props.plague}
          cure={props.cure}
          world={props.world}
        />
      </div>
    </div>
  )
}

MenuScreen.propTypes = {
  resetBackground: PropTypes.func,
  className: PropTypes.string,
  gameUI: PropTypes.object,
  player: PropTypes.object,
  plague: PropTypes.object,
  cure: PropTypes.object,
  world: PropTypes.object,
  plagueMethods: PropTypes.object
}

export default MenuScreen
