import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState("up");
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      setAtTop(y < 40);
      if (Math.abs(y - lastY.current) > 6) {
        setDirection(y > lastY.current ? "down" : "up");
        lastY.current = y;
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, atTop };
}
