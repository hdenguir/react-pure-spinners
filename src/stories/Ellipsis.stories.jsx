import React from 'react'
import { Ellipsis as EllipsisComp } from '../Ellipsis'

export default {
  title: 'Components/Ellipsis',
  component: EllipsisComp,
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

const EllipsisTemplate = (args) => <EllipsisComp {...args} />

export const Ellipsis = EllipsisTemplate.bind({})
Ellipsis.args = {
  color: '#d36ac2',
  size: 64
}
