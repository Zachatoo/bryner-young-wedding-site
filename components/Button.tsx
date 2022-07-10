import type { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
}

export function Button({
  isSubmitting,
  disabled,
  className,
  children,
  ...rest
}: Props) {
  const isDisabled = disabled || isSubmitting;
  const classes = classNames(
    "h-9 px-4 text-white rounded-md bg-green-dark",
    {
      "hover:bg-green focus-visible:bg-green ease-in-out duration-300":
        !isDisabled,
    },
    className
  );

  return (
    <button {...rest} className={classes} disabled={isDisabled}>
      {isSubmitting && <img src="/icons/heart.svg" />}
      {!isSubmitting && children}
    </button>
  );
}
