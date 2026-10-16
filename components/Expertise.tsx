"use client";

import { motion } from "framer-motion";
import { Gauge, Plug, ShieldCheck, Server, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Card = { icon: LucideIcon; title: string; text: string; accent: string; glow: string };

const CARDS: Card[] = [
  {
    icon: Server,
    title: "Scalable Architecture",
    text: "Design, develop, and maintain scalable server-side applications using Node.js and TypeScript, ensuring data integrity and security with optimized MySQL structures.",
    accent: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Identify and resolve bottlenecks, reduce load times, and apply best practices like lazy loading and code splitting for lightning-fast web experiences.",
    accent: "text-cyan-400 bg-cyan-400/10 ring-cyan-400/30",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: Plug,
    title: "API & Integration",
    text: "Implement and manage third-party APIs and libraries to extend backend capabilities, seamlessly integrating server-side logic with React/Next.js frontends.",
    accent: "text-blue-400 bg-blue-400/10 ring-blue-400/30",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Ownership",
    text: "Write unit/integration tests, participate in code reviews, maintain clean version-controlled codebases (Git), and build internal documentation for team onboarding.",
    accent: "text-violet-400 bg-violet-400/10 ring-violet-400/30",
    glow: "group-hover:shadow-violet-500/10",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <SectionHeading
        eyebrow="What I do"
        title="Core Competencies"
        subtitle="From database schema to deployed UI — I own the full path of a feature."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {CARDS.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`group glass p-7 shadow-xl shadow-transparent transition-shadow duration-300 hover:border-white/20 ${c.glow}`}
          >
            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${c.accent}`}>
              <c.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">{c.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{c.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
