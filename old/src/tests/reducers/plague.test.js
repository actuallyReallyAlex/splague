import plagueReducer from '../../redux/reducers/plague'
import { initialState } from '../fixtures/developmentState'

describe('Plague Reducer', () => {
  it('Should set default state.', () => {
    const state = plagueReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.plague)
  })

  it('Should set plague speed.', () => {
    const action = {
      type: 'SET_PLAGUE_SPEED',
      payload: { plagueSpeed: 500 }
    }
    const state = plagueReducer(initialState.plague, action)
    expect(state).toEqual({ mutations: 0, speed: 500 })
  })
})
