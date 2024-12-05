import type { Meta, StoryObj } from '@storybook/react';
import GenericInput from './GenericInput';
import angleDown from '../../../../assets/icons/angle-down.svg?raw';

const meta: Meta<typeof GenericInput> = {
  title: 'ui/components/atoms/GenericInput',
  component: GenericInput,
  argTypes: {
    onChange: { action: 'input-changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleInput: Story = {
  args: {
    label: 'article',
    placeholder: 'Select an article',
    icon: angleDown,
    options: ['article 1', 'article 2', 'article 3', 'article 4', 'article 5'],
  },
};

export const YearInput: Story = {
  args: {
    label: 'year_volume',
    placeholder: 'Select a year volume',
    icon: angleDown,
    options: ['year_volume 1', 'year_volume 2', 'year_volume 3', 'year_volume 4', 'year_volume 5'],
  },
};
