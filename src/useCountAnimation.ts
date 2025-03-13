import { useState, useEffect } from "react";

const useCountAnimation = (target: number, delay: number = 20) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed of counting
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [start, target]);

  return { count, setStart };
};

export default useCountAnimation;
