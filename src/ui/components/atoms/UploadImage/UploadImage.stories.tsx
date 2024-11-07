import type { StoryObj } from '@storybook/react';
import UploadImage from './UploadImage';

const meta = {
  title: 'ui/components/atoms/UploadImage',
  component: UploadImage,
  argTypes: {
    maxFileSize: {
      control: 'number',
      description: 'Tamaño máximo del archivo en bytes (5MB por defecto)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    maxFileSize: 5 * 1024 * 1024,
  },
};
