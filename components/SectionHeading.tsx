"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-zinc-400">{subtitle}</p>}
    </motion.div>
  );
}
