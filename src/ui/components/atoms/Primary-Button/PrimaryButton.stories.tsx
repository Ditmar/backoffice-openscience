import type { StoryObj, Meta } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

const meta = {
  title: 'ui/components/atoms/Primary-Button',
  component: PrimaryButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: ['Small', 'Medium', 'Big', 'Active', 'Disable'],
  },
} as Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Primary button',
    variant: 'Small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Primary button',
    variant: 'Medium',
  },
};

export const Big: Story = {
  args: {
    children: 'Primary button',
    variant: 'Big',
  },
};

export const Active: Story = {
  args: {
    children: 'Primary button',
    variant: 'Active',
  },
};

export const Disable: Story = {
  args: {
    children: 'Primary button',
    variant: 'Disable',
  },
};
