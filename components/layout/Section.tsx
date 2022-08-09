import type { PropsWithChildren } from "react";

interface Props {
  id: string;
}

export function Section({ id, children }: PropsWithChildren<Props>) {
  return (
    <section id={id} className="max-w-3xl px-4 mx-auto">
      {children}
    </section>
  );
}
