import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import StartMenuForm from '../StartMenuForm'
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
            <StartMenuForm
              input={true}
              player={props.player}
              nameFormMethods={props.nameFormMethods}
              className={props.className}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

NameFormScreen.propTypes = {
  className: PropTypes.string,
  player: PropTypes.object,
  nameFormMethods: PropTypes.object
}

export default NameFormScreen
