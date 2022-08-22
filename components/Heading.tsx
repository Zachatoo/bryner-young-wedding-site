import type { PropsWithChildren } from "react";
import { HorizontalRule } from "components";

interface Props {
  id: string;
}

export function Heading({ id, children }: PropsWithChildren<Props>) {
  return (
    <div id={id} className="text-green-dark">
      {children}
      <HorizontalRule />
    </div>
  );
}
