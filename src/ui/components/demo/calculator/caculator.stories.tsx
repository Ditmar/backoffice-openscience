import type { StoryObj } from '@storybook/react';
import Calculator from './Calculator';

const meta = {
  title: 'ui/components/demo/calculator',
  component: Calculator,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
