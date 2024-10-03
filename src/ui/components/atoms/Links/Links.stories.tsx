import type { StoryObj, Meta } from '@storybook/react';
import Links from './Links';

const meta = {
  title: 'ui/components/atoms/Links',
  component: Links,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: 'select',
      options: ['Small', 'Normal', 'Big', 'Active', 'Disabled', 'Visited'],
    },
  },
} as Meta<typeof Links>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Small Link',
    variant: 'Small',
  },
};

export const Normal: Story = {
  args: {
    children: 'Normal Link',
    variant: 'Normal',
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
  },
};

export const Visited: Story = {
  args: {
    children: 'Visited Link',
    variant: 'Visited',
  },
};
