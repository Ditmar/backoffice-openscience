import type { StoryObj, Meta } from '@storybook/react';
import DateInput from './DateInput';
import emptyCalendar from '../../../../assets/icons/empty-calendar.svg?raw';

const meta: Meta<typeof DateInput> = {
  title: 'ui/components/atoms/DateInput',
  component: DateInput,
  argTypes: {
    onChange: { action: 'date-changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Date: Story = {
  args: {
    label: 'Date',
    placeholder: '',
    onChange: () => {},
    icon: emptyCalendar,
  },
};
