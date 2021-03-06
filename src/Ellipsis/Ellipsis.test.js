import React from 'react'
import renderer from 'react-test-renderer'
import Ellipsis from './Ellipsis'

it('renders correctly', () => {
  const tree = renderer.create(<Ellipsis />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', () => {
  const { root } = renderer.create(<Ellipsis className="spinner" />)

  expect(root.findByType('div').props.className).toEqual('rps-ellipsis spinner')
})

it('sets CSS vars with props', () => {
  const { root } = renderer.create(
    <Ellipsis
      size={100}
      color="#d36ac2"
      style={{ margin: 20 }}
      className="spinner"
    />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rps-ellipsis-size': '100px',
    '--rps-ellipsis-color': '#d36ac2',
    margin: 20
  })
})
