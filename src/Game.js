import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import { screens } from './constants'

class Game extends Component {
  render() {
    const { ui } = this.props
    const Screen = screens[ui.screen]
    return (
      <Box
        background={ui.background}
        className={ui.screen === 'chooseMorality' && 'animated fadeIn slow'}
        fill
        style={{ transition: 'all 2000ms cubic-bezier(0.42, 0, 0.58, 1)' }}
      >
        <Screen />
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Game)
