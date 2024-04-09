import { useEffect, useState } from 'react';

export const useDebounce = <R>(
  value: R,
  delay?: number,
): { debouncedValue: R; isDebouncing: boolean } => {
  const delayToUse = delay ?? 300;

  const [debouncedValue, setDebouncedValue] = useState<R>(value);
  const [isDebouncing, setIsDebouncing] = useState<boolean>(true);

  useEffect(() => {
    setIsDebouncing(true);
    const handler = setTimeout(() => {
      setIsDebouncing(false);
      setDebouncedValue(value);
    }, delayToUse);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayToUse]);

  return { debouncedValue, isDebouncing };
};
