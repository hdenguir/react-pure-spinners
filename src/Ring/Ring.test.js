import Ring from './Ring'

import React from 'react'

import renderer from 'react-test-renderer'

it('Redners Correctly', () => {
  const tree = renderer.create(<Ring />).toJSON()
  expect(tree).toMatchSnapshot()
})
