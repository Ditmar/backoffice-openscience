import type { StoryObj, Meta } from "@storybook/react"

import { TabLabel } from "./TabLabel"

const meta: Meta<typeof TabLabel> = {
    title: "ui/atoms/TabLabel",
    component: TabLabel,
    
    argTypes: {
        text: {
            control: "text",
            type: { name: "string", required: true },
        },
        isEnable: {
            control: "boolean",
            type: { name: "boolean", required: true },
        },
    },
}


export default meta;

type Story = StoryObj<typeof meta>

export const Small: Story = {
    args: {
        text: "TabLabel",
        isEnable: false,
        variant: "small",
    },
}

export const medium: Story = {
    args: {
        text: "TabLabel",
        isEnable: true,
        variant: "medium",
        isSelect: true,
    },
}

export const Large: Story = {
    args: {
        text: "TabLabel",
        isEnable: true,
        variant: "large",
    },
}