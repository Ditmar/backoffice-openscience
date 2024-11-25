import type { StoryObj, Meta } from '@storybook/react';
import PrimaryButtonIcon from './PrimaryButtonIcon';
import add from '../../../../assets/icons/add.svg?raw';

const meta = {
  title: 'ui/components/atoms/Primary-Button-Icon',
  component: PrimaryButtonIcon,
  argTypes: {
    onClick: {
      action: 'click',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof PrimaryButtonIcon>;

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
