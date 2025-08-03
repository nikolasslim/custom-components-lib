import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "./Select";

const testOptions = [
  { value: "id1", label: "First Option" },
  { value: "id2", label: "Second Option" },
  { value: "id3", label: "Third Option" },
];

describe("Select", () => {
  test("should render with initial value and label", () => {
    render(<Select label="My Select" options={testOptions} value="id1" />);
    expect(screen.getByText("My Select")).toBeInTheDocument();
    expect(screen.getByText("First Option")).toBeInTheDocument();
    expect(screen.queryByText("Second Option")).not.toBeInTheDocument();
  });

  test("should toggle dropdown on click", () => {
    render(<Select label="My Select" options={testOptions} value="id1" />);
    const control = screen.getByText("First Option");
    fireEvent.click(control);
    expect(screen.getByText("Second Option")).toBeInTheDocument();
    fireEvent.click(control);
    expect(screen.queryByText("Second Option")).not.toBeInTheDocument();
  });

  test("should select an option and call onChange", () => {
    const handleChange = jest.fn();
    render(
      <Select
        label="My Select"
        options={testOptions}
        value="id1"
        onChange={handleChange}
      />,
    );
    fireEvent.click(screen.getByText("First Option"));
    fireEvent.click(screen.getByText("Second Option"));
    const mockEvent = handleChange.mock.calls[0][0];
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(mockEvent.target.value).toBe("id2");
    expect(screen.queryByText("Third Option")).not.toBeInTheDocument();
  });

  test("should not open dropdown when disabled", () => {
    render(<Select label="My Select" options={testOptions} disabled />);
    fireEvent.click(screen.getByText("My Select"));
    expect(screen.queryByText("First Option")).not.toBeInTheDocument();
  });

  test("should close dropdown when clicking outside", () => {
    render(
      <>
        <Select label="My Select" options={testOptions} value="id1" />
        <button>External Button</button>
      </>,
    );
    fireEvent.click(screen.getByText("First Option"));
    expect(screen.getByText("Second Option")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText("External Button"));

    expect(screen.queryByText("Second Option")).not.toBeInTheDocument();
  });
});
