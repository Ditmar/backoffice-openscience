import type { StoryObj, Meta } from '@storybook/react';
import { AuthorManagement } from './AuthorManagement';

const meta: Meta<typeof AuthorManagement> = {
  title: 'ui/components/molecules/AuthorManagement',
  component: AuthorManagement,
  argTypes: {
    onSave: {
      action: 'save',
    },
    onPublish: {
      action: 'publish',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Create an entry',
    apiId: 'API ID:author',
    buttonLabel: 'Save',
    disabled: false,
  },
};
