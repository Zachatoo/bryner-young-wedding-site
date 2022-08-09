import type { PropsWithChildren } from "react";
import { useRef, useState } from "react";

interface Props {
  title: string;
}

export function AccordianItem({ title, children }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  function _toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const contentHeight = contentRef.current?.scrollHeight ?? 0;

  return (
    <div className="py-4 border-b last:border-b-0 border-b-1 border-green">
      <button
        type="button"
        onClick={_toggleIsOpen}
        className="flex flex-row w-full px-2 text-left rounded focus-visible:outline focus-visible:outline-green"
      >
        <h3 className="my-auto">{title}</h3>
        <span className="my-auto ml-auto text-2xl font-monospace">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`${
          isOpen ? "" : "h-0 p-0 overflow-hidden opacity-0"
        } transition-all duration-300 ease-in-out`}
        style={isOpen ? { height: contentHeight } : {}}
      >
        <p className="px-5 py-3 indent-0">{children}</p>
      </div>
    </div>
  );
}
