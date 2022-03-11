import React from 'react'

import { Ellipsis } from '../Ellipsis'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Pure Spinners',
  component: Ellipsis
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const EllipsisTemplate = (args) => <Ellipsis {...args} />

export const EllipsisComponent = EllipsisTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EllipsisComponent.args = {}
