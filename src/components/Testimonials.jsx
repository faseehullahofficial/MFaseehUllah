import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">// 08 testimonials</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          What people <span className="text-gradient">say</span>
        </h2>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050816] to-transparent" />
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="glass w-80 shrink-0 rounded-2xl p-6"
            >
              <p className="text-sm leading-relaxed text-muted">"{t.quote}"</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="font-mono text-xs text-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
