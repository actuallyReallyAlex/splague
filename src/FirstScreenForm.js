import React, { Component } from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'

class FirstScreenForm extends Component {
  state = {
    buttonsAreGone: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({buttonsAreGone: true})
    }, 2000);
    
  }

  render() {
    if (this.state.buttonsAreGone) {
      return (
        <Form
          className="animated fadeInRight"
        >
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      )
    } else {
      return null
    }
  }
}

export default FirstScreenForm
