import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button, FormField, TextInput } from 'grommet'
import {
  chooseName,
  changeScreen,
  transitionScreen
} from '../redux/actions/actions'

export class ChooseName extends Component {
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
    error: false,
    name: ''
  }

  playerName = React.createRef()

  handleNameSelection = e => {
    e.preventDefault()
    const { error } = this.state

    if (!error) {
      const { dispatch } = this.props
      const { name } = this.state
      dispatch(chooseName(name))
      dispatch(transitionScreen(true, 'animated fadeOut'))

      setTimeout(() => {
        dispatch(transitionScreen(false, 'animated fadeIn'))
        dispatch(changeScreen('chooseType'))
      }, 1500)
    }
  }

  handleNameChange = e => {
    e.preventDefault()
    const name = e.target.value
    const regex = /\w/gm
    if (regex.test(name)) {
      this.setState(() => ({ name, error: false }))
    } else {
      this.setState(() => ({ error: true }))
    }
  }

  render() {
    const { error, name } = this.state
    const { ui, player } = this.props
    return (
      <Box
        align="center"
        background={player.morality === 'good' ? 'accent-1' : '#252839'}
        className={ui.transitionClasses}
        fill
        justify="center"
      >
        <form>
          <Box align="center">
            <Box>
              <FormField
                error={error && "Name can't be blank. Please try again."}
                label="Name"
              >
                <TextInput
                  onChange={this.handleNameChange}
                  ref={this.playerName}
                />
              </FormField>
            </Box>
            {name && (
              <Box
                className="animated fadeInUp"
                margin={{ top: '130px' }}
                style={{ position: 'absolute' }}
              >
                <Button
                  label="Continue"
                  onClick={this.handleNameSelection}
                  primary
                  type="button"
                />
              </Box>
            )}
          </Box>
        </form>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ChooseName)
