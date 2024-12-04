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
      defaultValue: 'medium', // Valor predeterminado para size
    },
    onInputChange: {
      action: 'onInputChange',
      description: 'Callback triggered when a form input value changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GalleryForm>;

// Historia predeterminada
export const Default: Story = {
  args: {
    size: 'medium',
  },
};

// Historia con inputs pequeños
export const Small: Story = {
  args: {
    size: 'small',
  },
};

// Historia con inputs grandes
export const Large: Story = {
  args: {
    size: 'large',
  },
};
