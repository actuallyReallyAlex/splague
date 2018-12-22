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
    const { dispatch, ui } = this.props
    const { morality } = this.props.player
    if (!morality) {
      dispatch(changeBackground('accent-1'))
    } else {
      if (ui.background !== 'accent-1' && !ui.isTransitioning) {
        dispatch(changeBackground('accent-1'))
      }
    }
  }

  handleHoverBad = () => {
    const { dispatch, ui } = this.props
    const { morality } = this.props.player
    if (!morality) {
      dispatch(changeBackground('#252839'))
    } else {
      if (ui.background !== '#252839' && !ui.isTransitioning) {
        dispatch(changeBackground('#252839'))
      }
    }
  }

  handleMouseLeave = () => {
    const { dispatch, ui } = this.props
    const { morality } = this.props.player
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
    dispatch(chooseMorality(morality))
  }

  handleContinue = () => {
    const { dispatch } = this.props
    dispatch(transitionScreen(true, 'animated fadeOut'))

    setTimeout(() => {
      dispatch(transitionScreen(false, 'animated fadeIn'))
      dispatch(changeScreen('chooseName'))
    }, 1500)
  }

  render() {
    const { player, ui } = this.props
    return (
      <Box
        align="center"
        className={ui.transitionClasses}
        fill
        justify="center"
      >
        <Box align="center">
          <Box direction="row" gap="medium">
            <Box
              onMouseLeave={this.handleMouseLeave}
              onMouseEnter={this.handleHoverGood}
            >
              <RadioButton
                checked={player.morality === 'good'}
                disabled={ui.isTransitioning}
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
                disabled={ui.isTransitioning}
                label="Evil"
                name="evil"
                onChange={this.handleMoralitySelection}
              />
            </Box>
          </Box>
          {player.morality && (
            <Box
              className="animated fadeInUp"
              margin={{ top: 'xlarge' }}
              style={{ position: 'absolute' }}
            >
              <Button label="Continue" onClick={this.handleContinue} primary />
            </Box>
          )}
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ChooseMorality)
