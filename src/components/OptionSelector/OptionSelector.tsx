import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import Image from "../Image/Image";
import clsx from "clsx";
import style from "./style.module.scss";

interface OptionSelectorProps {
  name: string;
  options: {
    id: number;
    label: string;
    src: string;
  }[];
  itemClassName?: string;
  onChange?: (selectedId: number) => void;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
  name,
  options,
  itemClassName,
  onChange,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={style.optionSelectorWrapper}>
          {options.map((option) => {
            return (
              <div
                key={option.id}
                onClick={() => {
                  field.onChange(option.id);
                  if (onChange) {
                    onChange(option.id);
                  }
                }}
                className={style.containerWithOptions}
              >
                <Image
                  className={clsx(itemClassName, {
                    [style.selectedClassName || ""]: option.id === field.value,
                  })}
                  src={option.src}
                  alt={option.label}
                />
                <span className={style.itemLabel}>{option.label}</span>
              </div>
            );
          })}
        </div>
      )}
    />
  );
};

export default OptionSelector;
