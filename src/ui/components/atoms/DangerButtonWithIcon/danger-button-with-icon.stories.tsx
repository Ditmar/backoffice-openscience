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
    variant: 'Enabled',
    icon: '+',
  },
};

export const Hover: Story = {
  args: {
    ...Enabled.args,
    variant: 'Hover',
  },
};

export const Active: Story = {
  args: {
    ...Enabled.args,
    variant: 'Active',
  },
};

export const Focus: Story = {
  args: {
    ...Enabled.args,
    variant: 'Focus',
  },
};

export const Disabled: Story = {
  args: {
    ...Enabled.args,
    variant: 'Disable',
  },
};
