import React from "react";
import { SwitchProps } from "../../types/switch";
import styles from "./Switch.module.scss";

export default function Switch({ checked, disabled, onChange }: SwitchProps) {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={`${styles.slider}`}></span>
      <span className={`${styles.sliderCircle}`}></span>
    </label>
  );
}
