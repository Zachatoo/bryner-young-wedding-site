import type { PropsWithChildren } from "react";
import React from "react";

interface Props {}

export function Accordian({ children }: PropsWithChildren<Props>) {
  return <section className="w-full">{children}</section>;
}
