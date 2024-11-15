import type { StoryObj, Meta } from '@storybook/react';
import DangerButton from './DangerButton';

const meta = {
  title: 'ui/components/atoms/DangerButton',
  component: DangerButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: ['danger-primary', 'danger-secondary', 'danger-tertiary', 'danger-disabled'],
  },
} as Meta<typeof DangerButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '+',
    variant: 'danger-primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '+',
    variant: 'danger-secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: '+',
    variant: 'danger-tertiary',
  },
};

export const Disabled: Story = {
  args: {
    children: '+',
    variant: 'danger-disabled',
  },
};
