import type { StoryObj, Meta } from '@storybook/react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'ui/components/atoms/TextInput',
  component: TextInput,
  argTypes: {
    onChange: { action: 'text-changed' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'medium',
  },
};
export const Small: Story = {
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'small',
  },
};
export const Large: Story = {
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'large',
  },
};
export const Filled: Story = {
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    value: 'Filled input',
    onChange: () => {},
    size: 'medium',
  },
};
