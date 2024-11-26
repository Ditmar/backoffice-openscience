import type { Meta, StoryObj } from '@storybook/react';
import Form from './bibliograpyform';
import type { IFormField } from './types/Iprops';

const meta: Meta<typeof Form> = {
  title: 'ui/components/molecules/bibliographyform',
  component: Form,
  argTypes: {
    fields: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

const basicFields: IFormField[] = [
  {
    id: 'public',
    name: 'Public Type',
    placeholder: 'Enter public type',
    onChange: () => {},
  },
  {
    id: 'lastname',
    name: 'authorlast Name',
    placeholder: 'Enter author last name',
    onChange: () => {},
  },
  {
    id: 'initials',
    name: 'autorInitials',
    placeholder: 'Enter author initials',
    onChange: () => {},
  },
  { id: 'title', name: 'publication Title', placeholder: 'Enter title', onChange: () => {} },
  { id: 'volume', name: 'volume', placeholder: 'Enter volume', onChange: () => {} },
  { id: 'number', name: 'edition number', placeholder: 'Enter number edition', onChange: () => {} },
  { id: 'page', name: 'Pages', placeholder: 'Enter Pages', onChange: () => {} },
  {
    id: 'init',
    name: 'edition initials',
    placeholder: 'Enter editor initials',
    onChange: () => {},
  },
  {
    id: 'lastnameditor',
    name: 'editor lats name',
    placeholder: 'Enter last name editor',
    onChange: () => {},
  },
  {
    id: 'place',
    name: 'publication Place',
    placeholder: 'Enter publication place',
    onChange: () => {},
  },
  { id: 'editor', name: 'Editor', placeholder: 'Enter Editor', onChange: () => {} },
  {
    id: 'address',
    name: 'Electronic Address',
    placeholder: 'Confirm addres direction',
    onChange: () => {},
  },
];

export const Basic: Story = {
  args: {
    fields: basicFields,
  },
};
