import type { StoryObj, Meta } from '@storybook/react';
import UserForm from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'ui/components/molecules/user-form',
  component: UserForm,
  argTypes: {
    placeholderText: { control: 'text', defaultValue: 'Placeholder text' },
  },
};

export default meta;

type Story = StoryObj<typeof UserForm>;

export const Default: Story = {
  args: {
    placeholderText: 'Placeholder text',
  },
};
