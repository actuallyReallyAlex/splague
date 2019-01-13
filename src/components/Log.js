import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { Box, Button } from 'grommet'
import LogItem from './LogItem'
import { addLogItem } from '../redux/actions/log'

export class Log extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    log: PropTypes.array.isRequired
  }
  static defaultProps = {
    log: []
  }

  componentDidMount() {
    const { dispatch } = this.props
    setTimeout(() => {
      dispatch(
        addLogItem({
          title: 'Splague',
          description: 'Welcome to Splague!',
          time: moment().format('h:mm A')
        })
      )
    }, 3000)
  }

  render() {
    const { dispatch, log } = this.props
    return (
      <Box
        fill="vertical"
        gap="small"
        overflow="scroll"
        pad="small"
        style={{ background: 'rgb(30, 32, 46)' }}
        width="20%"
      >
        {log.map((item, index) => (
          <LogItem {...item} key={`log-${index}`} />
        ))}
        <Button
          label="Test"
          onClick={() =>
            dispatch(
              addLogItem({
                title: 'test',
                description: 'testy',
                time: moment().format('h:mm A')
              })
            )
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
