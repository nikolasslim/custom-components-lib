import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component props", () => {
  test("should display the correct text from the label prop", () => {
    render(<Button label="label" />);
    const buttonElement = screen.getByText(/label/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("should apply default classes when size and variant are not provided", () => {
    render(<Button label="By default" />);
    const buttonElement = screen.getByText(/By default/i);

    expect(buttonElement).toHaveClass("button-small");
    expect(buttonElement).toHaveClass("button-text");
  });

  describe("size prop", () => {
    const sizes: Array<["small" | "medium" | "large", string]> = [
      ["small", "button-small"],
      ["medium", "button-medium"],
      ["large", "button-large"],
    ];

    test.each(sizes)(
      'should apply class %s for size="%s"',
      (size, expectedClass) => {
        render(<Button label="Size" size={size} />);
        const buttonElement = screen.getByText(/size/i);
        expect(buttonElement).toHaveClass(expectedClass);
      },
    );
  });

  describe("variant prop", () => {
    const variants: Array<["contained" | "outlined" | "text", string]> = [
      ["text", "button-text"],
      ["contained", "button-contained"],
      ["outlined", "button-outlined"],
    ];

    test.each(variants)(
      'should apply class %s for variant="%s"',
      (variant, expectedClass) => {
        render(<Button label="Style" variant={variant} />);
        const buttonElement = screen.getByText(/style/i);
        expect(buttonElement).toHaveClass(expectedClass);
      },
    );
  });
});
