import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        node: "#34d399", // emerald — Node.js
        ts: "#3b82f6", // blue — TypeScript
        sql: "#22d3ee", // cyan — MySQL
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, -6%, 0) scale(1.15)" },
        },
        "gradient-shift-alt": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.1)" },
          "50%": { transform: "translate3d(-6%, 5%, 0) scale(1)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 14s ease-in-out infinite",
        "gradient-shift-alt": "gradient-shift-alt 18s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
