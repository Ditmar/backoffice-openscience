import type { StoryObj, Meta } from '@storybook/react';
import Tooltip from './TooltipsII';
import DangerButton from '../DangerButton/Danger-Button';
import Share from '../../../../assets/icons/Share';

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
    text: 'Share',
    position: 'top',
    size: 'medium',
    children: <Share />,
  },
};

export const Bottom: Story = {
  args: {
    text: 'Share',
    position: 'bottom',
    size: 'medium',
    children: <Share />,
  },
};

export const Left: Story = {
  args: {
    text: 'Share',
    position: 'left',
    size: 'medium',
    children: <Share />,
  },
};

export const Right: Story = {
  args: {
    text: 'Share',
    position: 'right',
    size: 'medium',
    children: <Share />,
  },
};

export const Small: Story = {
  args: {
    text: 'Share',
    position: 'right',
    size: 'small',
    children: <Share />,
  },
};

export const Medium: Story = {
  args: {
    text: 'Share',
    position: 'right',
    size: 'medium',
    children: <Share />,
  },
};

export const Large: Story = {
  args: {
    text: 'Share',
    position: 'right',
    size: 'large',
    children: <Share />,
  },
};

export const Text: Story = {
  args: {
    text: 'Brief definition of the underlined word abode',
    position: 'right',
    size: 'medium',
    children: <DangerButton>Definition Tooltip</DangerButton>,
  },
};
