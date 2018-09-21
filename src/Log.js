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
        const dictionary = {
          gameStart: {
            author: 'Splague',
            metaData: null,
            avatar: 'http://i.pravatar.cc/300'
          },
          patientZero: {
            author: props.player.name,
            metaData: 'Day 0',
            avatar: 'http://i.pravatar.cc/300'
          }
        }

        return (
          <LogItem
            key={i}
            author={dictionary[logItem].author}
            metaData={dictionary[logItem].metaData}
            text={props.log[logItem]}
            avatar={dictionary[logItem].avatar}
          />
        )
      })}
    </Comment.Group>
  )
}

Log.propTypes = {
  log: PropTypes.object,
  player: PropTypes.object
}

export default Log
