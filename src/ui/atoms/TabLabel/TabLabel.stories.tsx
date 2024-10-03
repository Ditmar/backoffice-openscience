<<<<<<< HEAD
<<<<<<< HEAD
import type { StoryObj, Meta } from '@storybook/react';

import { TabLabel } from './TabLabel';

const meta: Meta<typeof TabLabel> = {
  title: 'ui/atoms/TabLabel',
  component: TabLabel,

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

export const Small: Story = {
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true,
  },
};

export const Large: Story = {
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large',
  },
};
=======
import type { StoryObj, Meta } from "@storybook/react"
=======
import type { StoryObj, Meta } from '@storybook/react';
>>>>>>> 1e093ea (feature/SEM-023)

import { TabLabel } from './TabLabel';

const meta: Meta<typeof TabLabel> = {
  title: 'ui/atoms/TabLabel',
  component: TabLabel,

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

export const Small: Story = {
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true,
  },
};

export const Large: Story = {
<<<<<<< HEAD
    args: {
        text: "TabLabel",
        isEnable: true,
        variant: "large",
    },
}
>>>>>>> 9f9d328 (feature/SEM-023)
=======
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large',
  },
};
>>>>>>> 1e093ea (feature/SEM-023)
