import type { StoryObj, Meta } from '@storybook/react';
import type { SecondaryButtonProps } from './types/SecondaryButtonProps';
import SecondaryButton from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'ui/components/atoms/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    focused: { control: 'boolean' },
    hovered: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<SecondaryButtonProps>;

export const EnabledButton: Story = {
  args: {
    size: 'medium',
    disabled: false, 
    active: false,
    focused: false,
    hovered: false,
  },
};

export const HoverButton: Story = {
  args: {
    size: 'medium',
    disabled: false, 
    active: false,
    focused: false,
    hovered: true, 
  },
};

export const ActiveButton: Story = {
  args: {
    size: 'medium',
    disabled: false,
    active: true, 
    focused: false,
    hovered: false,
  },
};

export const FocusedButton: Story = {
  args: {
    size: 'medium',
    disabled: false,
    focused: true,
    active: false,
    hovered: false,
  },
};

export const DisabledButton: Story = {
  args: {
    size: 'medium',
    disabled: true,
    active: false,
    focused: false,
    hovered: false,
  },
};
