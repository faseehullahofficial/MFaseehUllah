import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), { stiffness: 200, damping: 20 });

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="glass group overflow-hidden rounded-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
      </div>
      <div className="p-5" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a
            href={project.demo}
            className="btn-glow flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-medium text-white"
          >
            <HiOutlineExternalLink /> Live Demo
          </a>
          <a
            href={project.github}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white hover:border-white/40"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
