import type { StoryObj, Meta } from '@storybook/react';
import Links from './Links';

const meta: Meta<typeof Links> = {
  title: 'Atomic Design/Atom/Links',
  component: Links,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['Small', 'Medium', 'Big', 'Active', 'Disabled'],
      },
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Small Link',
    variant: 'Small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Link',
    variant: 'Medium',
  },
};

export const Big: Story = {
  args: {
    children: 'Big Link',
    variant: 'Big',
  },
};

export const Active: Story = {
  args: {
    children: 'Active Link',
    variant: 'Active',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Link',
    variant: 'Disabled',
    onClick: undefined,
  },
};
