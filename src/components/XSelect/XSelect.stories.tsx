import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  XSelect from './XSelect';

import './XSelect.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Component/Select',
    component: XSelect,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
      disabled : { control: 'boolean' },
        label : { control: 'text' },
        options : { control: 'array' },
        selectValue : { control: 'text' },
        selectKey : { control: 'text' },
        onChange : { action: 'onChange' },
    },
  } as ComponentMeta<typeof XSelect>;

  const Template: ComponentStory<typeof XSelect> = (args) => <XSelect {...args} />;

    export const Default = Template.bind({});
    Default.args = {
        label: 'Select a car',
        options : [ { name: 'Audi', value: 'Audi' }, { name: 'BMW', value: 'BMW' }, { name: 'Mercedes', value: 'Mercedes' } , { name: 'Volkswagen', value: 'Volkswagen' } , { name: 'Ford', value: 'Ford' } ],
        selectKey: 'name',
        selectValue: 'value',
        onChange: (e) => {
            console.log(e.target.value);
        },
        className: 'select-stories',
                // selectValue: 'value',
        // selectKey: 'label',
     
    }





