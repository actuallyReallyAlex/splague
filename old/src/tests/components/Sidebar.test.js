import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { Sidebar } from '../../components/Sidebar'
import { developmentState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<Sidebar />', () => {
  it('Should render snapshot of Sidebar component.', () => {
    const { cure, log, plague, player, ui, world } = developmentState
    const renderer = new ShallowRenderer()
    renderer.render(
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
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
