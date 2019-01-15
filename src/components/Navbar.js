import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading, Text, Button } from 'grommet'
import { Chat } from 'grommet-icons'
import { closeLog, openLog } from '../redux/actions/ui'

class Navbar extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    player: PropTypes.object.isRequired,
    // From mapStateToProps()
    ui: PropTypes.object.isRequired
  }

  handleOpenCloseLog = () => {
    const { dispatch } = this.props
    const { isLogOpen } = this.props.ui
    isLogOpen ? dispatch(closeLog()) : dispatch(openLog())
  }
  render() {
    const { player, ui } = this.props
    return (
      <Box
        align="center"
        direction="row"
        height="70px"
        justify="between"
        pad="small"
        style={{ background: 'rgb(32, 35, 50)' }}
      >
        <Box>
          <Heading margin="none" level="2">
            Splague
          </Heading>
        </Box>
        <Box align="center" direction="row" gap="small">
          <Box>
            <Button
              icon={<Chat color={ui.isLogOpen && 'brand'} />}
              onClick={this.handleOpenCloseLog}
            />
          </Box>
          <Box>
            <Text>{player.name}</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = ({ player, ui }) => {
  return { player, ui }
}

export default connect(mapStateToProps)(Navbar)
