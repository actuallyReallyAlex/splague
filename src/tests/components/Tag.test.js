import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Tag } from '../../components/Tag'

describe('<Tag />', () => {
  it('Should render snapshot of Tag component.', () => {
    const component = renderer.create(<Tag label="100" />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
