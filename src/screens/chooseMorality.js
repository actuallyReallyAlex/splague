import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, RadioButton } from 'grommet'
import { chooseMorality } from '../redux/actions/actions'

class ChooseMorality extends Component {
  handleMoralitySelection = e => {
    const { dispatch } = this.props
    dispatch(chooseMorality(e.target.name))
  }

  render() {
    const { player } = this.props
    return (
      <Box align="center" fill justify="center">
        <Box direction="row" gap="medium">
          <RadioButton
            checked={player.morality === 'good'}
            label="Good"
            name="good"
            onChange={this.handleMoralitySelection}
          />
          <RadioButton
            checked={player.morality === 'evil'}
            label="Evil"
            name="evil"
            onChange={this.handleMoralitySelection}
          />
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ChooseMorality)
