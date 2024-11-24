import type { StoryObj, Meta } from '@storybook/react';
import MagnifyingGlass from './MagnifyingGlass';
import search from '../../../../assets/icons/search.svg?raw';

const meta: Meta<typeof MagnifyingGlass> = {
  title: 'ui/components/atoms/MagnifyingGlass',
  component: MagnifyingGlass,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
    icon: search,
  },
};
