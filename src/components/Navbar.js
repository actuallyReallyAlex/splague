import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading, Text } from 'grommet'
import { User } from 'grommet-icons'

export const Navbar = ({ player }) => {
  return (
    <Box
      align="center"
      direction="row"
      height="70px"
      justify="between"
      pad="small"
      style={{ background: 'rgb(32, 35, 50)' }}
    >
      <Box>
        <Heading margin="none" level="2">
          Splague
        </Heading>
      </Box>
      <Box align="center" direction="row" gap="small">
        <Box>
          <User />
        </Box>
        <Box>
          <User />
        </Box>
        <Box>
          <User />
        </Box>
        <Box>
          <Text>{player.name}</Text>
        </Box>
      </Box>
    </Box>
  )
}

Navbar.propTypes = {
  // From connect()
  dispatch: PropTypes.func.isRequired,
  // From mapStateToProps()
  player: PropTypes.object.isRequired
}

const mapStateToProps = ({ player }) => {
  return { player }
}

export default connect(mapStateToProps)(Navbar)
