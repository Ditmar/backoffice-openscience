import type { StoryObj } from '@storybook/react';
import Links from './Links';

const meta = {
  title: 'ui/components/atoms/Links',
  component: Links,
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historias para cada variante del Link
export const SmallLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Small',
    children: 'Link action', // Texto del enlace
  },
};

export const NormalLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Normal',
    children: 'Link action', // Texto del enlace
  },
};

export const BigLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Big',
    children: 'Link action', // Texto del enlace
  },
};

export const EnabledLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Enabled',
    children: 'Link action', // Texto del enlace
  },
};

export const HoverLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Hover',
    children: 'Link action', // Texto del enlace
  },
};

export const FocusLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Focus',
    children: 'Link action', // Texto del enlace
  },
};

export const ActiveLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Active',
    children: 'Link action', // Texto del enlace
  },
};

export const DisabledLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Disabled',
    children: 'Link action', // Texto del enlace
  },
};

export const VisitedLink: Story = {
  args: {
    href: 'https://example.com',
    variant: 'Visited',
    children: 'Link action', // Texto del enlace
  },
};
