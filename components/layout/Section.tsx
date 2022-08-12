import type { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props {
  paddingClasses?: string;
}

export function Section({
  paddingClasses,
  children,
}: PropsWithChildren<Props>) {
  const classes = classNames(
    "max-w-3xl px-4 mx-auto",
    {
      "pt-16 sm:pt-20": !paddingClasses,
    },
    paddingClasses
  );

  return <section className={classes}>{children}</section>;
}
