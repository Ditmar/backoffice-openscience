import type { StoryObj, Meta } from '@storybook/react';
import SideMenu from './SideMenu';

const meta: Meta<typeof SideMenu> = {
  title: 'ui/components/molecules/SideMenu',
  component: SideMenu,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: [
      {
        id: '1',
        title: 'Content Management',
        icon: 'content-management',
        path: '/Content-Management',
        basePath: '/',
      },
      {
        id: '2',
        title: 'Article Management',
        icon: 'article-management',
        path: '/Article-Management',
        basePath: '/',
      },
      {
        id: '3',
        title: 'Author Management',
        icon: 'author-management',
        path: '/Author-Management',
        basePath: '/',
      },
      {
        id: '4',
        title: 'Bibliographines',
        icon: 'bibliographines',
        path: '/Bibliographines',
        basePath: '/',
      },
      {
        id: '5',
        title: 'Image Galley',
        icon: 'image-gallery',
        path: '/Image-Galley',
        basePath: '/',
      },
      {
        id: '6',
        title: 'Index Builder',
        icon: 'index-builder',
        path: '/Index-Builder',
        basePath: '/',
      },
      {
        id: '7',
        title: 'Volume Management',
        icon: 'volume-management',
        path: '/Volume-Management',
        basePath: '/',
      },
      {
        id: '8',
        title: 'Site Configuration',
        icon: 'site-configuration',
        path: '/Site-Configuration',
        basePath: '/',
      },
      {
        id: '9',
        title: 'SEO Settings',
        icon: 'seo-settings',
        path: '/SEO-Settings',
        basePath: '/',
      },
      {
        id: '10',
        title: 'Dynamic Banner Management',
        icon: 'dinamicBannerManagement',
        path: '/Dynamic-Banner-Management',
        basePath: '/',
      },
      {
        id: '11',
        title: 'User Management',
        icon: 'user-management',
        path: '/User-Management',
        basePath: '/',
      },
    ],
  },
};
