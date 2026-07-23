import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiX } from "react-icons/hi";
import { certificates } from "../data/certificates";

export default function Certificates() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(null);

  function scroll(dir) {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section id="certificates" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">// 05 certificates</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Proof of <span className="text-gradient">practice</span>
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll(-1)}
              className="cursor-pointer rounded-full border border-white/10 p-2.5 hover:border-white/30"
              aria-label="Scroll left"
            >
              <HiOutlineChevronLeft />
            </button>
            <button
              onClick={() => scroll(1)}
              className="cursor-pointer rounded-full border border-white/10 p-2.5 hover:border-white/30"
              aria-label="Scroll right"
            >
              <HiOutlineChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.id}
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass w-64 shrink-0 cursor-pointer overflow-hidden rounded-2xl text-left"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                <p className="mt-1 font-mono text-xs text-secondary">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-lg overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-black/40 p-2 text-white"
                aria-label="Close"
              >
                <HiX />
              </button>
              <img src={active.image} alt={active.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{active.title}</h3>
                <p className="mt-1 font-mono text-sm text-secondary">
                  {active.issuer} · {active.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
