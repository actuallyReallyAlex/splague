import playerReducer from '../../redux/reducers/player'
import { initialState } from '../fixtures/developmentState'

describe('Player Reducer', () => {
  it('Should set default state.', () => {
    const state = playerReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.player)
  })

  it('Should set morality.', () => {
    const action = {
      type: 'CHOOSE_MORALITY',
      payload: { morality: 'good' }
    }
    const state = playerReducer(initialState.player, action)
    expect(state).toEqual({
      morality: 'good',
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
      morality: null,
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
      morality: null,
      name: null,
      type: 'Bubonic'
    })
  })
})
