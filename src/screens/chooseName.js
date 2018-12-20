import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Button, FormField, TextInput } from 'grommet'
import { chooseMorality } from '../redux/actions/actions'

class ChooseName extends Component {
  handleMoralitySelection = e => {
    const { dispatch } = this.props
    dispatch(chooseMorality(e.target.name))
  }

  render() {
    const { player } = this.props
    return (
      <Box align="center" fill justify="center">
        <Box>
          <FormField label="Name">
            <TextInput />
          </FormField>
        </Box>
        {player.name && (
          <Box margin={{ top: 'large' }} style={{ position: 'absolute' }}>
            <Button label="Continue" primary />
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
