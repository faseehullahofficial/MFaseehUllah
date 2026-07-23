import { useEffect, useRef } from "react";

export default function ParticleBackground({ density = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let w, h;

    const colors = ["#4F46E5", "#06B6D4", "#8B5CF6"];

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function init() {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    resize();
    init();
    if (!reduceMotion) tick();
    else {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
    }

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
