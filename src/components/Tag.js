import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'

export const Tag = ({ label }) => {
  return (
    <Box
      background="dark-6"
      pad={{ horizontal: '6px', vertical: '2px' }}
      round="3px"
    >
      <Text
        color="white"
        size="xsmall"
        style={{ letterSpacing: '-1px' }}
        weight="bold"
      >
        {label}
      </Text>
    </Box>
  )
}

Tag.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Tag
