import { createStore, combineReducers } from 'redux'
import WorldReducer from '../reducers/world'

const store = createStore(
  combineReducers({
    world: WorldReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
