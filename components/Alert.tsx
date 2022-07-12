import type { MouseEventHandler, PropsWithChildren } from "react";
import { Icon } from "./Icon";
import classNames from "classnames";

interface Props {
  color?: "blue" | "spruce" | "purple";
  onClose?: MouseEventHandler<any>;
  className?: string;
}

export function Alert({
  color = "blue",
  onClose,
  className,
  children,
}: PropsWithChildren<Props>) {
  const classes = classNames(
    "flex flex-row pl-4 py-2 mx-auto my-2 border-2 rounded-md shadow-md",
    { "bg-blue-light border-blue": color === "blue" },
    { "bg-spruce-light border-spruce": color === "spruce" },
    { "bg-purple-light border-purple text-cream": color === "purple" },
    { "pr-4": !onClose },
    className
  );

  const buttonClasses = classNames(
    "p-3 my-auto ml-2 rounded",
    { "hover:bg-blue focus-visible:bg-blue": color === "blue" },
    { "hover:bg-spruce focus-visible:bg-spruce": color === "spruce" },
    { "hover:bg-purple focus-visible:bg-purple text-cream": color === "purple" }
  );

  return (
    <div className={classes}>
      <div>{children}</div>
      {onClose && (
        <button onClick={onClose} className={buttonClasses}>
          <Icon type="xmark" />
        </button>
      )}
    </div>
  );
}
