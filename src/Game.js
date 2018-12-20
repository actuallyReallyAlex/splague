import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import { screens } from './constants'

class Game extends Component {
  render() {
    const { ui } = this.props
    const Screen = screens[ui.screen]
    return (
      <Box fill>
        <Screen />
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Game)
