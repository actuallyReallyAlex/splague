import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, RadioButton, Button } from 'grommet'
import { chooseMorality, changeScreen } from '../redux/actions/actions'

class ChooseMorality extends Component {
  handleMoralitySelection = e => {
    const { dispatch } = this.props
    dispatch(chooseMorality(e.target.name))
  }

  handleContinue = () => {
    const { dispatch } = this.props
    dispatch(changeScreen('chooseName'))
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
        {player.morality && (
          <Box margin={{ top: 'large' }} style={{ position: 'absolute' }}>
            <Button label="Continue" onClick={this.handleContinue} primary />
          </Box>
        )}
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ChooseMorality)
