import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class MainMenu extends Component {
  render() {
    // Initial population is passed down as prop from App
    let population = this.props.population

    // Alive and Dead Texts come from MainMenu state
    let aliveText = `Alive: ${population.alive}`
    let deadText = `Dead: ${population.dead}`

    return (
      <Menu vertical inverted fixed="top">
        <Menu.Item>
          <Menu.Header>
            <Image
              src="https://www.splague.com/favicon/favicon.ico"
              avatar
              spaced
            />
            Splague
          </Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>World Population</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="alive" content={aliveText} />
            <Menu.Item name="dead" content={deadText} />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

MainMenu.propTypes = {
  population: PropTypes.object
}

export default MainMenu
