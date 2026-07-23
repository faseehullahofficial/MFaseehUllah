import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";

const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      if (SERVICE_ID.startsWith("YOUR_")) {
        // EmailJS isn't configured yet — simulate success so the flow is demonstrable.
        await new Promise((r) => setTimeout(r, 1200));
      } else {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      }
      setStatus("success");
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#4F46E5", "#06B6D4", "#8B5CF6"],
      });
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
    }
  }

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="eyebrow text-center">// 09 contact</p>
        <h2 className="mt-3 text-center text-3xl font-bold sm:text-4xl">
          Let's <span className="text-gradient">build something</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
          Have a project in mind or just want to say hello? My inbox is open.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass mt-10 grid grid-cols-1 gap-5 rounded-2xl p-6 sm:grid-cols-2 sm:p-8"
          noValidate
        >
          {fields.map((field) => (
            <div key={field.name} className={field.name === "subject" ? "sm:col-span-2" : ""}>
              <label htmlFor={field.name} className="mb-1.5 block text-xs font-mono text-muted">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={onChange}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-muted/60 focus:border-secondary"
              />
              {errors[field.name] && (
                <p className="mt-1 text-xs text-red-400">{errors[field.name]}</p>
              )}
            </div>
          ))}

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-xs font-mono text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder="Tell me a bit about what you need..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-muted/60 focus:border-secondary"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-glow flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-medium text-white disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {status === "sending" ? (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </motion.span>
                ) : status === "success" ? (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <HiOutlineCheckCircle size={18} /> Message sent!
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <HiOutlineMail /> Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            {status === "error" && (
              <p className="mt-2 text-center text-xs text-red-400">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
