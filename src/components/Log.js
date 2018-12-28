import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Box, Button } from 'grommet'
import LogItem from './LogItem'
import { addLogItem } from '../redux/actions/actions'

class Log extends Component {
  static propTypes = {
    log: PropTypes.array
  }
  static defaultProps = {
    log: []
  }
  
  componentDidMount() {
    const { dispatch } = this.props
    setTimeout(() => {
      dispatch(addLogItem({ title: 'lolol', description: 'buttt' }))
    }, 3000)
  }

  render() {
    const { dispatch, log } = this.props
    return (
      <Box
        background="#424344"
        fill="vertical"
        gap="small"
        pad="small"
        width="300px"
      >
        {log.map((item, index) => (
          <LogItem {...item} key={`log-${index}`} />
        ))}
        <Button
          label="Test"
          onClick={() =>
            dispatch(addLogItem({ title: 'test', description: 'testy' }))
          }
        />
      </Box>
    )
  }
}

const mapStateToProps = ({ log }) => {
  return { log }
}

export default connect(mapStateToProps)(Log)
