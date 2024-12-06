import type { Meta, StoryObj } from '@storybook/react';
import VolumeManagement from './VolumeManagement';
import type { IVolumeManagementProps } from './types/IVolumeManagementProps';

const meta: Meta<typeof VolumeManagement> = {
  title: 'ui/components/organisms/VolumeManagement',
  component: VolumeManagement,
  argTypes: {
    onEdit: { table: { disable: true } },
    onConfigure: { table: { disable: true } },
  },
};

export default meta;

export const Default: StoryObj<IVolumeManagementProps> = {
  args: {
    onEdit: () => {},
    onConfigure: () => {},
  },
};
