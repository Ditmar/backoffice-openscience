import type { StoryObj, Meta } from '@storybook/react';
import type { ISecondaryButtonIconProps } from './types/ISecondaryButtonIconProps';
import SecondaryButtonIcon from './SecondaryButtonIcon';

const meta: Meta<typeof SecondaryButtonIcon> = {
  title: 'ui/components/atoms/secondary-button-icon',
  component: SecondaryButtonIcon,
  argTypes: {
    onClick: { action: 'clicked' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ISecondaryButtonIconProps>;

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
