import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Projects Built", value: 6 },
  { label: "Certificates Earned", value: 5 },
  { label: "GitHub Contributions", value: 240 },
  { label: "Learning Hours", value: 900 },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1400;
          const startTime = performance.now();
          function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-gradient sm:text-4xl">
      {count}+
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          // 01 about me
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-3 text-3xl font-bold sm:text-4xl"
        >
          A developer who likes to <span className="text-gradient">explain things</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="leading-relaxed text-muted">
              I'm a Computer Science student at Virtual University of
              Pakistan, working toward a career as a software engineer. I
              spend most of my time building things with React and
              JavaScript, and the rest of it teaching — computer science,
              Quran translation and Islamiyat — because explaining an idea
              is the fastest way to actually understand it.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I care about writing code that's easy to read a second time,
              interfaces that feel considered rather than default, and
              picking up new tools deliberately instead of collecting
              tutorials.
            </p>

            <div className="glass mt-8 flex items-start gap-4 rounded-2xl p-5">
              <span className="rounded-xl bg-primary/20 p-3 text-primary">
                <HiOutlineAcademicCap size={22} />
              </span>
              <div>
                <p className="font-medium text-white">
                  Bachelor of Computer Science
                </p>
                <p className="text-sm text-muted">
                  Virtual University of Pakistan
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
              {["React", "JavaScript", "Git", "GitHub", "Node.js", "Problem Solving", "Web Development", "AI Tools"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-muted"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* timeline */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative border-l border-white/10 pl-8"
          >
            {[
              { year: "2022", text: "Started teaching Quran translation & Islamiyat to community students." },
              { year: "2023", text: "Enrolled in Bachelor of Computer Science at Virtual University of Pakistan." },
              { year: "2024", text: "Began building React projects and completed a social media marketing internship." },
              { year: "2025", text: "Deepened frontend skills — Tailwind CSS, animation, and component architecture." },
              { year: "2026", text: "Building this portfolio and preparing for a software engineering role." },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                <p className="font-mono text-xs text-secondary">{item.year}</p>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass rounded-2xl p-5 text-center"
            >
              <Counter value={stat.value} />
              <p className="mt-2 text-xs text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
