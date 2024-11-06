import type { StoryObj, Meta } from '@storybook/react';
import MagnifyingGlass from './MagnifyingGlass';
import search from '../../../../assets/icons/search.svg?raw';

const meta = {
  title: 'ui/components/atoms/MagnifyingGlass',
  component: MagnifyingGlass,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta<typeof MagnifyingGlass>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
    icon: search,
  },
};
