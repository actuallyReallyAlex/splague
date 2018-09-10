import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import NameForm from '../NameForm'
import MoralityButtonGroup from '../MoralityButtonGroup'
import PropTypes from 'prop-types'

const NameFormScreen = props => {
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
              onHover={props.onHover}
              resetBackground={props.resetBackground}
              handleChoice={props.handleChoice}
              animated="fadeOutLeft delay-1s"
            />
            <NameForm
              onNameSubmit={props.onNameSubmit}
              morality={props.morality}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

NameFormScreen.propTypes = {
  onHover: PropTypes.func,
  resetBackground: PropTypes.func,
  handleChoice: PropTypes.func,
  onNameSubmit: PropTypes.func,
  morality: PropTypes.string
}

export default NameFormScreen
