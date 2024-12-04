import type { Meta, StoryObj } from '@storybook/react';
import ButtonNewEntryBibliographies from './ButtonNewEntryBibliographies';

const meta: Meta<typeof ButtonNewEntryBibliographies> = {
  title: 'ui/components/molecules/ButtonNewEntryBibliographies',
  component: ButtonNewEntryBibliographies,
};

export default meta;

type Story = StoryObj<typeof ButtonNewEntryBibliographies>;

export const Bibliography: Story = {
  args: {
    onChange: () => {},
  },
};
