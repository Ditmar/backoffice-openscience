import type { StoryObj } from '@storybook/react';
import Display from './display';

const meta = {
  title: 'ui/components/demo/calculator/atoms/display',
  component: Display,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    display: '123',
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    display: '123',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    display: '123',
    variant: 'tertiary',
  },
};
