import React from 'react'
import renderer from 'react-test-renderer'
import Ripple from './Ripple'

it('renders correctly', () => {
  const tree = renderer.create(<Ripple />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', () => {
  const { root } = renderer.create(<Ripple className="spin" />)

  expect(root.findByType('div').props.className).toEqual('rps-ripple spin')
})

it('sets CSS vars with props', () => {
  const { root } = renderer.create(
    <Ripple
      size={100}
      thickness={6}
      color="#d36ac2"
      style={{ margin: 20 }}
      className="spin"
    />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rps-ripple-size': '100px',
    '--rps-ripple-thickness': '6px',
    '--rps-ripple-color': '#d36ac2',
    margin: 20
  })
})
