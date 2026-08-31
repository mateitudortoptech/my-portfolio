import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070b",
          900: "#080b12",
          800: "#0c121c",
          700: "#141c28",
          600: "#1c2636",
        },
        mist: {
          50: "#f3f6fb",
          100: "#e6ebf4",
          300: "#b7c2d4",
          400: "#8b98ad",
          500: "#6d7a90",
        },
        signal: {
          DEFAULT: "#8fb0ff",
          strong: "#6b93ff",
          dim: "rgba(143, 176, 255, 0.14)",
        },
        iris: {
          DEFAULT: "#9b8cff",
          dim: "rgba(155, 140, 255, 0.14)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(107, 147, 255, 0.45)",
        "glow-sm": "0 0 32px -12px rgba(107, 147, 255, 0.55)",
      },
      backgroundImage: {
        "page-grid":
          "linear-gradient(to right, rgba(143,176,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(143,176,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "72px 72px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        flow: {
          from: { strokeDashoffset: "24" },
          to: { strokeDashoffset: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(2%, -1%, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
        "pulse-line": "pulse-line 4s ease-in-out infinite",
        flow: "flow 2.8s linear infinite",
        drift: "drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
