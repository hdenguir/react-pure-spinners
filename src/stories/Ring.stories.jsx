import React from 'react'

import { Ring } from '../Ring'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Pure Spinners',
  component: Ring
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const RingTemplate = (args) => <Ring {...args} />

export const RingComponent = RingTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RingComponent.args = {}
