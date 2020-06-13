import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import { User } from 'grommet-icons'

export const LogItem = ({ additionalInfo, description, icon, time, title }) => {
  const Icon = icon
  return (
    <Box flex={false} className="animated fadeInUp" direction="row" gap="small" pad="small">
      <Box
        align="center"
        height="40px"
        justify="center"
        round="small"
        style={{ background: 'rgb(40, 41, 62)' }}
        width="40px"
      >
        <Icon color="white" />
      </Box>
      <Box width="small">
        <Box justify="between" direction="row" fill="horizontal">
          <Text size="small" weight="bold">
            {title}
          </Text>
          <Text size="small">{time}</Text>
        </Box>

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
  icon: PropTypes.func,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

LogItem.defaultProps = {
  icon: User
}

export default LogItem
