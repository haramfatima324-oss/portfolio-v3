import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0b", panel: "#111113", line: "rgba(255,255,255,0.08)", paper: "#ecebe6", mute: "#8b8b92", gold: "#c9b27c" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Georgia", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"] },
      keyframes: { drift: { "0%,100%": { transform: "translate3d(0,0,0)" }, "50%": { transform: "translate3d(30px,-20px,0)" } } },
      animation: { drift: "drift 18s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
