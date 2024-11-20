import type { StoryObj, Meta } from '@storybook/react';
import GhostButtonIcon from './GhostButtonIcon';

const meta = {
  title: 'ui/components/atoms/Ghost-Button-Icon',
  component: GhostButtonIcon,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: ['ghost-primary', 'ghost-secondary', 'ghost-tertiary', 'ghost-disabled'],
  },
} as Meta<typeof GhostButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '+',
    variant: 'ghost-primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '+',
    variant: 'ghost-secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: '+',
    variant: 'ghost-tertiary',
  },
};
export const Disabled: Story = {
  args: {
    children: '+',
    variant: 'ghost-disabled',
  },
};
