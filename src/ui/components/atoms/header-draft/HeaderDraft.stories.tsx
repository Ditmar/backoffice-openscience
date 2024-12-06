import type { Meta, StoryObj } from '@storybook/react';
import HeaderDraft from './HeaderDraft';
import type { IHeaderDraftProps } from './types/IHeaderDraftProps';

const meta: Meta<IHeaderDraftProps> = {
  title: 'ui/components/atoms/header-draft',
  component: HeaderDraft,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    icon: {
      control: 'text',
      defaultValue: 'period',
    },
    text: {
      control: 'text',
      defaultValue: 'Editing draft version',
    },
  },
};

export default meta;

type Story = StoryObj<IHeaderDraftProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Editing draft version',
    icon: 'period',
    headingLevel: 'h3',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Editing draft version',
    icon: 'period',
    headingLevel: 'h3',
  },
};
