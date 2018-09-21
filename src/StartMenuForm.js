import React, { Component } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import { factionOptions, plagueOptions } from './UtilityFunctions'
import PropTypes from 'prop-types'

/**
 * Basic Name Form where user inputs either a Doctor Name or Plague Name that will stay for the game.
 */
class StartMenuForm extends Component {
  state = {
    className: '',
    classType: '',
    name: ''
  }

  handleInput = e => {
    const { value } = e.target
    this.setState({ name: value })
  }

  handleClassChange = (e, { value }) => {
    this.setState({ className: value })
  }

  componentDidMount() {
    // classType denotes a special type of class depending on morality
    if (this.props.player.morality === 'good') {
      // Set classType to Faction
      this.setState({ classType: 'Faction' })
    } else {
      // Set classType to Plague
      this.setState({ classType: 'Plague' })
    }
  }

  render() {
    if (this.props.input) {
      // Return a simple input form
      return (
        <SimpleInput
          nameFormMethods={this.props.nameFormMethods}
          className={this.props.className}
          onInput={this.handleInput}
          value={this.state.name}
          player={this.props.player}
        />
      )
    } else if (this.props.dropdown) {
      // Return a simple dropdown form
      return (
        <SimpleDropdown
          player={this.props.player}
          classFormMethods={this.props.classFormMethods}
          handleClassChange={this.handleClassChange}
          playerClassType={this.state.classType}
          playerClassName={this.state.className}
          className={this.props.className}
        />
      )
    }
  }
}

StartMenuForm.propTypes = {
  input: PropTypes.bool,
  player: PropTypes.object,
  nameFormMethods: PropTypes.object,
  name: PropTypes.string,
  className: PropTypes.string,
  onInput: PropTypes.func,
  dropdown: PropTypes.bool,
  classFormMethods: PropTypes.object
}

const SimpleInput = props => {
  let label = ''
  props.player.morality === 'good'
    ? (label = 'Doctor Name')
    : (label = 'Plague Name')
  return (
    <Grid centered columns={1}>
      <Grid.Row centered columns={4}>
        <Grid.Column>
          <Form
            onSubmit={() => {
              props.nameFormMethods.handleNameSubmit(props.value)
            }}
            className={props.className}
            id="nameForm"
          >
            <Form.Field>
              <label>{label}</label>
              <input
                onChange={props.onInput}
                placeholder={label}
                id="nameField"
                value={props.value}
              />
            </Form.Field>
            <Button disabled={props.value !== '' ? false : true} type="submit">
              Continue
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

SimpleInput.propTypes = {
  nameFormMethods: PropTypes.object,
  className: PropTypes.string,
  onInput: PropTypes.func,
  value: PropTypes.string,
  player: PropTypes.object
}

const SimpleDropdown = props => {
  let classTypeOptions = []
  let type = ''
  if (props.player.morality === 'good') {
    classTypeOptions = factionOptions
    type = 'Faction'
  } else {
    classTypeOptions = plagueOptions
    type = 'Plague Type'
  }
  return (
    <Grid centered columns={1}>
      <Grid.Row centered columns={4}>
        <Grid.Column>
          <Form
            className={props.className}
            id="classForm"
            onSubmit={() => {
              props.classFormMethods.handleClassSubmit(
                props.playerClassType,
                props.playerClassName
              )
            }}
          >
            <Form.Field>
              <label>Select a {type}</label>
              <Form.Dropdown
                placeholder={`Select a ${type}`}
                fluid
                selection
                options={classTypeOptions}
                onChange={props.handleClassChange}
              />
            </Form.Field>
            <Button
              disabled={props.playerClassName !== '' ? false : true}
              type="submit"
            >
              Begin ...
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

SimpleDropdown.propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
  classFormMethods: PropTypes.object,
  value: PropTypes.string,
  handleClassChange: PropTypes.func,
  playerClassName: PropTypes.string,
  playerClassType: PropTypes.string
}

export default StartMenuForm
