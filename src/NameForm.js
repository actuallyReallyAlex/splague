import React, { Component } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

/**
 * Basic Name Form where user inputs either a Doctor Name or Plague Name that will stay for the game.
 * @prop {Function} handleSubmit When the form is submitted, 'name' will be set in the Game component's state.
 * @prop {String} className Classname(s) to add to the Form component. Useful in animation. For more than 1 classname, enter "class1 class2".
 * @prop {String} label Either "Doctor Name" (Good) or "Plague Name" (Evil).
 * @prop {String} onInput When the user types in the input, that name is saved to local state.
 * @prop {String} name The inputted name. If the BasicNameForm is re-rendered, the value of the input comes from this prop.
 */
const BasicNameForm = props => {
  return (
    <Form
      onSubmit={props.handleSubmit}
      className={props.className}
      id="nameForm"
    >
      <Form.Field>
        <label>{props.label}</label>
        <input
          onChange={props.onInput}
          placeholder={props.label}
          id="nameField"
          value={props.name}
        />
      </Form.Field>
      <Button type="submit">Begin</Button>
    </Form>
  )
}

BasicNameForm.propTypes = {
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  onInput: PropTypes.func,
  name: PropTypes.string
}

class NameForm extends Component {
  state = {
    buttonsAreGone: false
  }

  componentDidMount() {
    if (this.props.nameValue) {
      // The user has chosen a name
      // Set the local state
      this.setState({ buttonsAreGone: true })
    } else {
      // The user has not chosen a name.
      // After 2 seconds, set the local state buttonsAreGone to "true"
      setTimeout(() => {
        this.setState({ buttonsAreGone: true })
      }, 2000)
    }
  }

  render() {
    if (this.state.buttonsAreGone) {
      // The user has chosen a morality,
      // and the morality buttons have faded out.
      // Render the name form.
      return (
        <Grid centered columns={1}>
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <CustomForm
                morality={this.props.morality}
                onNameSubmit={this.props.onNameSubmit}
                nameValue={this.props.nameValue}
                fadeOut={this.props.fadeOut}
                setToMainMenu={this.props.setToMainMenu}
                onInput={this.props.onInput}
                name={this.props.name}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      // The user has not chosen a morality.
      // Render nothing.
      return null
    }
  }
}

NameForm.propTypes = {
  gameState: PropTypes.object,
  morality: PropTypes.string,
  onNameSubmit: PropTypes.func,
  nameValue: PropTypes.string,
  fadeOut: PropTypes.bool,
  setToMainMenu: PropTypes.func,
  onInput: PropTypes.func,
  name: PropTypes.string
}

class CustomForm extends Component {
  state = { name: '' }

  onInput = e => {
    const { value } = e.target
    this.setState({ name: value })
  }

  // Just go to next screen
  handleSubmit = e => {
    e.preventDefault()
    this.props.onNameSubmit(this.state.name)
    // TODO: Add section about UI changes
  }

  componentDidMount() {
    const nameForm = document.getElementById('nameForm')
    if (nameForm.classList.contains('fadeOutLeft')) {
      // Set timeout to wait for animation to play.
      // Then tell Game component to rerender as the Main Menu
      setTimeout(() => {
        this.props.setToMainMenu()
      }, 2000)
    }
  }

  render() {
    if (this.props.fadeOut === true) {
      // The user has submitted a name
      // Fade out the name input form

      let morality = this.props.morality

      if (morality === 'good') {
        // Display a name form for the "good" morality that has the inputted name and will fade out
        return (
          <BasicNameForm
            handleSubmit={this.handleSubmit}
            onInput={this.onInput}
            name={this.state.name}
            label="Doctor Name"
            className="animated fadeOutLeft"
          />
        )
      } else {
        // Display a name form for the "evil" morality that has the inputted name and will fade out
        return (
          <BasicNameForm
            handleSubmit={this.handleSubmit}
            onInput={this.onInput}
            name={this.state.name}
            label="Plague Name"
            className="animated fadeOutLeft"
          />
        )
      }
    } else {
      // The user has not submitted a name
      // but the user has chosen a morality
      let morality = this.props.morality
      if (morality === 'good') {
        // Display a name form for the "good" morality that is empty and will not fade out
        return (
          <BasicNameForm
            handleSubmit={this.handleSubmit}
            onInput={this.onInput}
            name={this.state.name}
            label="Doctor Name"
          />
        )
      } else {
        // Display a name form for the "evil" morality that is empty and will not fade out
        return (
          <BasicNameForm
            handleSubmit={this.handleSubmit}
            onInput={this.onInput}
            name={this.state.name}
            label="Plague Name"
          />
        )
      }
    }
  }
}

CustomForm.propTypes = {
  onNameSubmit: PropTypes.func,
  setToMainMenu: PropTypes.func,
  fadeOut: PropTypes.bool,
  morality: PropTypes.string
}

export default NameForm
