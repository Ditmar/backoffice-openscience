import type { StoryObj, Meta } from '@storybook/react';
import type { ISecondaryButtonIconProps } from './types/ISecondaryButtonIconProps';
import SecondaryButtonIcon from './SecondaryButtonIcon';

const meta: Meta<typeof SecondaryButtonIcon> = {
  title: 'ui/components/atoms/SecondaryButtonIcon',
  component: SecondaryButtonIcon,
  argTypes: {
    onClick: { action: 'clicked' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ISecondaryButtonIconProps>;

export const SmallButton: Story = {
  args: {
    size: 'small',
    disabled: false,
  },
};

export const MediumButton: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
};

export const LargeButton: Story = {
  args: {
    size: 'large',
    disabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    size: 'medium',
    disabled: true,
  },
};
