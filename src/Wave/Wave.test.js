import React from 'react'
import renderer from 'react-test-renderer'
import Wave from './Wave'

it('renders correctly', () => {
  const tree = renderer.create(<Wave />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', () => {
  const { root } = renderer.create(<Wave className="spin" />)

  expect(root.findByType('div').props.className).toEqual('rps-wave spin')
})

it('sets CSS vars with props', () => {
  const { root } = renderer.create(
    <Wave
      size={100}
      thickness={6}
      color="#d36ac2"
      style={{ margin: 20 }}
      className="spin"
    />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rps-wave-size': '100px',
    '--rps-wave-thickness': '6px',
    '--rps-wave-color': '#d36ac2',
    margin: 20
  })
})
