import type { StoryObj, Meta } from '@storybook/react';
import Tag from './Tag';

const meta = {
  title: 'ui/components/atoms/tag',
  component: Tag,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Component',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Component',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Component',
    variant: 'tertiary',
  },
};
