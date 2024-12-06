import type { Meta, StoryObj } from '@storybook/react';
import TopElements from './TopElements';

const meta = {
  title: 'Molecules/TopElements',
  component: TopElements,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof TopElements>;

export default meta;

type Story = StoryObj<typeof TopElements>;

export const Primary: Story = {
  args: {
    placeholder: 'API ID: Image Gallery',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'API ID: Image Gallery',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    placeholder: 'API ID: Image Gallery',
    variant: 'tertiary',
  },
};
