import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { Home } from '../../screens/Home'
import developmentState from '../fixtures/developmentState'

describe('<Home />', () => {
  it('Should render snapshot of Home screen.', () => {
    const { player, ui } = developmentState
    const renderer = new ShallowRenderer()
    renderer.render(<Home player={player} ui={ui} />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
