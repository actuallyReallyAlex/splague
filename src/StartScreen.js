import React, { Component } from 'react'
import { Icon, Button, Container, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class StartScreen extends Component {
  // Changes color of body when user hovers over a morality button option
  onHover(morality) {
    const body = document.body
    if (morality === 'good') {
      body.style.backgroundColor = '#016936'
    } else {
      body.style.backgroundColor = '#B03060'
    }
  }

  // When the user hovers off either button, the body background color is reset to white
  resetBackground() {
    const body = document.body
    body.style.backgroundColor = 'white'
  }

  // When a user clicks on a morality button, update the state to set that morality
  chooseMorality(choice) {
    this.setState({ morality: choice })
  }

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
              <Button.Group size="massive">
                <Button
                  positive
                  className="good"
                  onMouseOver={() => {
                    this.onHover('good')
                  }}
                  onMouseLeave={() => {
                    this.resetBackground()
                  }}
                  onClick={() => this.props.handleChoice('good')}
                >
                  <Icon name="user md" />
                </Button>
                <Button.Or />
                <Button
                  negative
                  className="evil"
                  onMouseOver={() => {
                    this.onHover('evil')
                  }}
                  onMouseLeave={() => {
                    this.resetBackground()
                  }}
                  onClick={() => this.props.handleChoice('evil')}
                >
                  <Icon name="bug" />
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

StartScreen.propTypes = {
  handleChoice: PropTypes.func
}

export default StartScreen
