import type { StoryObj, Meta } from '@storybook/react';
import UserForm from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'components/atoms/UserForm',
  component: UserForm,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserForm>;
export const Default: Story = {
  args: {
    onSubmit: (data: { username: string; email: string; password: string; role: string }) => {
      console.log('Form data submitted:', data);
    },
  },
};
