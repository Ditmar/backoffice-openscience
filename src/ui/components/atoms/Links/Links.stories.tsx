import type { StoryObj, Meta } from '@storybook/react';
import Links from './Links';

const meta: Meta<typeof Links> = {
  title: 'Atomic Design/atoms/Links',
  component: Links,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['Enabled', 'Disabled'],
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

type Story = StoryObj<typeof Links>;

export const Enabled: Story = {
  args: {
    children: 'Link action',
    variant: 'Enabled',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Link action',
    variant: 'Disabled',
    onClick: undefined,
  },
};

export const Visited: Story = {
  args: {
    children: 'Link action',
    variant: 'Enabled',
  },
};
