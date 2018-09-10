import React, { Component } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
  setToMainMenu: PropTypes.func
}

class CustomForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const nameValue = document.getElementById('nameField').value
    this.props.onNameSubmit(nameValue)
  }

  componentDidMount() {
    const nameForm = document.getElementById('nameForm')
    if (nameForm.classList.contains('fadeOutLeft')) {
      // Set timeout to wait for animation to play.
      // Then tell Game component to rerender as the Main Menu
      setTimeout(() => {
        this.props.setToMainMenu()
      }, 2000);
    }
  }

  render() {
    if (this.props.fadeOut === true) {
      // The user has submitted a name
      // Fade out the name input form
      let morality = this.props.morality
      if (morality === 'good') {
        // Display a name form for the "good" morality
        return (
          <Form onSubmit={this.handleSubmit} className="animated fadeOutLeft" id="nameForm">
            <Form.Field>
              <label>Doctor Name</label>
              <input
                placeholder="Doctor Name"
                id="nameField"
                value={this.props.nameValue}
                readOnly
              />
            </Form.Field>
            <Button type="submit">Begin</Button>
          </Form>
        )
      } else {
        // Display a name form for the "evil" morality
        return (
          <Form onSubmit={this.handleSubmit} className="animated fadeOutLeft" id="nameForm">
            <Form.Field>
              <label>Plague Name</label>
              <input
                placeholder="Plague Name"
                id="nameField"
                value={this.props.nameValue}
                readOnly
              />
            </Form.Field>
            <Button type="submit">Begin</Button>
          </Form>
        )
      }
    } else {
      // The user has not submitted a name
      // but the user has chosen a morality
      let morality = this.props.morality
      if (morality === 'good') {
        // Display a name form for the "good" morality
        return (
          <Form onSubmit={this.handleSubmit} className="animated fadeInRight" id="nameForm">
            <Form.Field>
              <label>Doctor Name</label>
              <input placeholder="Doctor Name" id="nameField" />
            </Form.Field>
            <Button type="submit">Begin</Button>
          </Form>
        )
      } else {
        // Display a name form for the "evil" morality
        return (
          <Form onSubmit={this.handleSubmit} className="animated fadeInRight" id="nameForm">
            <Form.Field>
              <label>Plague Name</label>
              <input placeholder="Plague Name" id="nameField" />
            </Form.Field>
            <Button type="submit">Begin</Button>
          </Form>
        )
      }
    }
  }
}

CustomForm.propTypes = {
  morality: PropTypes.string,
  onNameSubmit: PropTypes.func,
  fadeOut: PropTypes.bool,
  nameValue: PropTypes.string,
  setToMainMenu: PropTypes.func
}

export default NameForm
