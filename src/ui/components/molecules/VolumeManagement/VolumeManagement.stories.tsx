import type { StoryObj, Meta } from '@storybook/react';
import VolumeManagement from './VolumeManagement';

const meta: Meta<typeof VolumeManagement> = {
  title: 'ui/components/molecules/VolumeManagement',
  component: VolumeManagement,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '',
    date: '',
    article: '',
    year: '',
    onFieldChange: () => {
      // Simulación de la función de cambio sin parámetros
    },
  },
};
