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
<<<<<<< HEAD
      { label: 'INFORMATION', data: 'now' },
      { label: 'Created', data: '' },
      { label: 'By', data: 'now' },
      { label: 'Last Uptade', data: '' },
      { label: 'By', data: '' },
=======
      { label: 'Site Title', data: 'Enter your site title' },
      { label: 'Default Language', data: 'Enter your default language' },
      { label: 'Default Author', data: 'Enter your default author' },
      { label: 'Default Email', data: 'Enter your default email' },
      { label: 'Taxonomy Types', data: 'Enter your taxonomy types' },
>>>>>>> d37c1d3a1a9edc081445b63cff6cc72750adf156
    ],
  },
};
