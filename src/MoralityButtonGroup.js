import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const MoralityButtonGroup = props => {
  return (
    <Button.Group
      size="massive"
      className={props.className}
    >
      <Button
        positive
        className="good"
        onMouseOver={() => {
          props.startScreenMethods.handleHover('good')
        }}
        onMouseLeave={() => {
          props.startScreenMethods.resetBackground()
        }}
        onClick={() => props.startScreenMethods.handleMoralityChoice('good')}
      >
        <Icon name="user md" />
      </Button>
      <Button.Or />
      <Button
        negative
        className="evil"
        onMouseOver={() => {
          props.startScreenMethods.handleHover('evil')
        }}
        onMouseLeave={() => {
          props.startScreenMethods.resetBackground()
        }}
        onClick={() => props.startScreenMethods.handleMoralityChoice('evil')}
      >
        <Icon name="bug" />
      </Button>
    </Button.Group>
  )
}

MoralityButtonGroup.propTypes = {
  startScreenMethods: PropTypes.object,
  className: PropTypes.string
}

export default MoralityButtonGroup
