import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import './style.css'
import 'animate.css'
import * as serviceWorker from './serviceWorker'
import { Grommet, grommet } from 'grommet'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const customTheme = {
  ...grommet,
  global: {
    ...global,
    font: {
      family: "\"Comfortaa\", cursive"
    }
  }
}

// "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\",  \"Helvetica Neue\", Arial, sans-serif,  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""

ReactDOM.render(
  <Provider store={store}>
    <Grommet full theme={customTheme}>
      <Game />
    </Grommet>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
