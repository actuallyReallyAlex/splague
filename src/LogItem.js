import React from 'react'
import { Comment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const authorAndTextStyle = {
  color: 'rgba(255, 255, 255, 0.87)'
}

const metaDataStyle = {
  color: 'rgba(255, 255, 255, 0.4)'
}

const LogItem = props => {
  return (
    <Comment className="animated fadeInUp" style={props.style}>
      <Comment.Avatar src="http://i.pravatar.cc/300" />
      <Comment.Content>
        <Comment.Author style={authorAndTextStyle}>{props.author}</Comment.Author>
        <Comment.Metadata>
          <div style={metaDataStyle}>{props.metaData}</div>
        </Comment.Metadata>
        <Comment.Text style={authorAndTextStyle}>{props.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

LogItem.propTypes = {
  style: PropTypes.object,
  author: PropTypes.string,
  metaData: PropTypes.string,
  text: PropTypes.string
}

export default LogItem
