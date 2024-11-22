import React from 'react';
import InputField from 'src/components/Molecules/InputField';

export default {
  title: 'Molecules/InputField',
  component: InputField,
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
  label: 'Example Label',
};
