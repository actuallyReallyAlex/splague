import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import LogItem from './LogItem'
import { addLogItem } from '../redux/actions/actions'

class Log extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    setTimeout(() => {
      dispatch(addLogItem({ title: 'lolol', description: 'buttt' }))
    }, 3000)
  }

  render() {
    const { log } = this.props
    return (
      <Box
        background="#424344"
        fill="vertical"
        gap="small"
        pad="small"
        width="300px"
      >
        {log.map(({ additionalInfo, description, icon, title }) => (
          <LogItem
            additionalInfo={additionalInfo}
            description={description}
            icon={icon}
            title={title}
          />
        ))}
      </Box>
    )
  }
}

const mapStateToProps = ({ log }) => {
  return { log }
}

export default connect(mapStateToProps)(Log)
