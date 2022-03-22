import React from 'react'
import renderer from 'react-test-renderer'
import Circle from './Circle'

it('renders correctly', () => {
  const tree = renderer.create(<Circle />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', () => {
  const { root } = renderer.create(<Circle className="spin" />)

  expect(root.findByType('div').props.className).toEqual('rps-circle spin')
})

it('sets CSS vars with props', () => {
  const { root } = renderer.create(
    <Circle
      size={100}
      color="#d36ac2"
      style={{ margin: 20 }}
      className="spin"
    />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rps-circle-size': '100px',
    '--rps-circle-color': '#d36ac2',
    margin: 20
  })
})
