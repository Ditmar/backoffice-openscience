import type { StoryObj, Meta } from '@storybook/react';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'ui/components/molecules/SearchBar',
  component: SearchBar,
  argTypes: {
    onChange: { action: 'typed' },
    onSearchClick: { action: 'search clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};
