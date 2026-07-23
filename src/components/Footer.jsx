import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FiFacebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: FiMail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-display text-sm text-muted">
          <span className="text-gradient font-semibold">Muhammad Faseeh Ullah</span> — built with React & Tailwind CSS
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="cursor-pointer rounded-full border border-white/10 p-2.5 text-muted transition-colors hover:border-white/30 hover:text-white"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center font-mono text-xs text-muted/70">
        © {new Date().getFullYear()} Muhammad Faseeh Ullah. All rights reserved.
      </p>
    </footer>
  );
}
