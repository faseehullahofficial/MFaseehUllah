import { useEffect, useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import confetti from "canvas-confetti";

import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import GitHubStats from "./components/GitHubStats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";
import NotFound from "./components/NotFound";
import { useKonamiCode } from "./hooks/useKonamiCode";

function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <GitHubStats />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const unlockEasterEgg = useCallback(() => {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#4F46E5", "#06B6D4", "#8B5CF6", "#ffffff"],
    });
  }, []);
  useKonamiCode(unlockEasterEgg);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main className="relative">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
