import React from "react";
import {
  Controller,
  useFormContext,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import Select from "../Select/Select";

interface SelectFormFieldProps {
  name: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  rules?: RegisterOptions<FieldValues, string>;
  disabled?: boolean;
  selectClassName?: string;
  errorClassName?: string;
  onChange?: (selectedValue: string, oldValue?: string | undefined) => void;
}

export const SelectFormField: React.FC<SelectFormFieldProps> = ({
  name,
  options,
  placeholder,
  rules,
  disabled,
  selectClassName,
  errorClassName,
  onChange,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <Select
            {...field}
            onChange={(event) => {
              const oldValue = field.value;
              field.onChange(event.target.value);
              if (onChange) {
                onChange(event.target.value, oldValue);
              }
            }}
            options={options}
            placeholder={placeholder}
            disabled={disabled}
            selectClassName={selectClassName}
          />
          {error && <span className={errorClassName}>{error.message}</span>}
        </>
      )}
    />
  );
};

export default SelectFormField;
