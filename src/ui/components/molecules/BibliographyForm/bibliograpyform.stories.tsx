import type { Meta, StoryObj } from '@storybook/react';
import BibliographyForm from './bibliograpyform';

const meta: Meta<typeof BibliographyForm> = {
  title: 'ui/components/molecules/BibliographyForm',
  component: BibliographyForm,
};

export default meta;

type Story = StoryObj<typeof BibliographyForm>;

export const Bibliography: Story = {
  args: {
    onChange: () => {},
  },
};
