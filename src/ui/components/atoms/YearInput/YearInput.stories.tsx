import type { StoryObj, Meta } from '@storybook/react';
import YearInput from './YearInput';
import angleDown from '../../../../assets/icons/angle-down.svg?raw';

const meta: Meta<typeof YearInput> = {
  title: 'ui/components/atoms/YearInput',
  component: YearInput,
  argTypes: {
    onChange: { action: 'year-input-changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const YearInputStory: Story = {
  args: {
    label: 'year_volume',
    placeholder: 'Placeholder text',
    onChange: () => {},
    icon: angleDown,
  },
};
