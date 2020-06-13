import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Text } from 'grommet'
import SidebarData from './SidebarData'
import TimeTrackerButton from './TimeTrackerButton'

export const TimeTracker = ({ world }) => {
  return (
    <Box fill="horizontal" margin={{ vertical: 'small' }} pad="small">
      <Text weight="bold" size="small">
        Time
      </Text>
      <Box justify="center" direction="row" gap="small">
        <TimeTrackerButton label="1x" time={1} />
        <TimeTrackerButton label="2x" time={2} />
        <TimeTrackerButton label="3x" time={3} />
      </Box>
      <SidebarData label="Day" data={world.day} />
    </Box>
  )
}

TimeTracker.propTypes = {
  // From connect()
  dispatch: PropTypes.func.isRequired,
  // From mapStateToProps()
  world: PropTypes.object.isRequired
}

const mapStateToProps = ({ world }) => {
  return { world }
}

export default connect(mapStateToProps)(TimeTracker)
