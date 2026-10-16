"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

function CodeBackdrop() {
  // Decorative, low-opacity code window rendered behind the hero copy.
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[-8%] top-24 hidden w-[620px] rotate-[-4deg] select-none opacity-[0.16] lg:block xl:right-[-2%]"
    >
      <div className="rounded-2xl border border-white/20 bg-zinc-900/80 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 font-mono text-xs text-zinc-400">orders.controller.ts</span>
        </div>
        <pre className="overflow-hidden p-5 font-mono text-[13px] leading-6 text-zinc-300">
          <code>
            <span className="text-blue-400">import</span> {"{ Router }"} <span className="text-blue-400">from</span> <span className="text-emerald-400">&quot;express&quot;</span>;{"\n"}
            <span className="text-blue-400">import</span> {"{ db }"} <span className="text-blue-400">from</span> <span className="text-emerald-400">&quot;./db/mysql&quot;</span>;{"\n"}
            {"\n"}
            <span className="text-zinc-500">{"// Paginated, index-backed query — O(log n) lookups"}</span>{"\n"}
            <span className="text-blue-400">export const</span> <span className="text-cyan-300">listOrders</span> = <span className="text-blue-400">async</span> (req, res) =&gt; {"{"}{"\n"}
            {"  "}<span className="text-blue-400">const</span> {"{ cursor, limit = "}<span className="text-orange-300">50</span>{" } = req.query;"}{"\n"}
            {"  "}<span className="text-blue-400">const</span> [rows] = <span className="text-blue-400">await</span> db.execute({"\n"}
            {"    "}<span className="text-emerald-400">&quot;SELECT id, total FROM orders WHERE id &gt; ? LIMIT ?&quot;</span>,{"\n"}
            {"    "}[cursor ?? <span className="text-orange-300">0</span>, <span className="text-cyan-300">Number</span>(limit)]{"\n"}
            {"  "});{"\n"}
            {"  "}res.json({"{ data: rows }"});{"\n"}
            {"}"};<span className="animate-blink text-emerald-400">▌</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[480px] w-[480px] animate-gradient-shift rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] animate-gradient-shift-alt rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-1/3 h-[380px] w-[380px] animate-gradient-shift rounded-full bg-cyan-500/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          }}
        />
      </div>
      <CodeBackdrop />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to backend &amp; full-stack roles
        </motion.div>

        <motion.h1 variants={item} className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building Scalable{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Server-Side Architecture
          </span>{" "}
          &amp; Modern Web Experiences
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Backend &amp; Full-Stack Developer specializing in Node.js, TypeScript, and MySQL, bridging robust
          server-side logic with dynamic React/Next.js frontends.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn-primary">
            View My Work <ArrowDown size={16} />
          </a>
          <a href="#" className="btn-secondary" aria-label="Download resume (placeholder link)">
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        <motion.dl variants={item} className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {[
            ["95%", "Test coverage"],
            ["98", "Lighthouse score"],
            ["<50ms", "p95 API latency"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="text-2xl font-bold text-white sm:text-3xl">{v}</dt>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{l}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
