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
  maxLength?: number;
  type?: "text" | "number" | "email" | "password" | "search";
  readonly?: boolean;
  onValidationStateChange?: (state: boolean) => void;
  invalidCaracters?: string;
};

export const InputFormField: React.FC<InputFormFieldProps> = ({
  name,
  placeholder,
  className = "",
  containerClassName = "",
  rules,
  showClear,
  maxLength,
  type = "text",
  readonly,
  invalidCaracters,
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
          maxLength={maxLength}
          className={className}
          containerClassName={containerClassName}
          type={type}
          readOnly={readonly}
          invalidCaracters={invalidCaracters}
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
