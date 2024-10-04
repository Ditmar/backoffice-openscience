import type { StoryObj, Meta } from '@storybook/react';
import Tooltip from './TolltipsII';
import DangerButton from '../DangerButton/Danger-Button';
import Share from 'assets/icons/share';

const meta = {
  title: 'ui/components/atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },

    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    text: 'Tooltip on top',
    position: 'top',
    size: 'medium',
    children: <DangerButton>hola</DangerButton>,
  },
};

export const Bottom: Story = {
  args: {
    text: 'Tooltip on bottom',
    position: 'bottom',
    size: 'medium',
    children: <DangerButton>hola</DangerButton>,
  },
};

export const Left: Story = {
  args: {
    text: 'tooltip on left',
    position: 'left',
    size: 'medium',
    children: <DangerButton>hola</DangerButton>,
  },
};

export const Right: Story = {
  args: {
    text: 'tooltip on right',
    position: 'right',
    size: 'medium',
    children: <DangerButton>hola</DangerButton>,
  },
};

export const Small: Story = {
  args: {
    text: 'Tooltip small',
    position: 'right',
    size: 'small',
    children: <DangerButton>hola</DangerButton>,
  },
};

export const Medium: Story = {
  args: {
    text: 'Tooltip medium',
    position: 'right',
    size: 'medium',
    children: 'hola',
  },
};

export const Large: Story = {
  args: {
    text: 'Tooltip large',
    position: 'right',
    size: 'large',
    children: 'hola',
  },
};

export const Icon: Story = {
  args: {
    text: 'Tooltip large',
    position: 'right',
    size: 'medium',
    children: <Share/>,
  },
};
