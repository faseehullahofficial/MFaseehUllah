import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineTemplate, HiOutlineDeviceMobile, HiOutlineLightningBolt, HiOutlineColorSwatch, HiOutlineCube } from "react-icons/hi";

const SERVICES = [
  { icon: HiOutlineCode, title: "React Applications", desc: "Interactive, component-driven apps built with clean, maintainable React code." },
  { icon: HiOutlineTemplate, title: "Website Development", desc: "Full websites from layout to launch, built to be fast and easy to update." },
  { icon: HiOutlineLightningBolt, title: "Landing Pages", desc: "Focused, high-converting landing pages with deliberate motion and copy." },
  { icon: HiOutlineDeviceMobile, title: "Responsive Design", desc: "Interfaces that hold up cleanly from a small phone to a wide desktop." },
  { icon: HiOutlineCube, title: "Portfolio Websites", desc: "Personal and professional portfolios that actually represent the work." },
  { icon: HiOutlineColorSwatch, title: "UI Development", desc: "Turning designs or ideas into polished, production-ready interfaces." },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">// 07 services</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          What I can <span className="text-gradient">build for you</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(79,70,229,0.25)]"
            >
              <span className="inline-flex rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 p-3 text-secondary transition-colors group-hover:text-white">
                <service.icon size={24} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
