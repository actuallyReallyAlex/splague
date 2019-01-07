import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Sidebar from '../components/Sidebar'
import Log from '../components/Log'
import Navbar from '../components/Navbar'
import Main from '../components/Main';

export const Home = ({ player, ui }) => {
  return (
    <Box
      background={player.morality === 'good' ? 'white' : '#252839'}
      className={ui.transitionClasses}
      fill
    >
      <Navbar />
      <Box direction="row" fill justify="between">
        <Sidebar />
        <Main />
        <Log />
      </Box>
    </Box>
  )
}

Home.propTypes = {
  // From connect()
  dispatch: PropTypes.func.isRequired,
  // From mapStateToProps()
  player: PropTypes.object.isRequired,
  // From mapStateToProps()
  ui: PropTypes.object.isRequired
}

const mapStateToProps = ({ player, ui }) => {
  return { player, ui }
}

export default connect(mapStateToProps)(Home)
