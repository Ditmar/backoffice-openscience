import type { Meta, StoryObj } from '@storybook/react';
import ButtonNewEntryBibliographies from './ButtonNewEntryBibliographies';

const meta: Meta<typeof ButtonNewEntryBibliographies> = {
  title: 'ui/components/molecules/ButtonNewEntryBibliographies',
  component: ButtonNewEntryBibliographies,
  argTypes: {
    onChange: { action: 'input-changed' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonNewEntryBibliographies>;

export const Bibliography: Story = {
  args: {
    onChange: () => {},
    size: 'medium',
  },
};
