import type { StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  title: "ui/components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Background color of the button",
    },
    color: {
      control: "color",
      description: "Text color of the button",
    },
    hover: {
      control: "color",
      description: "Background color of the button on hover",
    },
    active: {
      control: "color",
      description: "Background color of the button when active",
    },
    focus: {
      control: "color",
      description: "Background color of the button on focus",
    },
    borderRadius: {
      control: "text",
      description: "Border radius of the button",
    },
    icon: {
      control: { type: "text" },
      description: "Icon to be displayed on the button",
    },
    onClick: {
      action: "click",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    label: "Button",
    backgroundColor: "#7f7f7f",
    color: "#ffffff",
    borderRadius: "5em",
    icon: "+",
    hover: "#6e6e6e",
    active: "#5e5e5e",
    focus: "#4e4e4e",
  },
};
