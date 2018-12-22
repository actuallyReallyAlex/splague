import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Button, FormField, TextInput } from 'grommet'
import { chooseName, changeScreen } from '../redux/actions/actions'

class ChooseName extends Component {
  state = {
    name: ''
  }

  playerName = React.createRef()

  handleNameSelection = () => {
    const { dispatch } = this.props
    const { name } = this.state
    dispatch(chooseName(name))
    dispatch(changeScreen('chooseType'))
  }

  handleNameChange = e => {
    const name = e.target.value
    this.setState(() => ({ name }))
  }

  render() {
    const { name } = this.state
    const { morality } = this.props.player
    return (
      <Box
        align="center"
        background={morality === 'good' ? 'white' : '#252839'}
        fill
        justify="center"
      >
        <Box>
          <FormField label="Name">
            <TextInput onChange={this.handleNameChange} ref={this.playerName} />
          </FormField>
        </Box>
        {name && (
          <Box margin={{ top: 'xlarge' }} style={{ position: 'absolute' }}>
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
