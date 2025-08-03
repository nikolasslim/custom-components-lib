import Select from "./Select";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
      description:
        "The current selected value. This is a controlled component.",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the value changes.",
    },
    options: {
      control: "object",
      description: "Array of options to display.",
    },
    disabled: {
      control: "boolean",
      description: "If true, the select input is disabled.",
    },
    id: {
      control: "text",
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: "ten", label: "Ten" },
  { value: "twenty", label: "Twenty" },
  { value: "thirty", label: "Thirty" },
];

export const Default: Story = {
  name: "Default (Interactive)",
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.value || "");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(e.target.value);
      args.onChange?.(e);
    };

    return <Select {...args} value={selectedValue} onChange={handleChange} />;
  },
  args: {
    label: "Choose a number",
    options: defaultOptions,
    value: "",
  },
};

export const Preselected: Story = {
  name: "Preselected Value",
  render: Default.render,
  args: {
    ...Default.args,
    label: "Preselected number",
    value: "twenty",
  },
};

export const Disabled: Story = {
  name: "Disabled Select",
  render: Default.render,
  args: {
    ...Default.args,
    label: "Disabled options",
    disabled: true,
  },
};

export const WithManyOptions: Story = {
  name: "Scrollable List",
  render: Default.render,
  args: {
    ...Default.args,
    label: "Select a large number",
    options: Array.from({ length: 50 }, (_, i) => ({
      value: `item${i + 1}`,
      label: `Item number ${i + 1}`,
    })),
  },
};

export const NoOptions: Story = {
  name: "No Available Options",
  render: Default.render,
  args: {
    ...Default.args,
    label: "No options",
    options: [],
    value: "",
  },
};
