import type { StoryObj, Meta } from '@storybook/react';
import DangerButtonWithIcon from './Danger-Button-With-Icon';
import add from '../../../../assets/icons/add.svg?raw';

const meta = {
  title: 'ui/components/atoms/Danger-Button-With-Icon',
  component: DangerButtonWithIcon,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: ['Small', 'Medium', 'Big', 'Active', 'Disable'],
  },
} as Meta<typeof DangerButtonWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Danger button',
    variant: 'Small',
    icon: add,
  },
};

export const Medium: Story = {
  args: {
    children: 'Danger button',
    variant: 'Medium',
    icon: add,
  },
};

export const Big: Story = {
  args: {
    children: 'Danger button',
    variant: 'Big',
    icon: add,
  },
};

export const Active: Story = {
  args: {
    children: 'Danger button',
    variant: 'Active',
    icon: add,
  },
};

export const Disable: Story = {
  args: {
    children: 'Danger button',
    variant: 'Disable',
    icon: add,
  },
};
