import { addLogItem } from '../../redux/actions/log'

describe('Log Actions', () => {
  it('Should setup addLogItem action object.', () => {
    const logItem = { title: 'Test title', description: 'test description' }
    const action = addLogItem(logItem)
    expect(action).toEqual({
      type: 'ADD_LOG_ITEM',
      payload: {
        logItem
      }
    })
  })
})
