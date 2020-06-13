import playerReducer from '../../redux/reducers/player'
import { initialState } from '../fixtures/developmentState'

describe('Player Reducer', () => {
  it('Should set default state.', () => {
    const state = playerReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.player)
  })

  it('Should set mode.', () => {
    const action = {
      type: 'CHOOSE_MODE',
      payload: { mode: 'cure' }
    }
    const state = playerReducer(initialState.player, action)
    expect(state).toEqual({
      mode: 'cure',
      name: null,
      type: null
    })
  })

  it('Should set name.', () => {
    const action = {
      type: 'CHOOSE_NAME',
      payload: { name: 'Alex' }
    }
    const state = playerReducer(initialState.player, action)
    expect(state).toEqual({
      mode: null,
      name: 'Alex',
      type: null
    })
  })

  it('Should set type.', () => {
    const action = {
      type: 'CHOOSE_TYPE',
      payload: { type: 'Bubonic' }
    }
    const state = playerReducer(initialState.player, action)
    expect(state).toEqual({
      mode: null,
      name: null,
      type: 'Bubonic'
    })
  })
})
