import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button, FormField, Select } from 'grommet'
import {
  chooseType,
  changeScreen,
  transitionScreen
} from '../redux/actions/actions'
import { plagueTypes, factionTypes } from '../constants'

export class ChooseType extends Component {
  static propTypes = {
    // From mapStateToProps()
    cure: PropTypes.object.isRequired,
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    log: PropTypes.array.isRequired,
    // From mapStateToProps()
    plague: PropTypes.object.isRequired,
    // From mapStateToProps()
    player: PropTypes.object.isRequired,
    // From mapStateToProps()
    ui: PropTypes.object.isRequired,
    // From mapStateToProps()
    world: PropTypes.object.isRequired
  }

  state = {
    type: ''
  }

  handleBegin = e => {
    e.preventDefault()
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
              type="button"
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
