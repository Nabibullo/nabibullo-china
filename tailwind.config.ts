import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#f6d77a",
          400: "#d9ac45",
          500: "#a97819"
        },
        midnight: "#020611",
        sapphire: "#071b3d"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        luxury: "0 32px 120px rgba(0, 0, 0, .6), inset 0 1px 0 rgba(255,255,255,.15)",
        glow: "0 0 70px rgba(217,172,69,.28)"
      }
    }
  },
  plugins: []
};

export default config;
