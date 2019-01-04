import {
  changeScreen,
  changeBackground,
  transitionScreen
} from '../../redux/actions/ui'

describe('UI Actions', () => {
  it('Should setup changeScreen action object.', () => {
    const action = changeScreen('Home')
    expect(action).toEqual({
      type: 'CHANGE_SCREEN',
      payload: {
        screen: 'Home'
      }
    })
  })

  it('Should setup changeBackground action object.', () => {
    const action = changeBackground('#000')
    expect(action).toEqual({
      type: 'CHANGE_BACKGROUND',
      payload: {
        background: '#000'
      }
    })
  })

  it('Should setup transitionScreen action object.', () => {
    const action = transitionScreen(true, 'animated fadeOut')
    expect(action).toEqual({
      type: 'TRANSITION_SCREEN',
      payload: {
        isTransitioning: true,
        transitionClasses: 'animated fadeOut'
      }
    })
  })
})
