// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import { Thing } from '../src';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Thing from "../src/components/Thing";

export default {
  title: 'Component/Thing',
  component: Thing,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Thing>;

// const meta: Meta = {
//   title: 'Welcome',
//   component: Thing,
//   argTypes: {
//     children: {
//       control: {
//         type: 'text',
//       },
//     },
//   },
//   parameters: {
//     controls: { expanded: true },
//   },
// };

// export default meta;

// const Template: Story<Props> = args => <Thing {...args} />;

const Template: ComponentStory<typeof Thing> = (args) => <Thing {...args} />;


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
