import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(_cb, options);

    let el: typeof ref.current;
    if (ref.current) {
      el = ref.current;
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  const _cb: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  return [ref, isVisible] as const;
}
