import React from "react";
import { ButtonProps } from "../../types/button";
import styles from "./Button.module.scss";

export default function Button({
  label,
  size = "small",
  variant = "text",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        styles[`button-${size}`],
        styles[`button-${variant}`],
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
}
