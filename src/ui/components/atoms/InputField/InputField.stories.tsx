import type { StoryObj, Meta } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'ui/components/atoms/InputField',
  component: InputField,
  argTypes: {
    onChange: { action: 'text-changed' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '',
    onChange: () => {},
  },
};
