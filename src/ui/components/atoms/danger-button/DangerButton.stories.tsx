import type { StoryObj, Meta } from '@storybook/react';
import DangerButton from './DangerButton';

const meta: Meta<typeof DangerButton> = {
  title: 'ui/components/danger-button',
  component: DangerButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: ['danger-primary', 'danger-secondary', 'danger-tertiary', 'danger-disabled'],
  },
};

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
