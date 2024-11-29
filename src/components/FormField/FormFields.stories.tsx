import React from 'react';
import FormFields from './FormFields';

export default {
  title: 'Components/FormFields',
  component: FormFields,
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Placeholder text' },
  },
};


export const Default = (args: { placeholder: string }) => (
  <FormFields placeholder={args.placeholder} />
);
