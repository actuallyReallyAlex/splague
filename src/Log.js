import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import LogItem from './LogItem'

const logStyle = {
  color: 'white'
}

const Log = props => {
  return (
    <Comment.Group>
      <Header as="h3" style={logStyle}>
        Log
      </Header>

      {Object.keys(props.log).map((logItem, i) => {
        return (
          <LogItem
            key={i}
            author="Plague"
            metaData="Day 0"
            text={props.log[logItem]}
          />
        )
      })}
    </Comment.Group>
  )
}

Log.propTypes = {
  log: PropTypes.object
}

export default Log
