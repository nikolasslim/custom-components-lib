import { Meta, StoryObj } from "@storybook/react/*";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "checked",
      control: "boolean",
    },
    disabled: {
      description: "disabled",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Test1: Story = {
  name: "Regular behaviour",
  args: {},
};

export const Test2: Story = {
  name: "Checked",
  args: {
    checked: true,
  },
};

export const Test3: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    checked: true,
  },
};
