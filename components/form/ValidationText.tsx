import { PropsWithChildren } from "react";

interface Props {}

export function ValidationText({ children }: PropsWithChildren<Props>) {
  return (
    <span role="alert" className="pl-1.5 text-sm text-left text-red">
      {children}
    </span>
  );
}
