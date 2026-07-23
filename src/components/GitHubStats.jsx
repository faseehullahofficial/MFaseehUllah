import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";

const WEEKS = 30;
const DAYS = 7;

function generateContributions() {
  const data = [];
  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < DAYS; d++) {
      week.push(Math.floor(Math.random() * 5));
    }
    data.push(week);
  }
  return data;
}

const levels = [
  "bg-white/5",
  "bg-primary/30",
  "bg-primary/55",
  "bg-secondary/70",
  "bg-secondary",
];

const repos = [
  { name: "edutrack-dashboard", desc: "React student progress dashboard", stars: 12 },
  { name: "pixelshop-ui", desc: "E-commerce storefront concept", stars: 8 },
  { name: "taskflow-kanban", desc: "Drag-and-drop task board", stars: 15 },
];

export default function GitHubStats() {
  const [contributions] = useState(generateContributions);

  return (
    <section id="github" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">// 06 github activity</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Building in the <span className="text-gradient">open</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass overflow-x-auto rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted">
              <FiGithub /> contribution graph
            </div>
            <div className="mt-4 flex gap-[3px]">
              {contributions.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wi * DAYS + di) * 0.003 }}
                      className={`h-3 w-3 rounded-[3px] ${levels[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-sm text-muted">Latest repositories</p>
            <div className="mt-4 space-y-4">
              {repos.map((repo) => (
                <div key={repo.name} className="border-b border-white/5 pb-4 last:border-0">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm text-white">{repo.name}</p>
                    <span className="flex items-center gap-1 text-xs text-secondary">
                      <FiStar size={12} /> {repo.stars}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{repo.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-muted">
              <FiGitBranch size={12} /> updated regularly
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
