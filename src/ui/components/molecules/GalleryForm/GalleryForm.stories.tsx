import type { Meta, StoryObj } from '@storybook/react';
import GalleryForm from './GalleryForm';

const meta: Meta<typeof GalleryForm> = {
  title: 'ui/components/molecules/GalleryForm',
  component: GalleryForm,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the TextInput components',
      defaultValue: 'medium',
    },
    onInputChange: {
      action: 'onInputChange',
      description: 'Callback triggered when a form input value changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GalleryForm>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
