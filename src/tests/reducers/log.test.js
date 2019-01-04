import logReducer from '../../redux/reducers/log'
import { initialState } from '../fixtures/developmentState'
import log from '../fixtures/log'

describe('Log Reducer', () => {
  it('Should set default state.', () => {
    const state = logReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.log)
  })

  it('Should add log item.', () => {
    const action = {
      type: 'ADD_LOG_ITEM',
      payload: { logItem: log[0] }
    }
    const state = logReducer(initialState.log, action)
    expect(state).toEqual([log[0]])
  })
})
