import type { Meta, StoryObj } from '@storybook/react';
import TableElements from './TableElements';

const meta: Meta<typeof TableElements> = {
  title: 'ui/components/molecules/table-elements',
  component: TableElements,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
