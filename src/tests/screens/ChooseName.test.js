import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ChooseName } from '../../screens/ChooseName'
import { developmentState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<ChooseName />', () => {
  it('Should render snapshot of ChooseName screen.', () => {
    const { cure, log, plague, player, ui, world } = developmentState
    const component = renderer
      .create(
        <ChooseName
          cure={cure}
          dispatch={dispatch}
          log={log}
          plague={plague}
          player={player}
          ui={ui}
          world={world}
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
