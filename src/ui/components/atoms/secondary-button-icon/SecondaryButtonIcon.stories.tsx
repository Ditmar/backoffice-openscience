import type { StoryObj, Meta } from '@storybook/react';
import SecondaryButtonIcon from './SecondaryButtonIcon';
import add from '../../../../assets/icons/add.svg?raw';

const meta = {
  title: 'ui/components/atoms/secondary-button-icon',
  component: SecondaryButtonIcon,
  argTypes: {
    onClick: {
      action: 'click',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof SecondaryButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    icon: add,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    icon: add,
    disabled: true,
  },
};
