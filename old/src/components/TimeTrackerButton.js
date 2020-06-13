import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from 'grommet'
import { connect } from 'react-redux'
import { setDayLength } from '../redux/actions/world'
import { setPlagueSpeed } from '../redux/actions/plague'

export class TimeTrackerButton extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    // From mapStateToProps()
    world: PropTypes.object.isRequired
  }

  changeDayLength = () => {
    const { dispatch, time } = this.props
    let plagueSpeed
    // ! refactor this
    if (time === 1) {
      plagueSpeed = 1000
    } else if (time === 2) {
      plagueSpeed = 500
    } else {
      plagueSpeed = 333
    }
    dispatch(setDayLength(time))
    dispatch(setPlagueSpeed(plagueSpeed))
  }

  render() {
    const { label, time, world } = this.props
    return (
      <Box
        align="center"
        background={world.dayLength === 12000 / time ? 'green' : 'white'}
        justify="center"
        pad={{ horizontal: '15px', vertical: '5px' }}
        round="xsmall"
        width="10%"
      >
        <Button
          disabled={world.dayLength === 12000 / time}
          fill
          hoverIndicator
          label={label}
          onClick={this.changeDayLength}
          plain
        />
      </Box>
    )
  }
}

const mapStateToProps = ({ world }) => {
  return { world }
}

export default connect(mapStateToProps)(TimeTrackerButton)
