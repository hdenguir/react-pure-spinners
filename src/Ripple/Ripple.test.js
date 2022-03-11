import Ripple from './Ripple'

import React from 'react'

import renderer from 'react-test-renderer'

it('Redners Correctly', () => {
  const tree = renderer.create(<Ripple />).toJSON()
  expect(tree).toMatchSnapshot()
})
