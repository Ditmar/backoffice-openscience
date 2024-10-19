import type { StoryObj } from '@storybook/react';
import SecondaryButton from '.';

const meta = {
  title: 'ui/components/SecondaryButton',
  component: SecondaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
    variant: 'secondary',
    state: 'enabled',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'medium',
    variant: 'secondary',
    state: 'enabled',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    variant: 'secondary',
    state: 'enabled',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    size: 'medium',
    variant: 'secondary',
    state: 'disabled',
  },
};

export const Hover: Story = {
  args: {
    label: 'Hover State',
    size: 'medium',
    variant: 'secondary',
    state: 'hover',
  },
};

export const Active: Story = {
  args: {
    label: 'Active State',
    size: 'medium',
    variant: 'secondary',
    state: 'active',
  },
};

export const Focus: Story = {
  args: {
    label: 'Focus State',
    size: 'medium',
    variant: 'secondary',
    state: 'focus',
  },
};

export const TextButton: Story = {
  args: {
    label: 'Text Button',
    size: 'medium',
    variant: 'text',
    state: 'enabled',
  },
};
