import React from 'react'
import PropTypes from 'prop-types'
import MainSidebar from '../MainSidebar'

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
      <MainSidebar player={props.player} />
      <div style={styles} className="full-height">
        <h1>Hello world.</h1>
      </div>
    </div>
  )
}

MenuScreen.propTypes = {
  player: PropTypes.object,
  resetBackground: PropTypes.func,
  className: PropTypes.string
}

export default MenuScreen
