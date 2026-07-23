# Muhammad Faseeh Ullah — Portfolio

A premium, animated portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, Lenis, and EmailJS.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Before you deploy

1. **Resume** — replace `public/resume.pdf` with your real resume (same filename, or update the `href` in `src/components/Hero.jsx`).
2. **Profile photo** — swap the Unsplash placeholder URL in `src/components/Hero.jsx` for your own photo.
3. **Social links** — update the URLs in `src/components/Footer.jsx`.
4. **Projects / certificates / experience / testimonials** — edit the content in `src/data/*.js`. Project and certificate images are currently Unsplash placeholders; swap in your own screenshots.
5. **Contact form (EmailJS)** — create a free account at emailjs.com, then in `src/components/Contact.jsx` replace:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`
   
   Until these are set, the form simulates a successful send so you can still demo the UI end-to-end.
6. **GitHub stats** — `src/components/GitHubStats.jsx` currently renders a randomly generated contribution graph and static repo list as a visual placeholder. Wire it up to the real GitHub REST/GraphQL API (or a service like github-readme-stats) if you want live data.
7. **Open Graph image** — add a real `public/og-image.png` (1200×630) for link previews.

## Notable features

- Sticky navbar that hides on scroll-down / reappears on scroll-up, animated mobile menu
- Hero with typing animation, floating gradient blobs, particle canvas, glowing profile frame
- Animated stats counters, timeline, skill progress bars
- Project grid with category filtering, 3D tilt hover, and layout animations
- Certificate slider with modal preview
- GitHub-style contribution graph
- Infinite auto-scrolling testimonials
- Contact form with validation, loading/success states, and confetti on submit
- Custom cursor with glow + magnetic hover states (desktop only, respects `prefers-reduced-motion` and touch devices)
- Scroll progress bar, back-to-top button
- Command palette (`Ctrl/Cmd + K`) to jump to sections or projects
- Konami code easter egg (↑ ↑ ↓ ↓ ← → ← → B A)
- React Router with a custom 404 page
- Manifest + meta tags for basic PWA / Open Graph support
- Respects `prefers-reduced-motion` throughout

## Stack

React · Vite · Tailwind CSS v4 · Framer Motion · React Icons · React Router · Lenis · EmailJS · canvas-confetti
