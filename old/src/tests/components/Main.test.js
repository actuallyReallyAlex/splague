import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import Main from '../../components/Main'

describe('<Main />', () => {
  it('Should render snapshot of Main component.', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Main />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
