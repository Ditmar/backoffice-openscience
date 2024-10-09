import type { StoryObj } from '@storybook/react';
import Checkbox from './checkbox';
import type { CheckboxProps } from './types/iProps';

const meta = {
  title: 'ui/components/demo/atoms/checkbox',
  component: Checkbox,
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

type Story = StoryObj<CheckboxProps>;

export const Enabled: Story = {
  args: {
    label: 'Checkbox item',
    size: 'medium',
    disabled: false,
  },
};

export const Hover: Story = {
  args: {
    label: 'Checkbox item',
    size: 'medium',
    disabled: false,
  },
};

export const FocusEnabled: Story = {
  args: {
    label: 'Checkbox item',
    size: 'medium',
    autoFocus: true,
  },
};

export const Selected: Story = {
  args: {
    label: 'Checkbox item',
    size: 'medium',
    checked: true,
  },
};

export const FocusSelected: Story = {
  args: {
    label: 'Checkbox item',
    size: 'medium',
    checked: true,
    autoFocus: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox item',
    size: 'medium',
    disabled: true,
  },
};
