import type { StoryObj, Meta } from '@storybook/react';
import Calculator  from './Calculator';

const meta = {
    title: 'ui/components/calculator',
    component: Calculator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Calculator>;

type Story = StoryObj<typeof meta>;

export const CalcPrimary: Story = {
    args: {
        variants: 'primarysds',
    }
}
export const CalcSecondary: Story = {
    args: {
        variants: 'secondary',
    }
}
export default meta;