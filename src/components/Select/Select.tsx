import React from "react";
import { SelectOptionProps } from "../../types/global.types";
import styles from "./style.module.scss";
import clsx from "clsx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptionProps[];
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  value,
  onChange,
  disabled,
  selectClassName,
  ...props
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
      className={clsx(styles.selectStyle, selectClassName)}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
