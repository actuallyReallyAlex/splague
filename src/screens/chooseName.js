import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Button, FormField, TextInput } from 'grommet'
import {
  chooseName,
  changeScreen,
  transitionScreen
} from '../redux/actions/actions'

class ChooseName extends Component {
  state = {
    name: ''
  }

  playerName = React.createRef()

  handleNameSelection = () => {
    const { dispatch } = this.props
    const { name } = this.state
    dispatch(chooseName(name))
    dispatch(transitionScreen(true, 'animated fadeOut'))

    setTimeout(() => {
      dispatch(transitionScreen(false, 'animated fadeIn'))
      dispatch(changeScreen('chooseType'))
    }, 1500)
  }

  handleNameChange = e => {
    const name = e.target.value
    this.setState(() => ({ name }))
  }

  render() {
    const { name } = this.state
    const { ui, player } = this.props
    return (
      <Box
        align="center"
        background={player.morality === 'good' ? 'accent-1' : '#252839'}
        className={ui.transitionClasses}
        fill
        justify="center"
      >
        <Box>
          <FormField label="Name">
            <TextInput onChange={this.handleNameChange} ref={this.playerName} />
          </FormField>
        </Box>
        {name && (
          <Box
            className="animated fadeInUp"
            margin={{ top: 'xlarge' }}
            style={{ position: 'absolute' }}
          >
            <Button
              label="Continue"
              onClick={this.handleNameSelection}
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

export default connect(mapStateToProps)(ChooseName)
