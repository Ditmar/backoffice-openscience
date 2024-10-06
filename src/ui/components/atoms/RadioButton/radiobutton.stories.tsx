import type { StoryObj } from '@storybook/react';
import RadioButton from './radiobutton';
import type { RadioButtonProps } from './types/IProps';

const meta = {
  title: 'ui/components/atoms/radiobutton',
  component: RadioButton,
  argTypes: {
    onChange: {
      action: 'changed',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Enabled: Story = {
  args: {
    label: 'Radio button item',
    size: 'medium',
    disabled: false,
  },
};

export const FocusEnabled: Story = {
  args: {
    label: 'Radio button item',
    size: 'medium',
    autoFocus: true,
  },
};

export const Selected: Story = {
  args: {
    label: 'Radio button item',
    size: 'medium',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Radio button item',
    size: 'medium',
    disabled: true,
  },
};
