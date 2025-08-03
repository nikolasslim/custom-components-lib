import { TextFieldProps } from "../../types/textField";
import React, { useId, useState } from "react";
import styles from "./TextField.module.scss";

export default function TextField({
  error = false,
  label,
  onChange,
  value: inputsValue,
  defaultValue,
  ...props
}: TextFieldProps) {
  const [fieldsInput, setFieldsInput] = useState(defaultValue ?? "");

  const generatedId = useId();
  const inputId = props.id || generatedId;

  const isControlled = inputsValue !== undefined;
  const value = isControlled ? inputsValue : fieldsInput;
  const valueClass = (value ?? "") === "" ? styles.emptyValue : styles.isValue;

  const hasError = typeof error === "function" ? error() : error;
  const errorClass = hasError ? styles.isError : styles.isValid;

  const container = [styles.textFieldContainer, errorClass].join(" ");
  const inputField = [styles.textFieldInput, valueClass, errorClass].join(" ");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setFieldsInput(newValue);
    }

    onChange?.(e);
  };

  return (
    <div className={container}>
      <input
        id={inputId}
        className={inputField}
        value={value}
        onChange={handleInputChange}
        {...props}
      />
      <label className={styles.textFieldLabel} htmlFor={inputId}>
        {hasError ? "Error" : label}
      </label>
    </div>
  );
}
