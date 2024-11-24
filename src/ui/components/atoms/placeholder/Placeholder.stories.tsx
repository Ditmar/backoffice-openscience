import type { StoryObj, Meta } from '@storybook/react';
import Placeholder from './Placeholder';

const meta: Meta<typeof Placeholder> = {
  title: 'ui/components/atoms/placeholder',
  component: Placeholder,
  argTypes: {
    onChange: { action: 'text-changed' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder text',
    onChange: () => {},
  },
};
