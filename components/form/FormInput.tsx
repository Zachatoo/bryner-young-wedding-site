import classNames from "classnames";
import { IconType } from "components";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("../../components/Icon"), {
  ssr: false,
});

interface Props {
  name: string;
  label: string;
  icon: IconType;
  register?: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  type?: "text" | "number" | "tel" | "textarea";
  pattern?: string;
  min?: number;
  max?: number;
  required?: boolean;
  rows?: number;
  disabled?: boolean;
  className?: string;
}

export function FormInput(props: Props) {
  const {
    name,
    label,
    icon,
    register,
    registerOptions,
    error,
    type: inputType,
    className,
    ...args
  } = props;

  const Tag = inputType === "textarea" ? "textarea" : "input";
  const classes = classNames(
    "group flex w-full items-start px-3 py-1.5 border rounded-md",
    className
  );
  const iconClasses = classNames(
    {
      "text-spruce group-hover:text-green-dark group-focus-within:text-green-dark":
        !error,
    },
    { "text-red": error }
  );

  return (
    <>
      <div className={classes}>
        {icon && (
          <div className="flex my-auto pr-1.5">
            <Icon type={icon} className={iconClasses} />
          </div>
        )}
        <Tag
          id={name}
          title={label}
          name={name}
          data-for={`React-tooltip-${name}`}
          data-tip
          className="w-full p-1 my-1"
          aria-invalid={error ? "true" : "false"}
          type={inputType}
          placeholder={label ?? name}
          {...register?.(name, registerOptions)}
          {...args}
        ></Tag>
      </div>
      {error && (
        <span className="pl-1.5 text-sm text-left text-red">
          {error.message}
        </span>
      )}
    </>
  );
}