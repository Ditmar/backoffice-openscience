import type { StoryObj, Meta } from '@storybook/react';
import type { SecondaryButtonProps } from './types/SecondaryButtonProps';
import SecondaryButton from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'ui/components/atoms/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: { control: 'boolean' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    focused: { control: 'boolean' },
    hovered: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<SecondaryButtonProps>;

export const Enabled: Story = {
  args: {
    size: 'Enabled',
    disabled: false,
    active: false,
    focused: false,
    hovered: false,
  },
};

export const Hover: Story = {
  args: {
    size: 'Hover',
    disabled: false,
    active: false,
    focused: false,
    hovered: true,
  },
};

export const Active: Story = {
  args: {
    size: 'Active',
    disabled: false,
    active: true,
    focused: false,
    hovered: false,
  },
};

export const Focus: Story = {
  args: {
    size: 'Focus',
    disabled: false,
    focused: true,
    active: false,
    hovered: false,
  },
};

export const Disabled: Story = {
  args: {
    size: 'Disabled',
    disabled: true,
    active: false,
    focused: false,
    hovered: false,
  },
};
