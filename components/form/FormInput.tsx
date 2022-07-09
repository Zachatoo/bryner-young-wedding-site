import classNames from "classnames";
import { IconType } from "components";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("../../components/Icon"), {
  ssr: false,
});
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

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

  function _getErrorMessage() {
    if (!error) {
      return null;
    }
    if (error.message) {
      return error.message;
    }
    switch (error.type) {
      case "required":
        return `${label} is required`;
      case "minLength":
        return `${label} must be at least ${registerOptions?.minLength} characters`;
      case "maxLength":
        return `${label} must not exceed ${registerOptions?.maxLength} characters`;
      case "min":
        return `${label} must be at least ${registerOptions?.min}`;
      case "max":
        return `${label} must not exceed ${registerOptions?.max}`;
      case "pattern":
        return "Invalid pattern";
      default:
        return error.type;
    }
  }

  const Tag = inputType === "textarea" ? "textarea" : "input";
  const classes = classNames(
    "group flex w-full items-start px-3 py-1.5 border rounded-md",
    className
  );

  return (
    <div className={classes}>
      {icon && (
        <div className="flex my-auto pr-1.5">
          <Icon type={icon} />
        </div>
      )}
      <ReactTooltip
        id={`React-tooltip-${name}`}
        getContent={_getErrorMessage}
        place="top"
        type="error"
        effect="solid"
      />
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
  );
}
