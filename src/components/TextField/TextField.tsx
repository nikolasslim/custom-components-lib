import { TextFieldProps } from "../../types/textField";
import React, { useId, useState } from "react";
import "./TextField.css";

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
  const valueClass =
    (value ?? "") === "" ? "custom-textfield-empty" : "custom-textfield-filled";

  const hasError = typeof error === "function" ? error() : error;
  const errorClass = hasError ? "custom-textfield-error" : "";

  const container = `custom-textfield ${errorClass}`.trim();
  const inputField = `custom-textfield-input ${valueClass}`.trim();

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
      <label className="custom-textfield-label" htmlFor={inputId}>
        {hasError ? "Error" : label}
      </label>
      {hasError && (
        <div className="custom-textfield-error-message">
          {typeof error === "string" ? error : "This field is required"}
        </div>
      )}
    </div>
  );
}
