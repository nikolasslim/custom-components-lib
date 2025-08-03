import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    checked: {
      description: "is checked",
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Test1: Story = {
  name: "Enabled",
  args: {
    label: "Yes",
  },
};

export const Test2: Story = {
  name: "Disabled",
  args: {
    label: "ooops, disabled",
    disabled: true,
  },
};
