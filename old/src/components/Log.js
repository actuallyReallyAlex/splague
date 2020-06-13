import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { Box, Button, Heading } from 'grommet'
import LogItem from './LogItem'
import { addLogItem } from '../redux/actions/log'

export class Log extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    log: PropTypes.array.isRequired,
    // From mapStataeToProps()
    ui: PropTypes.object.isRequired
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
    const { dispatch, log, ui } = this.props
    return (
      <Box
        className={
          ui.isLogOpen ? 'animated slideInRight' : 'animated slideOutRight'
        }
        fill="vertical"
        height="100%"
        gap="small"
        overflow="auto"
        pad="small"
        style={{ background: 'rgb(30, 32, 46)', transition: '1s' }}
        width={ui.isLogOpen ? '20%' : '0'}
      >
        <Box direction="row" pad="small">
          <Heading level="2" margin="none">
            Log
          </Heading>
        </Box>
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

const mapStateToProps = ({ log, ui }) => {
  return { log, ui }
}

export default connect(mapStateToProps)(Log)
