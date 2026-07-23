import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            className="font-mono text-sm text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-muted">$</span> booting portfolio
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.div>
          <div className="relative mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-secondary via-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
