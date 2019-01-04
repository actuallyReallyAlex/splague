import uiReducer from '../../redux/reducers/ui'
import { initialState } from '../fixtures/developmentState'

describe('UI Reducer', () => {
  it('Should set default state.', () => {
    const state = uiReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.ui)
  })

  it('Should change screen.', () => {
    const action = {
      type: 'CHANGE_SCREEN',
      payload: { screen: 'home' }
    }
    const state = uiReducer(initialState.ui, action)
    expect(state).toEqual({
      ...initialState.ui,
      screen: 'home'
    })
  })

  it('Should change background.', () => {
    const action = {
      type: 'CHANGE_BACKGROUND',
      payload: { background: 'blue' }
    }
    const state = uiReducer(initialState.ui, action)
    expect(state).toEqual({
      ...initialState.ui,
      background: 'blue'
    })
  })

  it('Should transition screen.', () => {
    const action = {
      type: 'TRANSITION_SCREEN',
      payload: { isTransitioning: true, transitionClasses: 'active fadeOut' }
    }
    const state = uiReducer(initialState.ui, action)
    expect(state).toEqual({
      ...initialState.ui,
      isTransitioning: true,
      transitionClasses: 'active fadeOut'
    })
  })
})
