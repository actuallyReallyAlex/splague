import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Main from '../../components/Main'

describe('<Main />', () => {
  it('Should render snapshot of Main component.', () => {
    const component = renderer.create(<Main />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
