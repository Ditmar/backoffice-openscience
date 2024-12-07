import type { Meta, StoryObj } from '@storybook/react';
import TextInputErrorDisabled from './TextInputErrorDisabled';
import type { TextInputErrorDisabledProps } from './types/IProps';

const meta: Meta<typeof TextInputErrorDisabled> = {
<<<<<<< HEAD
  title: 'Components/Atoms/TextInputErrorDisabled',
  component: TextInputErrorDisabled,
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    errorMessage: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
=======
  title: 'Components/Atoms/TextInputErrorDisabled.tsx',
  component: TextInputErrorDisabled,
>>>>>>> 5c8f08845e09e24ebdd51ef38f1dcb3ffe3c2c2b
};

export default meta;

type Story = StoryObj<TextInputErrorDisabledProps>;

export const ErrorWithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder text',
    errorMessage: 'Error message here',
    variant: 'medium',
    isDisabled: false,
<<<<<<< HEAD
=======
    icon: '',
>>>>>>> 5c8f08845e09e24ebdd51ef38f1dcb3ffe3c2c2b
  },
};

export const ErrorWithInput: Story = {
  args: {
    placeholder: 'User Input Text',
    errorMessage: 'Error message here',
    value: 'User Input Text',
    variant: 'small',
  },
};

export const DisabledInput: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Placeholder text',
    variant: 'small',
  },
};
