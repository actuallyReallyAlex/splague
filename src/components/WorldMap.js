import React from 'react'
import { connect } from 'react-redux'
import { base, Box, WorldMap as GrommetWorldMap } from 'grommet'

const WorldMap = () => {
  return (
    <Box align="center" justify="center">
      <GrommetWorldMap a11yTitle="WorldMap" />
    </Box>
  )
}

const mapStateToProps = ({ world }) => ({ world })

export default connect(mapStateToProps)(WorldMap)
