import type { StoryObj, Meta } from '@storybook/react';
import { gridIcons } from './grid-icons';

const meta = {
  title: 'ui/components/icon/grid-icons',
  component: gridIcons,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof gridIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddCalendar: Story = {
  args: {
    size: '24px',
    className: 'add-calendar-icon',
    'data-testid': 'add-calendar-icon',
  },
};
