import React from 'react'
import { Ring as RingComp } from '../Ring'

export default {
  title: 'Components/Ring',
  component: RingComp,
  argTypes: {
    size: {
      control: { type: 'range', min: 20, max: 200, step: 1 }
    },
    thickness: {
      control: { type: 'range', min: 2, max: 12, step: 1 }
    },
    color: {
      control: { type: 'color' }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  }
}

const RingTemplate = (args) => <RingComp {...args} />

export const Ring = RingTemplate.bind({})
Ring.args = {
  color: '#d36ac2',
  size: 64,
  thickness: 6
}
