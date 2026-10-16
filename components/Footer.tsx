export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Your Name. Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        <p className="font-mono text-xs">
          <span className="text-emerald-400">●</span> Available for new opportunities
        </p>
      </div>
    </footer>
  );
}
