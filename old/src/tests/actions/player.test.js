import {
  chooseMode,
  chooseName,
  chooseType
} from '../../redux/actions/player'

describe('Player Actions', () => {
  it('Should setup chooseMode action object.', () => {
    const action = chooseMode('cure')
    expect(action).toEqual({
      type: 'CHOOSE_MODE',
      payload: {
        mode: 'cure'
      }
    })
  })

  it('Should setup chooseName action object.', () => {
    const action = chooseName('Alex')
    expect(action).toEqual({
      type: 'CHOOSE_NAME',
      payload: {
        name: 'Alex'
      }
    })
  })

  it('Should setup chooseType action object.', () => {
    const action = chooseType('Bubonic')
    expect(action).toEqual({
      type: 'CHOOSE_TYPE',
      payload: {
        type: 'Bubonic'
      }
    })
  })
})
