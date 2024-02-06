import { useEffect, useState } from "react";

export const useDebounce = (value, ms) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), ms)

    return () => {
      clearTimeout(timeout)
    };
  }, [value, ms])

  return debouncedValue
}