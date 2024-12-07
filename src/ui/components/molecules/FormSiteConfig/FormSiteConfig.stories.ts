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
      { label: 'INFORMATION', data: 'now' },
      { label: 'Created', data: '' },
      { label: 'By', data: 'now' },
      { label: 'Last Uptade', data: '' },
      { label: 'By', data: '' },
    ],
  },
};
