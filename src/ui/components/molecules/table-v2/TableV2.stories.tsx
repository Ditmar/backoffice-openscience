import type { Meta, StoryObj } from '@storybook/react';
import TableV2 from './TableV2';
import type { ITableV2Props } from './types/ITableV2Props';

const meta: Meta<ITableV2Props> = {
  title: 'ui/components/molecules/table-v2',
  component: TableV2,
  argTypes: {
    onEdit: { action: 'onEdit' },
    onConfigure: { action: 'onConfigure' },
    variant: {
      control: 'select',
      options: ['primary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<ITableV2Props>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};
