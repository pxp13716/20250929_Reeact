import { useEffect, useState } from "react"

export const useTimer = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setToday(new Date())
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return today;
}