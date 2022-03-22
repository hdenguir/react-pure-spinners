import React from 'react'
import { Grid as GridComp } from '../Grid'

export default {
  title: 'Components/Grid',
  component: GridComp,
  argTypes: {
    size: {
      control: { type: 'range', min: 20, max: 200, step: 1 }
    },
    color: {
      control: { type: 'color' }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  }
}

const GridTemplate = (args) => <GridComp {...args} />

export const Grid = GridTemplate.bind({})
Grid.args = {
  color: '#d36ac2',
  size: 64
}
