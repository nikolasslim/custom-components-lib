import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

describe("Modal", () => {
  test("does not render when open prop is false", () => {
    render(
      <Modal open={false}>
        <h1>Modal Title</h1>
      </Modal>,
    );

    const title = screen.queryByText("Modal Title");
    expect(title).not.toBeInTheDocument();
  });

  test("renders children when open prop is true", () => {
    render(
      <Modal open={true}>
        <h1>Modal Title</h1>
        <p>Modal content goes here.</p>
      </Modal>,
    );

    const title = screen.getByText("Modal Title");
    const content = screen.getByText("Modal content goes here.");

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test("calls onClose when the modal background is clicked", () => {
    const handleClose = jest.fn();

    render(
      <Modal open={true} onClose={handleClose}>
        <h1>Modal Title</h1>
      </Modal>,
    );

    const titleElement = screen.getByText("Modal Title");
    const dialogElement = titleElement.parentElement;
    const backgroundElement = dialogElement?.parentElement;

    if (backgroundElement) {
      fireEvent.click(backgroundElement);
    }

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when the modal content is clicked", () => {
    const handleClose = jest.fn();

    render(
      <Modal open={true} onClose={handleClose}>
        <h1>Clickable Content</h1>
      </Modal>,
    );

    const contentElement = screen.getByText("Clickable Content");
    fireEvent.click(contentElement);

    expect(handleClose).not.toHaveBeenCalled();
  });
});
