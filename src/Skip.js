import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Skip = props => {
  return (
    <Button className="skip-button" onClick={props.startScreenMethods.skip}>
      Skip
    </Button>
  )
}

Skip.propTypes = {
  startScreenMethods: PropTypes.object
}

export default Skip
