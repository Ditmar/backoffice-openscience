import type { StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta = {
  title: 'ui/components/molecules/Pagination',
  component: Pagination,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

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
