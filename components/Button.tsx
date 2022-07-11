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
  const iconPath = "/icons/heart.svg";
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
      {isSubmitting && (
        <>
          <picture>
            <img
              src={iconPath}
              alt=""
              className="absolute motion-safe:animate-ping"
            />
          </picture>
          <picture>
            <img src={iconPath} alt="" className="opacity-95" />
          </picture>
        </>
      )}
      {!isSubmitting && children}
    </button>
  );
}
