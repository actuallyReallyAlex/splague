import { increaseDay, setDayLength } from '../../redux/actions/world'

describe('World Actions', () => {
  it('Should setup increaseDay action object.', () => {
    const action = increaseDay()
    expect(action).toEqual({
      type: 'INCREASE_DAY'
    })
  })

  it('Should setup setDayLength action object.', () => {
    const action = setDayLength(1000)
    expect(action).toEqual({
      type: 'SET_DAY_LENGTH',
      payload: {
        dayLength: 1000
      }
    })
  })
})
