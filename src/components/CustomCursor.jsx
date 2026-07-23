import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    function onMove(e) {
      setVisible(true);
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
      const target = e.target;
      setIsPointer(
        !!target.closest("a, button, [role='button'], input, textarea, .cursor-pointer")
      );
    }
    function onLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full mix-blend-screen md:block"
      style={{
        x: sx,
        y: sy,
        width: isPointer ? 44 : 24,
        height: isPointer ? 44 : 24,
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, rgba(6,182,212,0.55) 0%, rgba(79,70,229,0.35) 45%, transparent 70%)",
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
      }}
    />
  );
}
