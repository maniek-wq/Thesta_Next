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
          950: "#050a0f",
          900: "#0a1624",
          850: "#0d1e2e",
          800: "#102638",
          700: "#163449",
          600: "#1e4a63",
          500: "#2a6a8a",
          400: "#3d8aad",
          300: "#5aadcc",
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
