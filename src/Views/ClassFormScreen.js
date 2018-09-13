import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import StartMenuForm from '../StartMenuForm'
import PropTypes from 'prop-types'

const ClassFormScreen = props => {
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
            <StartMenuForm
              dropdown={true}
              player={props.player}
              classFormMethods={props.classFormMethods}
              className={props.className}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

ClassFormScreen.propTypes = {
  className: PropTypes.string,
  player: PropTypes.object,
  classFormMethods: PropTypes.object
}

export default ClassFormScreen
