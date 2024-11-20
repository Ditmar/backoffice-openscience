import type { StoryObj, Meta } from '@storybook/react';
import ArticleInput from './ArticleInput';
import angleDown from '../../../../assets/icons/angle-down.svg?raw';

const meta: Meta<typeof ArticleInput> = {
  title: 'ui/components/atoms/ArticleInput',
  component: ArticleInput,
  argTypes: {
    onChange: { action: 'article-changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {
  args: {
    label: 'article',
    placeholder: 'Placeholder text',
    onChange: () => {},
    icon: angleDown,
  },
};
