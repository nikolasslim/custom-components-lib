import React from "react";
import { CheckboxProps } from "../../types/checkbox";
import "./Checkbox.css";

export default function Checkbox({ label = "", ...props }: CheckboxProps) {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" className="custom-checkbox-input" {...props} />
      <span className="custom-checkbox-checkmark"></span>
      <span className="custom-checkbox-label">{label}</span>
    </label>
  );
}
