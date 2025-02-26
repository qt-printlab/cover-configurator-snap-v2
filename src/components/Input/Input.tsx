import React from "react";
import styles from "./style.module.scss";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  blockInputItemClassName?: string;
  containerClassName?: string;
  error?: FieldError | { message: string } | null | any;
  showClear?: boolean;
  resetField?: () => void;
  readOnly?: boolean;
}

export const Input: React.FC<InputProps> = ({
  blockInputItemClassName = "",
  containerClassName = "",
  error,
  name,
  placeholder,
  type = "text",
  showClear = false,
  value,
  onChange,
  resetField,
  maxLength,
  disabled,
  readOnly,
  onBlur,
  onFocus,
  ...restProps
}) => {
  return (
    <div className={`${styles.inputWrapper} ${blockInputItemClassName}`}>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        onBlur={onBlur}
        onFocus={onFocus}
        className={styles.input}
        {...restProps}
      />

      {showClear && value && !readOnly && (
        <button
          type="button"
          onClick={resetField}
          className={styles.clearButton}
        >
          ✕
        </button>
      )}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Input;
