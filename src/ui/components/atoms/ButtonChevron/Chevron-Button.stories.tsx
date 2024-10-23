import type { StoryObj, Meta } from '@storybook/react';
import ChevronButton from './Chevron-Button';
import left from '../../../../assets/icons/angle-left.svg?raw';
import right from '../../../../assets/icons/angle-right.svg?raw';

const meta = {
  title: 'ui/components/atoms/Chevron-Button',
  component: ChevronButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: ['Left', 'Right'],
  },
} as Meta<typeof ChevronButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    variant: 'Left',
    icon: left,
  },
};

export const Right: Story = {
  args: {
    variant: 'Right',
    icon: right,
  },
};
