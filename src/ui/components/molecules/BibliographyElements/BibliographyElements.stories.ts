import type { Meta, StoryObj } from '@storybook/react';
import BibliographyElements from './BibliographyElements';

const meta: Meta<typeof BibliographyElements> = {
  title: 'Molecules/BibliographyElements',
  component: BibliographyElements,
};

export default meta;

type Story = StoryObj<typeof BibliographyElements>;

export const Default: Story = {
  args: {
    filterFound: 10,
    setFilter: () => {},
  },
};
