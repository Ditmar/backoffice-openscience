import type { Meta, StoryObj } from '@storybook/react';
import GhostButton from './ghost-button';

const meta: Meta<typeof GhostButton> = {
  title: 'ui/components/atoms/GhostButton',
  component: GhostButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    ghostbutton: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    ghostbutton: 'Ghost Button',
  },
};

export default meta;

type Story = StoryObj<typeof GhostButton>;

export const Primary: Story = {
  args: {
    ghostbutton: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    ghostbutton: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    ghostbutton: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    ghostbutton: 'Large Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ghostbutton: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};
