import classNames from "classnames";
import { IconType } from "components";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import dynamic from "next/dynamic";
import TextareaAutosize from "react-textarea-autosize";
import { ValidationText } from "./ValidationText";

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

  const Tag = inputType === "textarea" ? TextareaAutosize : "input";
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
          <div className="my-auto pr-1.5">
            <Icon type={icon} className={iconClasses} />
          </div>
        )}
        <Tag
          id={name}
          title={label}
          name={name}
          className="w-full p-1 my-1"
          aria-invalid={error ? "true" : "false"}
          type={inputType}
          placeholder={label ?? name}
          {...register?.(name, registerOptions)}
          {...args}
        ></Tag>
      </div>
      {error && <ValidationText>{error.message}</ValidationText>}
    </>
  );
}
