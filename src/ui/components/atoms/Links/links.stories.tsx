import type { StoryObj, Meta } from '@storybook/react';
import Links from './links';

const meta = {
  title: 'ui/components/atoms/Links',
  component: Links,
  argTypes: {
    onClick: {
      action: 'click',
    },
    disabled: {
      control: 'boolean',
    },
    isFocused: {
      control: 'boolean',
    },
  },
} as Meta<typeof Links>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    disabled: false,
    href: '#',
    size: 'medium',
  },
};

export const Focused: Story = {
  args: {
    disabled: false,
    isFocused: true,
    href: '#',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: 'medium',
  },
};
