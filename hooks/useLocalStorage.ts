import { useEffect, useState } from "react";

export const LOCAL_STORAGE_KEYS = {
  rsvp: "rsvp",
};

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setState(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.log(error);
    }
  }, [key, initialValue]);

  function _setState(value: T | ((val: T) => T)) {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return [state, _setState] as const;
}
