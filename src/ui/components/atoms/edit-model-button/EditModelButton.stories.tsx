import type { StoryObj, Meta } from '@storybook/react';
import EditModelButton from './EditModelButton';
import type { IEditModelButtonProps } from './types/IEditModelButtonProps';

const meta: Meta<IEditModelButtonProps> = {
  title: 'ui/components/atoms/edit-model-button',
  component: EditModelButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: {
      action: 'onClick',
    },
    icon: {
      control: 'text',
      defaultValue: 'pencil',
    },
    text: {
      control: 'text',
      defaultValue: 'Edit the model',
    },
  },
};

export default meta;

type Story = StoryObj<IEditModelButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Edit the model',
    onClick: () => {},
    icon: 'pencil',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Edit the model',
    onClick: () => {},
    icon: 'pencil',
  },
};
