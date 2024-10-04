import type { StoryObj, Meta } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'ui/components/molecules/Pagination',
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPagination: Story = {
  args: {
    currentPage: 1,
    totalPages: 15,
  },
};
