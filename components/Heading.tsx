import classNames from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  paddingClasses?: string;
}

export function Heading({
  paddingClasses,
  children,
}: PropsWithChildren<Props>) {
  const classes = classNames(
    "text-green-dark",
    {
      "pt-16 sm:pt-20": !paddingClasses,
    },
    paddingClasses
  );

  return (
    <div className={classes}>
      {children}
      <img src="/horizontalRule.png" alt="" className="h-12 mx-auto mb-8" />
    </div>
  );
}
