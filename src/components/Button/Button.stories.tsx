import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Enter your text",
      control: "text",
    },
    variant: {
      description: "style",
      control: { type: "radio" },
      options: ["contained", "outlined", "text"],
    },
    size: {
      description: "bnt size ",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Test1: Story = {
  name: "Button",
  args: {
    size: "medium",
    variant: "contained",
    label: "click",
  },
};
