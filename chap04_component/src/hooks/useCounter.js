import { useCallback, useRef } from "react"

export const useCounter = (init = 0) => {
  const count = useRef(init);

  const increase = useCallback(() => {
    count.current = count.current + 1;
  }, []);
  const decrease = useCallback(() => {
    count.current = count.current - 1;
  }, []);
  const reset = useCallback(() => {
    count.current = init;
  }, [init]);

  return {
    count: count.current,
    increase, decrease, reset
  }
}
