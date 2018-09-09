import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const MoralityButtonGroup = props => {
  return (
    <Button.Group
      size="massive"
      className={props.animated ? `animated ${props.animated}` : 'morality-button-group'}
    >
      <Button
        positive
        className="good"
        onMouseOver={() => {
          props.onHover('good')
        }}
        onMouseLeave={() => {
          props.resetBackground()
        }}
        onClick={() => props.handleChoice('good')}
      >
        <Icon name="user md" />
      </Button>
      <Button.Or />
      <Button
        negative
        className="evil"
        onMouseOver={() => {
          props.onHover('evil')
        }}
        onMouseLeave={() => {
          props.resetBackground()
        }}
        onClick={() => props.handleChoice('evil')}
      >
        <Icon name="bug" />
      </Button>
    </Button.Group>
  )
}

MoralityButtonGroup.propTypes = {
  onHover: PropTypes.func,
  resetBackground: PropTypes.func,
  handleChoice: PropTypes.func,
  animated: PropTypes.string
}

export default MoralityButtonGroup
