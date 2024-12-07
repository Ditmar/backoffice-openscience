import type { Meta, StoryObj } from '@storybook/react';
import VolumeManagement from './VolumeManagement';
import type { IVolumeManagementProps } from './types/IVolumeManagementProps';

const meta: Meta<typeof VolumeManagement> = {
  title: 'ui/components/organismo/volume-management',
  component: VolumeManagement,
  argTypes: {
    size: { table: { disable: true } },
    placeholderSize: { table: { disable: true } },

    variant: { control: 'select', options: ['primary', 'secondary'] },

    onEdit: { action: 'edited' },
    onConfigure: { action: 'configured' },
  },
};

export default meta;

export const Default: StoryObj<IVolumeManagementProps> = {
  args: {
    variant: 'primary',
    onEdit: () => {},
    onConfigure: () => {},
  },
};
