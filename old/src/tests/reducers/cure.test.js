import cureReducer from '../../redux/reducers/cure';
import { initialState } from '../fixtures/developmentState';

describe("Cure Reducer", () => {
  it("Should set default state.", () => {
    const state = cureReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(initialState.cure)
  })
})
