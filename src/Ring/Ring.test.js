import React from 'react'
import renderer from 'react-test-renderer'
import Ring from './Ring'

it('renders correctly', () => {
  const tree = renderer.create(<Ring />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', () => {
  const { root } = renderer.create(<Ring className="spin" />)

  expect(root.findByType('div').props.className).toEqual('rps-ring spin')
})

it('sets CSS vars with props', () => {
  const { root } = renderer.create(
    <Ring
      size={100}
      thickness={6}
      color="#d36ac2"
      style={{ margin: 20 }}
      className="spin"
    />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rps-ring-size': '100px',
    '--rps-ring-color': '#d36ac2',
    '--rps-ring-thickness': '6px',
    margin: 20
  })
})
