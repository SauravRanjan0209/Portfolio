"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";

const LINKS = [
  { href: "#expertise", label: "Expertise", id: "expertise" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/30 transition group-hover:bg-emerald-400/20">
            <Terminal size={16} />
          </span>
          <span>Saurav<span className="text-emerald-400">.</span>portfolio</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  active === l.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span layoutId="nav-underline" className="mx-auto mt-0.5 block h-0.5 w-5 rounded-full bg-emerald-400" />
                )}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href="#contact" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
              Hire me
            </a>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 text-zinc-300 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-5 pb-5 pt-1">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      active === l.id ? "bg-white/5 text-white" : "text-zinc-400"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
