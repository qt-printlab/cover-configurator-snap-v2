import clsx from "clsx";
import LoaderSpinnerIcon from "../Icons/LoaderSpinnerIcon";

interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  children,
  className,
  isActive = false,
  disabled,
  isLoading,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <LoaderSpinnerIcon /> : null}
      {children}
    </button>
  );
};
