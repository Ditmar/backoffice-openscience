import type { Meta, StoryObj } from '@storybook/react';
import GhostButton from './GhostButton';
import type { ButtonProps } from './types';

const meta: Meta<typeof GhostButton> = {
    title: 'ui/components/atoms/Button',
    component: GhostButton,
    argTypes: {
        onClick: {
            action: 'click',
        },
        variant: {
            control: {
                type: 'select',
                options: ['default', 'hover', 'active', 'focus', 'disabled'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
    args: {
        ghostbutton: 'Default Button', // Texto por defecto
        variant: 'default',
        size: 'medium',
    },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'medium',
    },
};

export const Hover: Story = {
    args: {
        variant: 'hover',
        size: 'medium',
    },
};

export const Active: Story = {
    args: {
        variant: 'active',
        size: 'medium',
    },
};

export const Focus: Story = {
    args: {
        variant: 'focus',
        size: 'medium',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'disabled',
        size: 'medium',
        disabled: true,
    },
};
