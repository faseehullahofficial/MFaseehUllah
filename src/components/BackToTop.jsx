import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowUp } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-glow fixed bottom-6 right-6 z-40 cursor-pointer rounded-full bg-gradient-to-r from-primary to-accent p-3 text-white shadow-lg"
          aria-label="Back to top"
        >
          <HiOutlineArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
