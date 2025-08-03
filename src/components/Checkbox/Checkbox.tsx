import React from "react";
import { CheckboxProps } from "../../types/checkbox";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ label = "", ...props }: CheckboxProps) {
  return (
    <label className={styles.checkboxLabel}>
      <div className={styles.checkboxMark}>
        <input type="checkbox" {...props} />
        {label}
      </div>
    </label>
  );
}
