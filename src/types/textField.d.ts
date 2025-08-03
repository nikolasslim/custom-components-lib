import { ComponentProps } from "react";

export type ErrorType = boolean | (() => boolean);

export interface TextFieldProps extends ComponentProps<"input"> {
  error?: ErrorType;
  label?: string;
  initialValue?: string;
}

export default function TextField(
  props: TextFieldProps,
): import("react").JSX.Element;
export {};
