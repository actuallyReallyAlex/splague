import { infectPopulation, setPlagueSpeed } from '../../redux/actions/plague'

describe('Plague Actions', () => {
  it('Should setup infectPopulation action object.', () => {
    const action = infectPopulation(10)
    expect(action).toEqual({
      type: 'INFECT_POPULATION',
      payload: {
        numberToInfect: 10
      }
    })
  })

  it('Should setup setPlagueSpeed action object.', () => {
    const action = setPlagueSpeed(1000)
    expect(action).toEqual({
      type: 'SET_PLAGUE_SPEED',
      payload: {
        plagueSpeed: 1000
      }
    })
  })
})
