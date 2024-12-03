import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './ButtonAuthor';

const meta: Meta<typeof Button> = {
  title: 'ui/components/atoms/ButtonAuthor',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: { control: 'text' },
    variant: { control: 'radio', options: ['default', 'primary'] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Publish: Story = {
  args: {
    label: 'Publish',
    variant: 'default',
  },
};

export const Save: Story = {
  args: {
    label: 'Save',
    variant: 'default',
  },
};
