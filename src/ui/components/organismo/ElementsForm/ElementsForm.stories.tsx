import type { Meta, StoryObj } from '@storybook/react';
import ElementsForm from './ElementsForm';

const meta: Meta = {
  title: 'ui/components/organismo/ElementsForm',
  component: ElementsForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof ElementsForm>;

export const Medium: Story = {
  args: {},
};
