import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, WorldMap as GrommetWorldMap } from 'grommet'

const WorldMap = ({ world }) => {
  const { places } = world
  return (
    <Box align="center" justify="center">
      <GrommetWorldMap a11yTitle="WorldMap" places={places} />
    </Box>
  )
}

WorldMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
  world: PropTypes.object.isRequired
}

const mapStateToProps = ({ world }) => ({ world })

export default connect(mapStateToProps)(WorldMap)
