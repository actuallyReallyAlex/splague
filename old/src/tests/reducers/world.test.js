import worldReducer from '../../redux/reducers/world'
import { initialState } from '../fixtures/developmentState'

describe('World Reducer', () => {
  it('Should set default state.', () => {
    const state = worldReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.world)
  })

  it('Should increase day count by 1.', () => {
    const action = {
      type: 'INCREASE_DAY'
    }
    const state = worldReducer(initialState.world, action)
    expect(state).toEqual({
      ...initialState.world,
      day: initialState.world.day + 1
    })
  })

  it('Should set dayLength.', () => {
    const action = {
      type: 'SET_DAY_LENGTH',
      payload: { dayLength: 2 }
    }
    const state = worldReducer(initialState.world, action)
    expect(state).toEqual({
      ...initialState.world,
      dayLength: 12000 / action.payload.dayLength
    })
  })
})
