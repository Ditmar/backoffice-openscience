import type { StoryObj } from '@storybook/react';
import PageIndicator from './Page-Label';

const meta = {
  title: 'ui/components/atoms/PageIndicator',
  component: PageIndicator,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageIndicator>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 5,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
  },
};
