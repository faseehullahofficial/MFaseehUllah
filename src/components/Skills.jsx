import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

function SkillBar({ skill }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white">
          {skill.name}
          {skill.learning && (
            <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 font-mono text-[10px] text-accent">
              learning
            </span>
          )}
        </span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">// 02 skills</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Tools I <span className="text-gradient">reach for</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ rotate: -1, y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <p className="font-mono text-xs text-secondary">{cat.comment}</p>
              <h3 className="mt-1 mb-5 text-lg font-semibold text-white">
                {cat.label}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
