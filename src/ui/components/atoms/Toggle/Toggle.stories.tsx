import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'ui/components/atoms/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const DefaultEnabled: Story = {
  args: {
    label: 'Toggle label',
    disabled: false,
  },
};

export const DefaultDisabled: Story = {
  args: {
    label: 'Toggle label ',
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
    disabled: false,
  },
};
