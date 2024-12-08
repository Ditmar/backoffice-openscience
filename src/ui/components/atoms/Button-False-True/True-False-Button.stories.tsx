import type { Meta, StoryObj } from '@storybook/react';
import TrueFalseButton from './True-False-Button';

const meta = {
  title: 'ui/components/atoms/True-False-Button',
  component: TrueFalseButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: ['False', 'True'],
  },
} as Meta<typeof TrueFalseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const True: Story = {
  args: {
    children: 'TRUE',
    variant: 'True',
  },
};

export const False: Story = {
  args: {
    children: 'FALSE',
    variant: 'False',
  },
};
