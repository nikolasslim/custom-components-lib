import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("should render with a label", () => {
    render(<Checkbox label="My Checkbox" />);
    const checkbox = screen.getByLabelText("My Checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("should be checked when checked prop is true", () => {
    render(<Checkbox label="Is Checked" checked readOnly />);
    const checkbox = screen.getByLabelText("Is Checked");
    expect(checkbox).toBeChecked();
  });

  test("should be disabled when disabled prop is true", () => {
    render(<Checkbox label="Is Disabled" disabled />);
    const checkbox = screen.getByLabelText("Is Disabled");
    expect(checkbox).toBeDisabled();
  });

  test("should call onChange handler when the label is clicked", () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Clickable" onChange={handleChange} />);
    const label = screen.getByText("Clickable");
    fireEvent.click(label);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
