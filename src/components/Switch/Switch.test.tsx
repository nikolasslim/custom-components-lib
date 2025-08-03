import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Switch from "./Switch";

describe("Switch", () => {
  test("should render correctly", () => {
    render(<Switch />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("should be checked when checked prop is true", () => {
    render(<Switch checked={true} onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("should be disabled when disabled prop is true", () => {
    render(<Switch disabled={true} />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  test("should call onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    const switchControl = screen.getByRole("checkbox");
    fireEvent.click(switchControl);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
