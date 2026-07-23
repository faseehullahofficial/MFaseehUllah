import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenPalette }) {
  const { direction, atTop } = useScrollDirection();
  const active = useActiveSection(LINKS.map((l) => l.id));
  const [open, setOpen] = useState(false);

  const hide = direction === "down" && !atTop && !open;

  function goTo(id) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full"
      initial={{ y: 0 }}
      animate={{ y: hide ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          atTop ? "py-5" : "glass-strong my-3 rounded-2xl py-3 shadow-lg shadow-black/30"
        }`}
      >
        <button
          onClick={() => goTo("home")}
          className="cursor-pointer font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-gradient">MF</span>
          <span className="text-muted">.dev</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.id
                  ? "text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              <span className="relative">
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-secondary to-primary"
                  />
                )}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden cursor-pointer items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-muted hover:border-white/25 hover:text-white sm:flex"
          >
            Search <kbd className="rounded bg-white/10 px-1.5 py-0.5">Ctrl K</kbd>
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="cursor-pointer rounded-full border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong mx-3 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col p-4">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => goTo(link.id)}
                  className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm text-muted hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
