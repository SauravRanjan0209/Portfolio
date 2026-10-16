"use client";

import { motion } from "framer-motion";
import { Bug, FileText, GitPullRequest, TestTube2, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS: { icon: LucideIcon; title: string; text: string; color: string }[] = [
  {
    icon: Bug,
    title: "Take Ownership & Debug",
    text: "Demonstrating initiative in troubleshooting and solving complex issues.",
    color: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/40",
  },
  {
    icon: TestTube2,
    title: "Write Clean & Tested Code",
    text: "Ensuring code stability and reducing regressions through rigorous testing.",
    color: "text-blue-400 bg-blue-400/10 ring-blue-400/40",
  },
  {
    icon: GitPullRequest,
    title: "Collaborate & Review",
    text: "Contributing constructive feedback in code reviews and learning from peers.",
    color: "text-cyan-400 bg-cyan-400/10 ring-cyan-400/40",
  },
  {
    icon: FileText,
    title: "Document & Share",
    text: "Contributing to internal documentation to create a knowledge base for onboarding and ongoing learning.",
    color: "text-violet-400 bg-violet-400/10 ring-violet-400/40",
  },
];

export default function Philosophy() {
  return (
    <section id="process" className="section">
      <SectionHeading
        eyebrow="Process"
        title="How I Work"
        subtitle="The engineering habits behind every feature I ship."
      />
      <div className="relative mx-auto max-w-3xl">
        {/* vertical rail */}
        <div aria-hidden className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-emerald-400/60 via-blue-400/40 to-violet-400/60 md:left-1/2" />
        <ol className="space-y-10">
          {STEPS.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: right ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative grid grid-cols-[3rem_1fr] items-start gap-5 md:grid-cols-2 md:gap-14"
              >
                <span
                  className={`z-10 flex h-12 w-12 items-center justify-center rounded-full ring-2 md:absolute md:left-1/2 md:-translate-x-1/2 ${s.color} bg-zinc-950`}
                >
                  <s.icon size={22} />
                </span>
                <div className={`glass p-6 ${right ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                  <span className="font-mono text-xs text-zinc-500">STEP 0{i + 1}</span>
                  <h3 className="mt-1 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
