import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Tooltip from './TooltipsII';
import share from '../../../../assets/icons/share.svg?raw';
import { Icon } from '../../utils/svg-icons/icons';

const meta = {
  title: 'ui/components/atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    variant: {
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

function ShareIcon() {
  return <Icon src={share} size="24px" />;
}

export const Top: Story = {
  args: {
    text: 'Share',
    variant: 'top',
    size: 'medium',
    children: <ShareIcon />,
  },
};

export const Bottom: Story = {
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'medium',
    children: <ShareIcon />,
  },
};

export const Left: Story = {
  args: {
    text: 'Share',
    variant: 'left',
    size: 'medium',
    children: <ShareIcon />,
  },
};

export const Right: Story = {
  args: {
    text: 'Share',
    variant: 'right',
    size: 'medium',
    children: <ShareIcon />,
  },
};

export const Small: Story = {
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'small',
    children: <ShareIcon />,
  },
};

export const Medium: Story = {
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'medium',
    children: <ShareIcon />,
  },
};

export const Large: Story = {
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'large',
    children: <ShareIcon />,
  },
};

export const Text: Story = {
  args: {
    text: 'Brief definition of the underlined word abode',
    variant: 'bottom',
    size: 'small',
    children: <span className="definition-tooltip">Definition Tooltip</span>,
  },
};
