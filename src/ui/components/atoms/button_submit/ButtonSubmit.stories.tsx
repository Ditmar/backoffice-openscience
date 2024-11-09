import type { StoryObj, Meta } from '@storybook/react';
import ButtonSubmit from './ButtonSubmit';

const meta: Meta<typeof ButtonSubmit> = {
  title: 'ui/components/button_submit',
  component: ButtonSubmit,
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
    children: 'Submit',
  },
};
