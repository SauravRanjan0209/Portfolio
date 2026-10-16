"use client";

import { motion } from "framer-motion";
import {
  Atom, BookOpen, Braces, Database, FileCode2, FlaskConical, GitBranch, Hourglass, Layers, Server, Split, Wind,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Tech = { name: string; icon: LucideIcon; color: string };
type Category = { title: string; blurb: string; items: Tech[] };

const CATEGORIES: Category[] = [
  {
    title: "Backend & Logic",
    blurb: "Typed, testable server-side code.",
    items: [
      { name: "Node.js", icon: Server, color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" },
      { name: "JavaScript", icon: Braces, color: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10" },
      { name: "TypeScript", icon: FileCode2, color: "text-blue-400 border-blue-400/30 bg-blue-400/10" },
      { name: "API Design & Documentation", icon: BookOpen, color: "text-zinc-200 border-white/20 bg-white/5" },
    ],
  },
  {
    title: "Database & Storage",
    blurb: "Schemas and queries built for integrity and speed.",
    items: [{ name: "MySQL", icon: Database, color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10" }],
  },
  {
    title: "Frontend Integration",
    blurb: "Wiring server logic into fast interfaces.",
    items: [
      { name: "React.js", icon: Atom, color: "text-sky-400 border-sky-400/30 bg-sky-400/10" },
      { name: "Next.js", icon: Layers, color: "text-zinc-100 border-white/25 bg-white/10" },
      { name: "Tailwind CSS", icon: Wind, color: "text-teal-300 border-teal-300/30 bg-teal-300/10" },
    ],
  },
  {
    title: "Tools & Practices",
    blurb: "The habits that keep codebases healthy.",
    items: [
      { name: "Git / GitHub", icon: GitBranch, color: "text-orange-400 border-orange-400/30 bg-orange-400/10" },
      { name: "Unit / Integration Testing", icon: FlaskConical, color: "text-violet-400 border-violet-400/30 bg-violet-400/10" },
      { name: "Code Splitting", icon: Split, color: "text-pink-400 border-pink-400/30 bg-pink-400/10" },
      { name: "Lazy Loading", icon: Hourglass, color: "text-amber-300 border-amber-300/30 bg-amber-300/10" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <SectionHeading
        eyebrow="Toolbox"
        title="Technical Arsenal"
        subtitle="A focused stack, used deeply — chosen for reliability, performance and team velocity."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass p-6"
          >
            <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
            <p className="mb-5 mt-1 text-sm text-zinc-500">{cat.blurb}</p>
            <ul className="flex flex-wrap gap-2.5">
              {cat.items.map((t) => (
                <motion.li
                  key={t.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium ${t.color}`}
                >
                  <t.icon size={16} />
                  {t.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
