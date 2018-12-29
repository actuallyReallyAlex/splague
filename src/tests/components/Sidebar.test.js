import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Sidebar } from '../../components/Sidebar'
import developmentState from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<Sidebar />', () => {
  it('Should render snapshot of Sidebar component.', () => {
    const { cure, log, plague, player, ui, world } = developmentState
    const component = renderer
      .create(
        <Sidebar
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
