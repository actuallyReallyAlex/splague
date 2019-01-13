import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import sample from 'lodash.sample'
import { Box, Button, FormField, TextInput } from 'grommet'
import { Update } from 'grommet-icons'
import { chooseName } from '../redux/actions/player'
import { changeScreen, transitionScreen } from '../redux/actions/ui'
import { goodNames, evilNames } from '../constants'

export class ChooseName extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    player: PropTypes.object.isRequired,
    // From mapStateToProps()
    ui: PropTypes.object.isRequired
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

  handleRandomName = () => {
    const { morality } = this.props.player
    const nameGroup = morality === 'good' ? goodNames : evilNames
    let randomName = `The ${sample(nameGroup.adjectives)} ${sample(
      nameGroup.nouns
    )}`
    while (randomName === this.playerName.current.value) {
      randomName = `The ${sample(nameGroup.adjectives)} ${sample(
        nameGroup.nouns
      )}`
    }
    this.playerName.current.value = randomName
    this.setState(() => ({ name: randomName }))
  }

  render() {
    const { error, name } = this.state
    const { player, ui } = this.props
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
            <Box align="end" direction="row" gap="medium">
              <FormField
                error={error && "Name can't be blank. Please try again."}
                label={player.morality === 'good' ? 'Cure Name' : 'Plague Name'}
              >
                <TextInput
                  onChange={this.handleNameChange}
                  ref={this.playerName}
                />
              </FormField>
              <Box>
                <Button
                  icon={<Update />}
                  onClick={this.handleRandomName}
                  plain
                />
              </Box>
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

const mapStateToProps = ({ player, ui }) => {
  return { player, ui }
}

export default connect(mapStateToProps)(ChooseName)
