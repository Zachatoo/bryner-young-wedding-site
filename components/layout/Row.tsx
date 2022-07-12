import classNames from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function Row({ className, children }: PropsWithChildren<Props>) {
  const classes = classNames("flex flex-wrap", className);

  return <div className={classes}>{children}</div>;
}
