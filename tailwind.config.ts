import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        white: "var(--white)",
        cyan: "var(--cyan)",
        alt:"var(--alt)",
        black: "var(--black)",
        altLight:"var(--alt-light)"
      },
    },
  },
  plugins: [],
} as Config;
export default config;
