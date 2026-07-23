import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import { projects } from "../data/projects";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "github", label: "GitHub Activity" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sectionMatches = SECTIONS.filter((s) => s.label.toLowerCase().includes(q)).map((s) => ({
      type: "Section",
      id: s.id,
      label: s.label,
    }));
    const projectMatches = projects
      .filter((p) => p.title.toLowerCase().includes(q))
      .map((p) => ({ type: "Project", id: "projects", label: p.title }));
    return [...sectionMatches, ...projectMatches].slice(0, 8);
  }, [query]);

  function goTo(id) {
    onClose();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <HiOutlineSearch className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections or projects..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted/60"
              />
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-muted">Esc</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="p-4 text-center text-sm text-muted">No matches found.</p>
              )}
              {results.map((r, i) => (
                <button
                  key={`${r.type}-${r.label}-${i}`}
                  onClick={() => goTo(r.id)}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-white hover:bg-white/5"
                >
                  {r.label}
                  <span className="font-mono text-[10px] text-muted">{r.type}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
