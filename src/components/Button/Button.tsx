import React from "react";
import { ButtonProps } from "../../types/button";
import "./Button.css";

export default function Button({
  label,
  size = "small",
  variant = "text",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "custom-button",
        `custom-button-${size}`,
        `custom-button-${variant}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
}
