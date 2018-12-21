import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Sidebar from '../components/Sidebar'

const Home = ({ player, ui }) => {
  return (
    <Box fill>
      <Sidebar />
    </Box>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home)
