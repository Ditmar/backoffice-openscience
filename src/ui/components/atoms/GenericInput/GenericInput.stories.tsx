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
    placeholder: 'Placeholder text',
    icon: angleDown,
  },
};

export const YearInput: Story = {
  args: {
    label: 'year_volume',
    placeholder: 'Placeholder text',
    icon: angleDown,
  },
};
