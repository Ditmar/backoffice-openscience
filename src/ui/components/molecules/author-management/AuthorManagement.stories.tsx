import type { Meta, StoryObj } from '@storybook/react';
import AuthorManagement from './AuthorManagement';
import type { IAuthorManagementProps } from './types/IAuthorManagementProps';

const meta: Meta<IAuthorManagementProps> = {
  title: 'ui/components/molecules/author-management',
  component: AuthorManagement,
  argTypes: {
    onEdit: { action: 'onEdit' },
    onConfigure: { action: 'onConfigure' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<IAuthorManagementProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
  },
};
