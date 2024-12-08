import type { StoryObj, Meta } from '@storybook/react';
import { TabLabel2 } from './TabLabel2';

const meta: Meta<typeof TabLabel2> = {
  title: 'ui/components/atoms/TabLabel2',
  component: TabLabel2,

  argTypes: {
    text: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    isEnable: {
      control: 'boolean',
      type: { name: 'boolean', required: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'large',
  },
};

export const Medium: Story = {
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'small',
  },
};

export const Selected: Story = {
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'selected',
    isSelect: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'TabLabel2',
    isEnable: false,
    variant: 'disabled',
  },
};
