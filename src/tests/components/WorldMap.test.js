import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import WorldMap from '../../components/WorldMap'

describe('<WorldMap />', () => {
  it('Should render snapshot of WorldMap component.', () => {
    const component = renderer.create(<WorldMap />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
