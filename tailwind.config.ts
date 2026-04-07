import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sea: {
          950: "#0d2035",
          900: "#122944",
          850: "#163352",
          800: "#1c3f62",
          700: "#255278",
          600: "#2e6d98",
          500: "#3d8fbf",
          400: "#58b0d8",
          300: "#7ecce9",
        },
        sonar: {
          DEFAULT: "#3dd9a0",
          dim: "#2a9d6f",
          glow: "#6ee8b8",
        },
        bridge: {
          DEFAULT: "#5eb8e8",
          dim: "#3d8fc4",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "radar-sweep": "radar-sweep 2.5s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
