import React from 'react'
import renderer from 'react-test-renderer'
import Grid from './Grid'

it('renders correctly', () => {
  const tree = renderer.create(<Grid />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', () => {
  const { root } = renderer.create(<Grid className="spin" />)

  expect(root.findByType('div').props.className).toEqual('rps-grid spin')
})

it('sets CSS vars with props', () => {
  const { root } = renderer.create(
    <Grid size={100} color="#d36ac2" style={{ margin: 20 }} className="spin" />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rps-grid-size': '100px',
    '--rps-grid-color': '#d36ac2',
    margin: 20
  })
})
