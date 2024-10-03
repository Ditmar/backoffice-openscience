import type { StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta = {
  title: 'ui/components/atoms/Tag',
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
      options: ['default', 'outlined', 'ghost'],
      description: 'Estilo visual del Tag',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'ghost',
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
