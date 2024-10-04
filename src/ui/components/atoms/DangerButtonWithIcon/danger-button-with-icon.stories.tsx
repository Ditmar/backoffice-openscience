import type { StoryObj, Meta } from '@storybook/react';
import DangerButtonWithIcon from './danger-button-with-icon';
import './danger-button-with-icon.scss';

const meta: Meta<typeof DangerButtonWithIcon> = {
  title: 'Components/Atoms/DangerButtonWithIcon',
  component: DangerButtonWithIcon,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    children: 'Danger button',
    variant: 'enabled',
    icon: '+',
  },
};

export const Hover: Story = {
  args: {
    ...Enabled.args,
    variant: 'hover',
  },
};

export const Active: Story = {
  args: {
    ...Enabled.args,
    variant: 'active',
  },
};

export const Focus: Story = {
  args: {
    ...Enabled.args,
    variant: 'focus',
  },
};

export const Disabled: Story = {
  args: {
    ...Enabled.args,
    variant: 'disable',
  },
};
