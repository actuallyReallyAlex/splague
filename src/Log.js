import React from 'react'
import { Comment, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import LogItem from './LogItem'
import './style.css'
import splagueIcon from './splague.svg'
import patientZeroIcon from './patientZero.svg'

const goodLogStyle = {
  color: 'rgba(0,0,0,.87)'
}

const evilLogStyle = {
  color: 'rgba(255,255,255,.87)'
}

const Log = props => {
  return (
    <Comment.Group>
      <Header
        as="h3"
        style={props.player.morality === 'good' ? goodLogStyle : evilLogStyle}
      >
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
            avatar: splagueIcon
          },
          patientZero: {
            author: props.player.name,
            metaData: 'Day 0',
            avatar: patientZeroIcon
          }
        }

        return (
          <LogItem
            key={i}
            author={dictionary[logItem].author}
            metaData={dictionary[logItem].metaData}
            text={props.log[logItem]}
            avatar={dictionary[logItem].avatar}
            player={props.player}
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
