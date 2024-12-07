import type { StoryObj, Meta } from '@storybook/react';
import SideMenuButtonSiteSeo from './SideMenuButtonSiteSeo';

const meta = {
  title: 'ui/components/atoms/Side-Menu-Button-Site-Seo',
  component: SideMenuButtonSiteSeo,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof SideMenuButtonSiteSeo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Site: Story = {
  args: {
    children: 'Site Configuration',
    color: 'primary',
    icon: 'site-configuration',
    variant: 'secondary',
  },
};

export const Seo: Story = {
  args: {
    children: 'SEO Settings',
    icon: 'seo-settings',
    color: 'primary',
    variant: 'secondary',
  },
};
