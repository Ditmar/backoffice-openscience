import type { StoryObj, Meta } from '@storybook/react';
import PrimaryButton from './PrimaryButton';
import add from '../../../../assets/icons/add.svg?raw';

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
    icon: add,
  },
};

export const Medium: Story = {
  args: {
    children: 'Primary button',
    variant: 'Medium',
    icon: add,
  },
};

export const Big: Story = {
  args: {
    children: 'Primary button',
    variant: 'Big',
    icon: add,
  },
};

export const Active: Story = {
  args: {
    children: 'Primary button',
    variant: 'Active',
    icon: add,
  },
};

export const Disable: Story = {
  args: {
    children: 'Primary button',
    variant: 'Disable',
    icon: add,
  },
};
