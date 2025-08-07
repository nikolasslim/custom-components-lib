import { ComponentProps } from "react";

export interface SwitchProps extends ComponentProps<"input"> {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export {};
