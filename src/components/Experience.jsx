import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">// 03 experience</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Where I've put in the <span className="text-gradient">hours</span>
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-secondary via-primary to-accent sm:left-1/2" />
          <div className="space-y-10">
            {experience.map((item, i) => {
              const leftSide = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: leftSide ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col pl-12 sm:w-1/2 sm:pl-0 ${
                    leftSide
                      ? "sm:pr-10 sm:text-right"
                      : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    className={`absolute top-1.5 left-[10px] h-3 w-3 rounded-full bg-primary shadow-[0_0_14px_rgba(79,70,229,0.9)] sm:left-auto ${
                      leftSide ? "sm:right-[-6px]" : "sm:left-[-6px]"
                    }`}
                  />
                  <div className="glass rounded-2xl p-5">
                    <span className="eyebrow">{item.period}</span>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-secondary">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
