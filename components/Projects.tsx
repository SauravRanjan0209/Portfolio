"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  tech: string[];
  description: string;
  gradient: string;
  variant: "api" | "dashboard" | "sync";
  highlights: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Intelligent Traffic Monitoring System",
    tech: ["Python", "YOLOv8", "DeepSORT", "OpenCV", "Streamlit"],
    description:
      "Developed a real-time vehicle detection, tracking, and counting system using traffic videos. Built an interactive Streamlit dashboard to visualize vehicle counts, traffic density, and congestion. Evaluated system performance using mAP, counting accuracy, precision, recall, and FPS.",
    gradient: "from-emerald-500/30 via-cyan-500/20 to-zinc-900",
    variant: "api",
    highlights: [
      "Vehicle Detection & Tracking",
      "Traffic Density Analysis",
      "Real-Time Monitoring",
    ],
    link: "https://github.com/SauravRanjan0209/AI_Intelligent_Traffic_Monitoring_System",
    date: "Jun 2026 - Jul 2026",
  },
  {
    title: "CarbonQI",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    description:
      "Engineered a web application to calculate and track carbon footprints across transportation, home energy, and food consumption. Implemented line charts and pie charts to visualize emission patterns and identify high-impact areas. Integrated gamification features to encourage sustainable habits and reduce carbon emissions.",
    gradient: "from-blue-500/30 via-violet-500/20 to-zinc-900",
    variant: "dashboard",
    highlights: [
      "Carbon Footprint Tracking",
      "Data Visualization",
      "Gamification",
    ],
    link: "https://github.com/SauravRanjan0209/CarbonQI",
    date: "Mar 2026 - Apr 2026",
  },
  {
    title: "SRK Solution",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description:
      "Enhanced a service-based website for online government document applications, including PAN Card, Voter ID, Passport, and Driving License services. Designed a clean, responsive user interface and developed structured forms to collect user information. Connected the frontend to the backend using PHP.",
    gradient: "from-orange-500/30 via-amber-500/20 to-zinc-900",
    variant: "dashboard",
    highlights: [
      "Responsive UI",
      "Government Document Services",
      "PHP & MySQL Integration",
    ],
    link: "https://github.com/SauravRanjan0209/SRK_Solution",
    date: "Jan 2025 - Apr 2025",
  },
];

/** Placeholder "screenshot" — pure CSS so no image assets are required. Swap for next/image later. */
function Preview({ variant }: { variant: Project["variant"] }) {
  return (
    <div className="absolute inset-x-6 bottom-0 top-8 overflow-hidden rounded-t-xl border border-b-0 border-white/15 bg-zinc-950/80 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
      </div>
      {variant === "api" && (
        <div className="space-y-2 p-4 font-mono text-[11px]">
          {[
            ["GET", "/v1/orders", "200", "text-emerald-400"],
            ["POST", "/v1/payments", "201", "text-emerald-400"],
            ["GET", "/v1/users/:id", "200", "text-emerald-400"],
            ["PUT", "/v1/items/42", "422", "text-amber-400"],
          ].map(([m, p, s, c]) => (
            <div key={p} className="flex items-center justify-between rounded bg-white/5 px-2.5 py-1.5">
              <span><span className="text-cyan-300">{m}</span> <span className="text-zinc-400">{p}</span></span>
              <span className={c}>{s}</span>
            </div>
          ))}
        </div>
      )}
      {variant === "dashboard" && (
        <div className="p-4">
          <div className="mb-3 grid grid-cols-3 gap-2">
            {["bg-blue-400/40", "bg-violet-400/40", "bg-cyan-400/40"].map((c) => (
              <div key={c} className={`h-8 rounded ${c}`} />
            ))}
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {[40, 65, 50, 80, 60, 90, 72, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-500/60 to-cyan-300/60" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      )}
      {variant === "sync" && (
        <div className="flex items-center justify-center gap-4 p-5">
          <div className="space-y-1.5">
            {[70, 50, 85].map((w, i) => <div key={i} className="h-2 rounded bg-emerald-400/50" style={{ width: w }} />)}
          </div>
          <div className="relative h-px w-12 bg-gradient-to-r from-emerald-400 to-cyan-400">
            <span className="absolute -top-1 left-0 h-2 w-2 animate-ping rounded-full bg-cyan-300" />
          </div>
          <div className="space-y-1.5">
            {[70, 50, 85].map((w, i) => <div key={i} className="h-2 rounded bg-cyan-400/50" style={{ width: w }} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Selected work"
        title="Demonstrable Portfolio"
        subtitle="A track record of building scalable, tested, and well-documented applications."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group glass flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-black/40"
          >
            <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <Preview variant={p.variant} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-white">{p.title}</h3>
                <div className="flex shrink-0 gap-1">
                  <a href="#" aria-label={`${p.title} source code`} className="rounded-lg p-1.5 text-zinc-500 transition hover:bg-white/10 hover:text-white"><Github size={18} /></a>
                  <a href="#" aria-label={`${p.title} live demo`} className="rounded-lg p-1.5 text-zinc-500 transition hover:bg-white/10 hover:text-emerald-400"><ArrowUpRight size={18} /></a>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-emerald-300/90">
                {p.highlights.map((h) => <li key={h} className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-emerald-400" />{h}</li>)}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300 ring-1 ring-inset ring-white/10">{t}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
