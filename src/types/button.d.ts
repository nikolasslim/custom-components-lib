import { ComponentProps } from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "text" | "outlined" | "contained";

export interface ButtonProps extends ComponentProps<"button"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  label?: string;
}

export default function Button(props: ButtonProps): import("react").JSX.Element;
export {};
