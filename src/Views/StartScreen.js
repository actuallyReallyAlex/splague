import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MoralityButtonGroup from '../MoralityButtonGroup'
import PropTypes from 'prop-types'

const StartScreen = (props) => {
  return (
    // Render a start screen with morality buttons.
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
              onHover={props.onHover}
              resetBackground={props.resetBackground}
              handleChoice={props.handleChoice}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

StartScreen.propTypes = {
  onHover: PropTypes.func,
  resetBackground: PropTypes.func,
  handleChoice: PropTypes.func
}

export default StartScreen
