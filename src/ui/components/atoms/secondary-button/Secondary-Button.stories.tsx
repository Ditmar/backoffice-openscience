import type { StoryObj, Meta } from '@storybook/react';
import SecundaryButton from './Secondary-Button';
import add from '../../../../assets/icons/add.svg?raw';

const meta = {
  title: 'ui/components/atoms/secundary-button',
  component: SecundaryButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: ['Small', 'Medium', 'Big', 'Active', 'Disable'],
  },
} as Meta<typeof SecundaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Secundary button',
    variant: 'Small',
    icon: add,
  },
};

export const Medium: Story = {
  args: {
    children: 'Secundary button',
    variant: 'Medium',
    icon: add,
  },
};

export const Big: Story = {
  args: {
    children: 'Secundary button',
    variant: 'Big',
    icon: add,
  },
};

export const Active: Story = {
  args: {
    children: 'Secundary button',
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
