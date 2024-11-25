import React from 'react';
import InputField from './InputField';
import { FiMail } from 'react-icons/fi';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    icon: { control: 'boolean' },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'Placeholder text',
  value: '',
  onChange: () => {},
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <FiMail />,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'This field is required',
};
