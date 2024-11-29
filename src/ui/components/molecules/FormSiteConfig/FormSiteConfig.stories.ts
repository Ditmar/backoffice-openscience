import type { Meta, StoryObj } from '@storybook/react';
import FormSiteConfig from './FormSiteConfig';

const meta: Meta<typeof FormSiteConfig> = {
  title: 'ui/components/molecules/form-site-config',
  component: FormSiteConfig,
  argTypes: {
    onChange: { action: 'typed' },
  },
};

export default meta;

type Story = StoryObj<typeof FormSiteConfig>;

export const Default: Story = {
  args: {
    data: [
      { label: 'Site Title', data: 'Enter your site title' },
      { label: 'Default Language', data: 'Enter your default language' },
      { label: 'Default Author', data: 'Enter your default author' },
      { label: 'Default Email', data: 'Enter your default email' },
      { label: 'Taxonomy Types', data: 'Enter your taxonomy types' },
    ],
  },
};
