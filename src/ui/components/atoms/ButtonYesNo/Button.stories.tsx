import type { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'ui/components/atoms/buttonYesNo/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'],
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'No',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Yes',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Yes',
    variant: 'tertiary',
  },
};

export const Quaternary: Story = {
  args: {
    children: 'No',
    variant: 'quaternary',
  },
};

export const Quinary: Story = {
  args: {
    children: 'Yes',
    variant: 'quinary',
  },
};
