import type { Meta, StoryObj } from '@storybook/react';
import Checklist from './Checklist';

const meta: Meta<typeof Checklist> = {
  title: 'ui/components/atoms/Checklist',
  component: Checklist,
  argTypes: {
    onCheck: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checklist>;

export const Default: Story = {
  args: {
    items: ['Columns', 'Rows', 'Cells'],
  },
};
