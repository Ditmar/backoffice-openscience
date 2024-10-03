import type { StoryObj, Meta } from '@storybook/react';
import SideMenuButton from './SideMenuButton';
import Icon1 from '../../../../assets/icons/article-management.svg?raw';
import Icon2 from '../../../../assets/icons/author-management.svg?raw';

const meta = {
  title: 'ui/components/atoms/side-menu-button',
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
    icon: Icon1,
    color: 'primary',
  },
};

export const Author: Story = {
  args: {
    children: 'Author Management',
    icon: Icon2,
    color: 'primary',
  },
};
