import type { StoryObj, Meta } from '@storybook/react';
import SideMenuButton from './SideMenuButton';

const meta = {
  title: 'ui/components/atoms/Side-Menu-Button',
  component: SideMenuButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof SideMenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Article: Story = {
  args: {
    children: 'Article Management',
    color: 'primary',
    variant: 'secondary',
  },
};

export const Author: Story = {
  args: {
    children: 'Author Management',
    color: 'primary',
    variant: 'secondary',
  },
};
