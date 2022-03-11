import React from 'react'

import { Ripple } from '../Ripple'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Pure Spinners',
  component: Ripple
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const RippleTemplate = (args) => <Ripple {...args} />

export const RippleComponent = RippleTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RippleComponent.args = {}
