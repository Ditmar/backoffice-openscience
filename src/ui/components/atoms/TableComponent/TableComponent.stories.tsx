import type { StoryObj, Meta } from '@storybook/react';
import TableComponent from './TableComponent';

const meta: Meta<typeof TableComponent> = {
  title: 'ui/components/atoms/TableComponent',
  component: TableComponent,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        title: 'Title 1',
        visible: true,
        updated: '2024-11-27',
        protected: undefined,
      },
      {
        id: 2,
        title: 'Title 2',
        visible: false,
        updated: '2024-11-28',
        protected: undefined,
      },
    ],
  },
};
