import type { Meta, StoryObj } from '@storybook/react';
import BibliographyActions from './BibliogarphyActions';

const meta: Meta<typeof BibliographyActions> = {
  title: 'BibliographyActions',
  component: BibliographyActions,
  args: {
    items: [],
    onCheck: () => {},
    onNext: () => {},
    onPrevious: () => {},
    page: 1,
  },
};

export default meta;

type Story = StoryObj<typeof BibliographyActions>;

let page = 1;

export const BibliographyActionsStory: Story = {
  args: {
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
    ],
    onCheck: (item: string) => {
      const checkedItems = new Set<string>();
      checkedItems.add(item);
    },
    onNext: () => {
      page += 1;
    },
    page,
    onPrevious: () => {
      page -= 1;
    },
  },
};
