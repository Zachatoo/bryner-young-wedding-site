import classNames from "classnames";
import React from "react";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function RadioGroup({ className, children }: PropsWithChildren<Props>) {
  const classes = classNames("radio-group flex mt-[2px]", className);

  return (
    <div className={classes}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        if (i === 0) {
          return React.cloneElement(child, {
            className: "radio-first",
          });
        } else if (i === React.Children.count(children) - 1) {
          return React.cloneElement(child, {
            className: "radio-last",
          });
        }
        return child;
      })}
    </div>
  );
}
