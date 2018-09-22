import React from 'react'
import { Comment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const goodAuthorAndTextStyle = {
  color: 'rgba(0,0,0,.87)'
}

const goodMetaDataStyle = {
  color: 'rgba(0, 0, 0, 0.4)'
}

const evilAuthorAndTextStyle = {
  color: 'rgba(255,255,255,.87)'
}

const evilMetaDataStyle = {
  color: 'rgba(255, 255, 255, 0.4)'
}

const LogItem = props => {
  return (
    <Comment
      className="animated fadeInUp slow"
      style={
        props.player.morality === 'good'
          ? goodAuthorAndTextStyle
          : evilAuthorAndTextStyle
      }
    >
      <Comment.Avatar src={props.avatar} />
      <Comment.Content>
        <Comment.Author
          style={
            props.player.morality === 'good'
              ? goodAuthorAndTextStyle
              : evilAuthorAndTextStyle
          }
        >
          {props.author}
        </Comment.Author>
        {props.metaData ? (
          <Comment.Metadata>
            <div
              style={
                props.player.morality === 'good'
                  ? goodMetaDataStyle
                  : evilMetaDataStyle
              }
            >
              {props.metaData}
            </div>
          </Comment.Metadata>
        ) : null}
        <Comment.Text
          style={
            props.player.morality === 'good'
              ? goodAuthorAndTextStyle
              : evilAuthorAndTextStyle
          }
        >
          {props.text}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

LogItem.propTypes = {
  style: PropTypes.object,
  author: PropTypes.string,
  metaData: PropTypes.string,
  text: PropTypes.string,
  avatar: PropTypes.string,
  player: PropTypes.object
}

export default LogItem
