import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import { User } from 'grommet-icons'

const LogItem = ({ additionalInfo, description, icon, title }) => {
  const Icon = icon || User
  return (
    <Box
      background="white"
      className="animated fadeInUp"
      direction="row"
      gap="small"
      pad="small"
      round="small"
    >
      <Box
        align="center"
        background="black"
        height="50px"
        justify="center"
        round="full"
        width="50px"
      >
        <Icon color="white" />
      </Box>
      <Box>
        <Text weight="bold">{title}</Text>
        {additionalInfo && (
          <Text color="grey" margin="none" size="small">
            {additionalInfo}
          </Text>
        )}
        <Text size="small">{description}</Text>
      </Box>
    </Box>
  )
}

LogItem.propTypes = {
  additionalInfo: PropTypes.string,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default LogItem
