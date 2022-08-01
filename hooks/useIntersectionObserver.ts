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
      observer.disconnect();
    };
  }, [ref, options]);

  const _cb: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  return [ref, isVisible] as const;
}
