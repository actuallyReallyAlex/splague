import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import './style.css'
import 'animate.css'
import * as serviceWorker from './serviceWorker'
import { Grommet, grommet } from 'grommet'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <Grommet full theme={grommet}>
      <Game />
    </Grommet>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
