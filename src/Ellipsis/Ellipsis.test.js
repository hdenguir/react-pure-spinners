import Ellipsis from './Ellipsis'

import React from 'react'

import renderer from 'react-test-renderer'

it('Redners Correctly', () => {
  const tree = renderer.create(<Ellipsis />).toJSON()
  expect(tree).toMatchSnapshot()
})
