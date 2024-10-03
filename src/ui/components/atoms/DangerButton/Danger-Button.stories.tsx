import type { StoryObj, Meta } from '@storybook/react';
import DangerButton from './Danger-Button';

const meta = {
  title: 'ui/components/atoms/Danger-Button',
  component: DangerButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: ['Small', 'Medium', 'Big', 'Active', 'Disable'],
  },
} as Meta<typeof DangerButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Danger button',
    variant: 'Small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Danger button',
    variant: 'Medium',
  },
};

export const Big: Story = {
  args: {
    children: 'Danger button',
    variant: 'Big',
  },
};

export const Active: Story = {
  args: {
    children: 'Danger button',
    variant: 'Active',
  },
};

export const Disable: Story = {
  args: {
    children: 'Danger button',
    variant: 'Disable',
  },
};
