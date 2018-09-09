import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import MoralityButtonGroup from './MoralityButtonGroup'

class StartScreen extends Component {
  // When a user clicks on a morality button, update the state to set that morality
  // ! This might be not used ...
  // chooseMorality(choice) {
  //   this.setState({ morality: choice })
  // }

  render() {
    return (
      <Container textAlign="center" className="full-height">
        <Grid
          inverted
          columns={1}
          divided
          verticalAlign="middle"
          className="full-height"
        >
          <Grid.Row>
            <Grid.Column>
              <MoralityButtonGroup 
                onHover={this.props.onHover}
                resetBackground={this.props.resetBackground}
                handleChoice={this.props.handleChoice}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

StartScreen.propTypes = {
  onHover: PropTypes.func,
  handleChoice: PropTypes.func,
  resetBackground: PropTypes.func
}

export default StartScreen
