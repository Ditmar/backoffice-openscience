import type { StoryObj, Meta } from '@storybook/react';
import VolumeManagement from './VolumeManagement';
import type { IVolumeManagementProps } from './types/IVolumeManagementProps';
import pencil from '../../../../assets/icons/pencil.svg?raw';
import image from '../../../../assets/icons/image.svg?raw';
import rectangle from '../../../../assets/icons/rectangle.svg?raw';

const meta: Meta<IVolumeManagementProps> = {
  title: 'ui/components/atoms/volume-management',
  component: VolumeManagement,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onEdit: {
      action: 'onEdit',
    },
    onConfigure: {
      action: 'onConfigure',
    },
    icon: {
      control: 'select',
      options: [pencil, image, rectangle],
    },
  },
};

export default meta;

type Story = StoryObj<IVolumeManagementProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    onEdit: undefined,
    onConfigure: undefined,
    icon: pencil,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    onEdit: undefined,
    onConfigure: undefined,
    icon: image,
  },
};
