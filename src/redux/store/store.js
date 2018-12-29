import { createStore, combineReducers } from 'redux'
import cureReducer from '../reducers/cure'
import logReducer from '../reducers/log'
import plagueReducer from '../reducers/plague'
import playerReducer from '../reducers/player'
import uiReducer from '../reducers/ui'
import worldReducer from '../reducers/world'

const store = createStore(
  combineReducers({
    cure: cureReducer,
    log: logReducer,
    plague: plagueReducer,
    player: playerReducer,
    ui: uiReducer,
    world: worldReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
