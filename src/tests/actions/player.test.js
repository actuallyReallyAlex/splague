import {
  chooseMorality,
  chooseName,
  chooseType
} from '../../redux/actions/player'

describe('Player Actions', () => {
  it('Should setup chooseMorality action object.', () => {
    const action = chooseMorality('good')
    expect(action).toEqual({
      type: 'CHOOSE_MORALITY',
      payload: {
        morality: 'good'
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
