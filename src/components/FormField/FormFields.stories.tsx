import React from 'react';
import FormFields from './FormFields';

export default {
  title: 'Components/FormFields',
  component: FormFields,
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Placeholder text' },
  },
};

export function Default({ placeholder }: { placeholder: string }) {
  return <FormFields placeholder={placeholder} />;
}
