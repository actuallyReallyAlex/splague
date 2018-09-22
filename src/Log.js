import React from 'react'
import { Comment, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import LogItem from './LogItem'
import './style.css'

const logStyle = {
  color: 'white'
}

const Log = props => {
  return (
    <Comment.Group>
      <Header as="h3" style={logStyle}>
        Log
        <Button
          size="mini"
          className="clear-log-button"
          onClick={props.gameMethods.clearLog}
        >
          Clear
        </Button>
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
  player: PropTypes.object,
  gameMethods: PropTypes.object
}

export default Log
