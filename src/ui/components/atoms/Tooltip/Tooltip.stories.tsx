import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'ui/components/atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text that will be displayed to the user for interaction.',
    },
    toolTipText: {
      control: 'text',
      description: 'Text that will appear in the tooltip.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Determines the size of the tooltip.',
    },
  },
};

export default meta;

const Template: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip text={args.text} toolTipText={args.toolTipText} variant={args.variant} />
  ),
};

export const Small: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'small',
  },
  storyName: 'Small Tooltip',
};

export const Medium: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'medium',
  },
  storyName: 'Medium Tooltip',
};

export const Large: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'large',
  },
  storyName: 'Large Tooltip',
};
