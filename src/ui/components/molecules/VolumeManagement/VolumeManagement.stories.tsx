import type { StoryObj, Meta } from '@storybook/react';
import VolumeManagement from './VolumeManagement';

const meta: Meta<typeof VolumeManagement> = {
  title: 'ui/components/molecules/VolumeManagement',
  component: VolumeManagement,
  argTypes: {
    onTitleChange: { action: 'title-changed' },
    onDateChange: { action: 'date-changed' },
    onArticleChange: { action: 'article-changed' },
    onYearChange: { action: 'year-changed' },
    onDateIconClick: { action: 'date-icon-clicked' },
    onArticleIconClick: { action: 'article-icon-clicked' },
    onYearIconClick: { action: 'year-icon-clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titlePlaceholder: 'Enter title',
    datePlaceholder: 'Select date',
    articlePlaceholder: 'Enter article',
    yearPlaceholder: 'Enter year',
  },
};
