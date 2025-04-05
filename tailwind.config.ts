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
                alt: "var(--alt)",
                black: "var(--black)",
                warning: "var(--warning)",
                altLight: "var(--alt-light)",
                light: "var(--light)",
                lightYellow: "var(--light-yellow)",
                primaryLight: "var(--primary-lighter)",
                blackLight: "var(--black-light)",
            },
            screens: {
                xs: "380px",
            },
        },
    },
    plugins: [require("@tailwindcss/container-queries")],
} as Config;
export default config;
