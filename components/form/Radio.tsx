import type { InputHTMLAttributes } from "react";
import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register?: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
}

export function Radio({
  name,
  label,
  value,
  register,
  registerOptions,
  className,
  ...rest
}: Props) {
  const classes = classNames("w-full h-full", className);

  return (
    <div className={classes}>
      <input
        type="radio"
        name={name}
        value={value}
        id={value?.toString()}
        className="absolute opacity-0"
        {...register?.(name, registerOptions)}
        {...rest}
      />
      <label
        htmlFor={value?.toString()}
        className="block w-full h-full py-3.5 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
