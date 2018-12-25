import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import Tag from './Tag'

const SidebarData = ({ data, label }) => {
  return (
    <Box
      align="center"
      direction="row"
      justify="between"
      margin={{ bottom: 'xsmall' }}
    >
      <Text color="light-3" size="xsmall">
        {label}
      </Text>
      <Tag label={data} />
    </Box>
  )
}

SidebarData.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired
}

export default SidebarData
