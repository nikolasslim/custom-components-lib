import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "onClose" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Test1: Story = {
  name: "modal test",
  render: (arg) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <p>text </p>
        <p>text </p>
        <p>text </p>
        <p>text </p>
        <p>text </p>

        <button onClick={() => setOpen(true)}>open modal</button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h1>Some header</h1>
          <div>some text</div>
          <button onClick={() => setOpen(false)}>close</button>
        </Modal>
      </>
    );
  },
};
