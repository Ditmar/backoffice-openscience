import type { StoryObj, Meta } from '@storybook/react';
import ConfigureViewButton from './ConfigureViewButton';
import type { IConfigureViewButtonProps } from './types/IConfigureViewButtonProps';
import rectangle from '../../../../assets/icons/rectangle.svg?raw';

const meta: Meta<IConfigureViewButtonProps> = {
  title: 'ui/components/atoms/configure-view-button',
  component: ConfigureViewButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: {
      action: 'onClick',
    },
    icon: {
      control: 'select',
      options: [rectangle],
    },
    isBurger: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<IConfigureViewButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Configure the view',
    onClick: () => {},
    icon: rectangle,
    isBurger: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Configure the view',
    onClick: () => {},
    icon: rectangle,
    isBurger: true,
  },
};

export const BurgerMenu: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Configure the view',
    onClick: () => {},
    isBurger: true,
  },
};
