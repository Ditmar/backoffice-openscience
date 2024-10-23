import type { StoryObj } from '@storybook/react';
import Tag from './Tag-l';

const meta = {
  title: 'ui/components/atoms/Tag-l',
  component: Tag,
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto dentro del Tag',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del Tag',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Estilo visual del Tag',
    },
    disabled: {
      control: 'boolean',
      description: 'Indica si el Tag está deshabilitado',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'tertiary',
  },
};
export const Disabled: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'default',
    disabled: true,
  },
};
