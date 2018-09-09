import React, { Component } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class NameForm extends Component {
  state = {
    buttonsAreGone: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ buttonsAreGone: true })
    }, 2000)
  }

  render() {
    if (this.state.buttonsAreGone) {
      return (
        <Grid centered columns={1}>
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <CustomForm morality={this.props.morality} onNameSubmit={this.props.onNameSubmit}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return null
    }
  }
}

NameForm.propTypes = {
  gameState: PropTypes.object,
  morality: PropTypes.string,
  onNameSubmit: PropTypes.func
}

class CustomForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const nameValue = document.getElementById('nameField').value
    this.props.onNameSubmit(nameValue)
  }

  render() {
    let morality = this.props.morality
    if (morality === 'good') {
      return (
        <Form onSubmit={this.handleSubmit} className="animated fadeInRight">
          <Form.Field>
            <label>Doctor Name</label>
            <input placeholder="Doctor Name" id="nameField" />
          </Form.Field>
          <Button type="submit">Begin</Button>
        </Form>
      )
    } else {
      return (
        <Form onSubmit={this.handleSubmit} className="animated fadeInRight">
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

CustomForm.propTypes = {
  morality: PropTypes.string,
  onNameSubmit: PropTypes.func
}

export default NameForm
