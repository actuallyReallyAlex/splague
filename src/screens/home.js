import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Sidebar from '../components/Sidebar'
import Log from '../components/Log'

const Home = ({ player, ui }) => {
  return (
    <Box
      background={player.morality === 'good' ? 'white' : '#252839'}
      className={ui.transitionClasses}
      fill
    >
      <Box direction="row" fill justify="between">
        <Sidebar />
        <Log />
      </Box>
    </Box>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home)
