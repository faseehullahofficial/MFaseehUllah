import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineArrowDown, HiOutlineDownload } from "react-icons/hi";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/30 blur-[110px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-[130px]"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/25 blur-[100px]"
          animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <ParticleBackground density={45} />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            <span className="text-muted">const</span> hello ={" "}
            <span className="text-primary">"welcome to my portfolio"</span>;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Muhammad Faseeh Ullah</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-5 font-mono text-lg text-secondary sm:text-xl"
          >
            <TypeAnimation
              sequence={[
                "Computer Science Student",
                2000,
                "Aspiring Software Engineer",
                2000,
                "React Developer",
                2000,
                "Open Source Learner",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 max-w-xl text-muted"
          >
            I build clean, responsive interfaces with React and modern
            JavaScript — currently studying Computer Science at Virtual
            University of Pakistan and learning in public, one project at a
            time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="btn-glow flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white"
            >
              <HiOutlineDownload /> Download Resume
            </a>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/40"
            >
              Hire Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-secondary via-primary to-accent blur-2xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 sm:h-80 sm:w-80"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://res.cloudinary.com/clsfdm19/image/upload/v1784786792/Faseeh_DP_nnfmhj.png"
              alt="Portrait of Muhammad Faseeh Ullah"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="glass absolute -bottom-4 -left-6 rounded-2xl px-4 py-3 font-mono text-xs"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-secondary">status:</span> open to work
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-muted hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <span className="font-mono text-[11px] tracking-widest">SCROLL</span>
        <HiOutlineArrowDown />
      </motion.button>
    </section>
  );
}
