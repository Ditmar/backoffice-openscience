import type { Meta, StoryObj } from '@storybook/react';
import TrueFalseButton from './True-False-Button';

const meta: Meta<typeof TrueFalseButton> = {
  title: 'UI/Components/Atoms/True-False-Button',
  component: TrueFalseButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['True', 'False'] as const,
    },
    onClick: { action: 'clicked' },
  },
};

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
