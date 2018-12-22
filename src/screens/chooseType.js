import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Button, FormField, Select } from 'grommet'
import { chooseType, changeScreen, transitionScreen } from '../redux/actions/actions'
import { plagueTypes, factionTypes } from '../constants'

class ChooseType extends Component {
  state = {
    type: ''
  }

  handleBegin = () => {
    const { dispatch } = this.props
    const { type } = this.state
    dispatch(chooseType(type))
    dispatch(transitionScreen(true, 'animated fadeOut'))

    setTimeout(() => {
      dispatch(transitionScreen(false, 'animated fadeIn'))
      dispatch(changeScreen('home'))
    }, 1500)
  }

  handleTypeChange = e => {
    const type = e.value
    this.setState(() => ({ type }))
  }

  render() {
    const { player, ui } = this.props
    const { type } = this.state

    return (
      <Box
        align="center"
        background={player.morality === 'good' ? 'accent-1' : '#252839'}
        className={ui.transitionClasses}
        fill
        justify="center"
      >
        <Box>
          <FormField
            label={player.morality === 'good' ? 'Faction' : 'Plague Type'}
          >
            <Select
              onChange={this.handleTypeChange}
              options={player.morality === 'good' ? factionTypes : plagueTypes}
              value={type}
            />
          </FormField>
        </Box>
        {type && (
          <Box
            className="animated fadeInUp"
            margin={{ top: 'xlarge' }}
            style={{ position: 'absolute' }}
          >
            <Button
              className="animated pulse infinite slow"
              label="Begin ..."
              onClick={this.handleBegin}
              primary
            />
          </Box>
        )}
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ChooseType)
