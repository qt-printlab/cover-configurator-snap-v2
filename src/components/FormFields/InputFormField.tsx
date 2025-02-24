import React, { useEffect } from "react";
import {
  Controller,
  useFormContext,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import lodashGet from "lodash/get";
import { Input } from "../Input/Input";

type InputFormFieldProps = {
  name: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  showClear?: boolean;
  suffixIcon?: React.ElementType;
  maxLength?: number;
  type?: "text" | "number" | "email" | "password" | "search";
  readonly?: boolean;
  onValidationStateChange?: (state: boolean) => void;
};

export const InputFormField: React.FC<InputFormFieldProps> = ({
  name,
  placeholder,
  className = "",
  containerClassName = "",
  rules,
  showClear,
  suffixIcon,
  maxLength,
  type = "text",
  readonly,
  onValidationStateChange,
}) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  useEffect(() => {
    if (onValidationStateChange) {
      onValidationStateChange(!lodashGet(errors, name));
    }
  }, [errors, name, onValidationStateChange]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { ref, onBlur, onChange, ...rest } }) => (
        <Input
          error={lodashGet(errors, name)}
          placeholder={placeholder}
          showClear={showClear}
          resetField={() => onChange("")}
          onChange={onChange}
          suffixIcon={suffixIcon}
          maxLength={maxLength}
          className={className}
          containerClassName={containerClassName}
          type={type}
          readOnly={readonly}
          onBlur={(e) => {
            onBlur();
            trigger(name);
          }}
          {...rest}
        />
      )}
    />
  );
};

export default InputFormField;
