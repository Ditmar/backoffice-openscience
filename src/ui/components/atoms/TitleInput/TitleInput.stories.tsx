import type { StoryObj, Meta } from '@storybook/react';
import TitleInput from './TitleInput';

const meta: Meta<typeof TitleInput> = {
  title: 'ui/components/atoms/TitleInput',
  component: TitleInput,
  argTypes: {
    onChange: { action: 'text-changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
  },
};
