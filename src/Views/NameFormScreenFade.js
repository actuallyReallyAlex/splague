import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import NameForm from '../NameForm'
import PropTypes from 'prop-types'


const NameFormScreenFade = props => {
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
            <NameForm
              onNameSubmit={props.onNameSubmit}
              morality={props.morality}
              nameValue={props.nameValue}
              fadeOut={props.fadeOut}
              setToMainMenu={props.setToMainMenu}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

NameFormScreenFade.propTypes = {
  onNameSubmit: PropTypes.func,
  morality: PropTypes.string,
  nameValue: PropTypes.string,
  fadeOut: PropTypes.bool,
  setToMainMenu: PropTypes.func
}

export default NameFormScreenFade
