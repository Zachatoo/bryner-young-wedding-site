import classNames from "classnames";
import { PropsWithChildren } from "react";

type ColSize = "1/2";

interface Props {
  sm?: ColSize;
  md?: ColSize;
  className?: string;
}

export function Col({ sm, md, className, children }: PropsWithChildren<Props>) {
  const classes = classNames(
    "flex flex-col w-full p-2",
    { "sm:w-1/2": sm === "1/2" },
    { "md:w-1/2": md === "1/2" },
    className
  );

  return <div className={classes}>{children}</div>;
}
