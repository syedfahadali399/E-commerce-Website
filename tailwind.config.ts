import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },screens: {
      "max-2xl": { max: "1500px"},
      "max-xl": { max: "1280px"},
      "max-lg": { max: "1024px"},
      "max-lt": { max: "896px"},
      "max-mt": { max: "768px"},
      "max-st": { max: "644px"},
      "max-lm": { max: "480px"},
      "max-mm": { max: "420px"},
      "max-sm": { max: "360px"}
    }
  },
  plugins: [],
} satisfies Config;
