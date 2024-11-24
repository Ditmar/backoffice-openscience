import type { StoryObj, Meta } from '@storybook/react';
import UserForm from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'ui/components/molecules/user-form',
  component: UserForm,
  argTypes: {
    onChange: { action: 'typed' },
  },
};

export default meta;

type Story = StoryObj<typeof UserForm>;

export const Default: Story = {};
