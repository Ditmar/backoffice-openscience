import type { Meta, StoryObj } from '@storybook/react';
import SeoSettings from './SeoSettings';

const meta: Meta = {
  title: 'ui/components/organismo/SeoSettings',
  component: SeoSettings,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof SeoSettings>;

export const Primary: Story = {
  args: {},
};
