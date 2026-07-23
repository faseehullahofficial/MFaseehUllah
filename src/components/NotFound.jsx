import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">// 404</p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 text-6xl font-bold text-gradient"
      >
        page not found
      </motion.h1>
      <p className="mt-4 max-w-sm text-muted">
        This route doesn't exist. The page you're looking for may have moved
        or never existed.
      </p>
      <Link
        to="/"
        className="btn-glow mt-8 cursor-pointer rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
