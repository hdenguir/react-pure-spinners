import React from 'react'
import { Ripple as RippleComp } from '../Ripple'

export default {
  title: 'Components/Ripple',
  component: RippleComp,
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

const RippleTemplate = (args) => <RippleComp {...args} />

export const Ripple = RippleTemplate.bind({})
Ripple.args = {
  color: '#d36ac2',
  size: 64,
  thickness: 6
}
