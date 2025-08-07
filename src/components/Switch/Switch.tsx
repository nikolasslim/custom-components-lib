import React from "react";
import { SwitchProps } from "../../types/switch";
import "./Switch.css";

export default function Switch({ checked, disabled, onChange }: SwitchProps) {
  return (
    <label className="custom-switch">
      <input
        type="checkbox"
        className="custom-switch-input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="custom-switch-track">
        <span className="custom-switch-thumb"></span>
      </span>
    </label>
  );
}
