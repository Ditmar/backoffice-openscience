import type { StoryObj, Meta } from '@storybook/react';
import Display  from './display';

const meta = {
    title: 'ui/components/calculator/display',
    component: Display,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Display>;

type Story = StoryObj<typeof meta>;

export const DisplayPrimary: Story = {
    args: {
        variants: 'primary',
        display: '123',
    }
}
export const DisplaySecondary: Story = {
    args: {
        variants: 'secondary',
        display: '3454*34534'
    }
}
export default meta;