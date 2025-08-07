import React, { ChangeEvent, useEffect, useId, useRef, useState } from "react";
import { selectProps } from "../../types/select";
import "./Select.css";

export default function Select({
  label,
  onChange,
  value = "",
  options = [],
  disabled = false,
  ...props
}: selectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const generatedId = useId();
  const selectId = props.id || generatedId;
  const selectRef = useRef<HTMLDivElement>(null);

  const wrapFieldClass = `custom-select ${value === "" ? "custom-select-empty" : "custom-select-filled"}`;

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (onChange) {
      const event = {
        target: { value: optionValue },
      } as ChangeEvent<HTMLSelectElement>;
      onChange(event);
    }
    setIsOpen(false);
  };

  return (
    <div className={wrapFieldClass} ref={selectRef}>
      {label && (
        <label htmlFor={selectId} className="custom-select-label">
          {label}
        </label>
      )}

      <div
        id={selectId}
        className={`custom-select-select ${disabled ? "custom-select-disabled" : ""} ${isOpen ? "custom-select-open" : ""}`}
        onClick={handleToggle}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <span className="custom-select-value">{displayValue || ""}</span>
        <span className="custom-select-arrow">▼</span>
      </div>

      {isOpen && (
        <div className="custom-select-dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-select-option ${option.value === value ? "custom-select-option-selected" : ""}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
