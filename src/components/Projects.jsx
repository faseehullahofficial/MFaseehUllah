import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filters } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">// 04 projects</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Things I've <span className="text-gradient">built</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "bg-gradient-to-r from-primary to-accent text-white"
                  : "border border-white/10 text-muted hover:border-white/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
