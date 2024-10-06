import type { StoryObj, Meta } from '@storybook/react';
import type { SecondaryButtonProps } from './types/SecondaryButtonProps';
import SecondaryButton from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'ui/components/atoms/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      options: ['small', 'medium', 'large', 'active', 'disabled'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<SecondaryButtonProps>;

export const Small: Story = {
  args: {
    children: 'Secondary button',
    variant: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Secondary button',
    variant: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Secondary button',
    variant: 'large',
  },
};

export const Active: Story = {
  args: {
    children: 'Secondary button',
    variant: 'active',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Secondary button',
    variant: 'disabled',
  },
};
