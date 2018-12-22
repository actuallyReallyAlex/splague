import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, RadioButton, Button } from 'grommet'
import {
  chooseMorality,
  changeBackground,
  changeScreen,
  transitionScreen
} from '../redux/actions/actions'

class ChooseMorality extends Component {
  state = {
    morality: null
  }

  setBackgroundColor = morality => {
    switch (morality) {
      case 'good':
        return 'accent-1'
      case 'evil':
        return '#252839'
      default:
        return 'white'
    }
  }

  handleHoverGood = () => {
    const { ui, dispatch } = this.props
    const { morality } = this.state
    if (morality !== 'good' || ui.background !== 'accent-1') {
      dispatch(changeBackground('accent-1'))
    }
  }

  handleHoverBad = () => {
    const { ui, dispatch } = this.props
    const { morality } = this.state
    if (morality !== 'evil' || ui.background !== '252839') {
      
      dispatch(changeBackground('#252839'))
    }
  }

  handleMouseLeave = () => {
    const { ui, dispatch } = this.props
    const { morality } = this.state
    if (!morality) {
      dispatch(changeBackground('white'))
    } else {
      if (morality === 'good' && ui.background === '#252839') {
        dispatch(changeBackground('accent-1'))
      } else if (morality === 'evil' && ui.background === 'accent-1') {
        dispatch(changeBackground('#252839'))
      }
    }
  }

  handleMoralitySelection = e => {
    const { dispatch } = this.props
    const morality = e.target.name
    const background = this.setBackgroundColor(morality)
    this.setState(() => ({ morality, background }))
    dispatch(chooseMorality(morality))
  }

  handleContinue = () => {
    const { dispatch } = this.props
    dispatch(transitionScreen(true))

    setTimeout(() => {
      dispatch(transitionScreen(false))
      dispatch(changeScreen('chooseName'))
    }, 2000)
  }

  render() {
    const { player, ui } = this.props
    return (
      <Box
        align="center"
        animation={
          ui.isTransitioning
            ? { type: 'fadeOut', delay: 0, duration: 2000 }
            : {
                type: 'fadeIn',
                delay: 0,
                duration: 2000
              }
        }
        background={ui.background}
        fill
        justify="center"
        style={{ transition: 'all 2000ms cubic-bezier(0.42, 0, 0.58, 1)' }}
      >
        <Box direction="row" gap="medium">
          <Box
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleHoverGood}
          >
            <RadioButton
              checked={player.morality === 'good'}
              label="Good"
              name="good"
              onChange={this.handleMoralitySelection}
            />
          </Box>
          <Box
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleHoverBad}
          >
            <RadioButton
              checked={player.morality === 'evil'}
              label="Evil"
              name="evil"
              onChange={this.handleMoralitySelection}
            />
          </Box>
        </Box>
        {player.morality && (
          <Box margin={{ top: 'xlarge' }} style={{ position: 'absolute' }}>
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
