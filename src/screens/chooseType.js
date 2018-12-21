import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Button, FormField, Select } from 'grommet'
import { chooseType, changeScreen } from '../redux/actions/actions'
import { plagueTypes, factionTypes } from '../constants'

class ChooseType extends Component {
  state = {
    type: ''
  }

  handleBegin = () => {
    const { dispatch } = this.props
    const { type } = this.state
    dispatch(chooseType(type))
    dispatch(changeScreen('home'))
  }

  handleTypeChange = e => {
    const type = e.value
    this.setState(() => ({ type }))
  }

  render() {
    const { morality } = this.props.player
    const { type } = this.state

    return (
      <Box align="center" fill justify="center">
        <Box>
          <FormField label={morality === 'good' ? 'Faction' : 'Plague Type'}>
            <Select onChange={this.handleTypeChange} options={morality === 'good' ? factionTypes : plagueTypes} value={type} />
          </FormField>
        </Box>
        {type && (
          <Box margin={{ top: 'xlarge' }} style={{ position: 'absolute' }}>
            <Button label="Begin ..." onClick={this.handleBegin} primary />
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
