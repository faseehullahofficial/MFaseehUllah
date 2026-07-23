import { useEffect, useState } from "react";

const CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onUnlock) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onKeyDown(e) {
      setProgress((prev) => {
        const next = e.key === CODE[prev] ? prev + 1 : e.key === CODE[0] ? 1 : 0;
        if (next === CODE.length) {
          onUnlock?.();
          return 0;
        }
        return next;
      });
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onUnlock]);

  return progress;
}
