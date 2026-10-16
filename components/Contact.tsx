"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CONTACTS = [
  { icon: Mail, label: "Email", value: "sauravranjan0209@gmail.com", href: "sauravranjan0209@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/sauravranjan02/", href: "https://www.linkedin.com/in/sauravranjan02/" },
  { icon: Github, label: "GitHub", value: "https://github.com/SauravRanjan0209", href: "https://github.com/SauravRanjan0209" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // UI only — no backend is wired up. Replace with a Route Handler / server action when ready.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's Build Something Scalable"
        subtitle="I'm currently looking for opportunities to design robust backend architectures, optimize web performance, and contribute to a collaborative engineering team. Feel free to reach out!"
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass space-y-5 p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">Name</label>
              <input id="name" name="name" required placeholder="Ada Lovelace" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">Email</label>
              <input id="email" name="email" type="email" required placeholder="ada@company.com" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project…" className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20" />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            <Send size={16} /> Send message
          </button>
          <p role="status" aria-live="polite" className={`flex items-center gap-2 text-sm text-emerald-400 transition-opacity ${sent ? "opacity-100" : "opacity-0"}`}>
            <CheckCircle2 size={16} /> Thanks! This is a demo form — no message was actually sent.
          </p>
        </motion.form>

        <div className="space-y-4 lg:col-span-2">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="glass group flex items-center gap-4 p-5 transition-colors hover:border-emerald-400/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/30">
                <c.icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500">{c.label}</span>
                <span className="block truncate text-sm font-medium text-white group-hover:text-emerald-300">{c.value}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
