import type { StoryObj, Meta } from '@storybook/react';
import SideMenuButton from './SideMenuButton';
import bibliography from '../../../../assets/icons/bibliographines.svg?raw';
import gallery from '../../../../assets/icons/image-gallery.svg?raw';

const meta = {
  title: 'ui/components/atoms/sideMenu-button',
  component: SideMenuButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof SideMenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bibliography: Story = {
  args: {
    children: 'Bibliography',
    color: 'primary',
    variant: 'secondary',
    icon: bibliography,
  },
};

export const ImageGallery: Story = {
  args: {
    children: 'Image Gallery',
    color: 'primary',
    variant: 'secondary',
    icon: gallery,
  },
};
