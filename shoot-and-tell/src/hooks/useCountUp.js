import { useEffect, useState } from "react";

export function useCountUp(target, inView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // Don't count if not in view

    let start = 0;
    const duration = 750;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, inView]); // Reset count on every scroll into view

  return count;
}
