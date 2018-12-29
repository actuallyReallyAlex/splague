import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Sidebar from '../components/Sidebar'
import Log from '../components/Log'

export const Home = ({ player, ui }) => {
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

Home.propTypes = {
  // From mapStateToProps()
  cure: PropTypes.object.isRequired,
  // From connect()
  dispatch: PropTypes.func.isRequired,
  // From mapStateToProps()
  log: PropTypes.array.isRequired,
  // From mapStateToProps()
  plague: PropTypes.object.isRequired,
  // From mapStateToProps()
  player: PropTypes.object.isRequired,
  // From mapStateToProps()
  ui: PropTypes.object.isRequired,
  // From mapStateToProps()
  world: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home)
