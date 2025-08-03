import { ComponentProps } from "react";

export interface selectOptions {
  value: string;
  label: string;
}

export interface selectProps extends ComponentProps<"select"> {
  label?: string;
  options?: selectOptions[];
}

export default function Select(props: selectProps): import("react").JSX.Element;
export {};
