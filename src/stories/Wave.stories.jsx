import React from 'react'

import { Wave as WaveComp } from '../Wave'

export default {
  title: 'Components/Wave',
  component: WaveComp,
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

const WaveTemplate = (args) => <WaveComp {...args} />

export const Wave = WaveTemplate.bind({})
Wave.args = {
  color: '#d36ac2',
  size: 64,
  thickness: 6
}
