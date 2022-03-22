import React from 'react'
import { Circle as CircleComp } from '../Circle'

export default {
  title: 'Components/Circle',
  component: CircleComp,
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

const CircleTemplate = (args) => <CircleComp {...args} />

export const Circle = CircleTemplate.bind({})
Circle.args = {
  color: '#d36ac2',
  size: 64
}
