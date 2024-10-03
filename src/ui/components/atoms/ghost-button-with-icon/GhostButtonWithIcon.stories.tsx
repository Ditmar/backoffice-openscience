import type { StoryObj, Meta } from '@storybook/react';
import type { IGhostButtonWithIconProps } from './types/IGhostButtonWithIconProps.ts';
import GhostButtonWithIcon from './GhostButtonWithIcon';

const meta: Meta<typeof GhostButtonWithIcon> = {
  title: 'ui/components/atoms/ghost-button-with-icon',
  component: GhostButtonWithIcon,
  argTypes: {
    onClick: { action: 'clicked' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<IGhostButtonWithIconProps>;

export const Enabled: Story = {
  args: {  
    size: 'medium',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    disabled: true,
  },
};