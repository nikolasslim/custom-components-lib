import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "./TextField";

describe("TextField", () => {
  test("should render with the correct label", () => {
    render(<TextField label="Name" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  test("should call onChange when user types", () => {
    const handleChange = jest.fn();
    render(<TextField label="Email" onChange={handleChange} />);
    const input = screen.getByLabelText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("should render error label when error prop is true", () => {
    render(<TextField label="Password" error={true} />);
    expect(screen.getByLabelText("Error")).toBeInTheDocument();
  });
});
