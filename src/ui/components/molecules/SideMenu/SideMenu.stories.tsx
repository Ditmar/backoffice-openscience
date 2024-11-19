import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import SideMenu from './SideMenu'

const meta: Meta<typeof SideMenu> = {
  title: 'ui/components/molecules/SideMenu',
  component: SideMenu,
  argTypes: {
    onHideMenu: {
      action: 'hideMenu',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: [
      { title: 'Content Management', icon: 'content-management', path: '/article', basePath: '/' },
      { title: 'Article Management', icon: 'article-management', path: '/author', basePath: '/' },
      { title: 'Author Management', icon: 'author-management', path: '/bibliographies', basePath: '/' },
      { title: 'Bibliographines', icon: 'bibliographines', path: '/gallery', basePath: '/' },
      { title: 'Image Galley', icon: 'image-gallery', path: '/index', basePath: '/' },
      { title: 'Index Builder', icon: 'index-builder', path: '/volume', basePath: '/' },
      { title: 'Volume Management', icon: 'volume-management', path: '/volume', basePath: '/' },
      { title: 'Site Configuration', icon: 'site-configuration', path: '/volume', basePath: '/' },
      { title: 'SEO Settings', icon: 'seo-settings', path: '/volume', basePath: '/' },
      { title: 'Dynamic Banner Management', icon: 'dinamic-banner-management', path: '/volume', basePath: '/' },
      { title: 'User Management', icon: 'user-management', path: '/volume', basePath: '/' },
    ],
  },
};
