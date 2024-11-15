import type { StoryObj, Meta } from '@storybook/react';
import DangerButton from './Danger-Button';

const meta = {
  title: 'ui/components/atoms/Danger-Button',
  component: DangerButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['Small', 'Medium', 'Big', 'Active', 'Disable', 'Normal'],
      defaultValue: 'Normal',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta<typeof DangerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Danger button',
    variant: 'Small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Danger button',
    variant: 'Medium',
  },
};

export const Big: Story = {
  args: {
    children: 'Danger button',
    variant: 'Big',
  },
};

export const Active: Story = {
  args: {
    children: 'Danger button',
    variant: 'Active',
  },
};

export const Disable: Story = {
  args: {
    children: 'Danger button',
    variant: 'Disable',
    disabled: true,
  },
};
