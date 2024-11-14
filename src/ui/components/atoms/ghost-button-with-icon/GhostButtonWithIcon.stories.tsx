import type { StoryObj, Meta } from '@storybook/react';
import type { IGhostButtonWithIconProps } from './types/IGhostButtonWithIconProps';
import GhostButtonWithIcon from './GhostButtonWithIcon';
import add from '../../../../assets/icons/add.svg?raw';

const meta: Meta<typeof GhostButtonWithIcon> = {
  title: 'ui/components/atoms/Ghost-Button-With-Icon',
  component: GhostButtonWithIcon,
  argTypes: {
    onClick: { action: 'click' },
    variant: {
      option: ['small', 'mediun', 'large', 'active', 'disabled'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<IGhostButtonWithIconProps>;

export const Small: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'small',
    icon: add,
  },
};

export const Medium: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'medium',
    icon: add,
  },
};

export const Large: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'large',
    icon: add,
  },
};

export const Active: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'active',
    icon: add,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'disabled',
    icon: add,
  },
};
