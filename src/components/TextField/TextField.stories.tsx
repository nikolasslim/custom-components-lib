import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import TextField from "./TextField";
import React from "react";
import { TextFieldProps } from "../../types/textField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    error: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

const ControlledTextField = ({ initialValue, ...args }: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Test1: Story = {
  name: "With value (Controlled)",
  render: (args) => <ControlledTextField {...args} initialValue="Warsaw 22A" />,
  args: {
    label: "Address",
    error: false,
  },
};

export const Test2: Story = {
  name: "Error",
  args: {
    label: "Street",
    error: true,
  },
};

export const NoError: Story = {
  name: "No error (Uncontrolled)",
  args: {
    label: "Email",
    error: false,
  },
};

export const WithDefaultValue: Story = {
  name: "With default value (Uncontrolled)",
  args: {
    label: "City",
    defaultValue: "", // используем defaultValue вместо value
    error: false,
  },
};
