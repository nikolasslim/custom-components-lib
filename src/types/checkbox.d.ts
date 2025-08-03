import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<"input"> {
  label?: string;
}

function Checkbox(props: CheckboxProps): import("react").JSX.Element;

export {};
