import type { Config } from "tailwindcss";
import { designTokens } from "./src/design-tokens/index";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                spinOnce: "spin 1s linear 1",
            },
            colors: {
                // Primary Brand Colors
                primary: {
                    DEFAULT: "var(--primary)",
                    light: "var(--primary-light)",
                    lighter: "var(--primary-lighter)",
                    dark: "var(--primary-dark)",
                    darker: "var(--primary-darker)",
                },
                // Secondary/Accent Colors
                secondary: {
                    DEFAULT: "var(--secondary)",
                    light: "var(--secondary-light)",
                    lighter: "var(--secondary-lighter)",
                    dark: "var(--secondary-dark)",
                    darker: "var(--secondary-darker)",
                },
                // Semantic Colors
                success: {
                    DEFAULT: "var(--success)",
                    light: "var(--success-light)",
                    dark: "var(--success-dark)",
                },
                warning: {
                    DEFAULT: "var(--warning)",
                    light: "var(--warning-light)",
                    dark: "var(--warning-dark)",
                },
                error: {
                    DEFAULT: "var(--error)",
                    light: "var(--error-light)",
                    dark: "var(--error-dark)",
                },
                info: {
                    DEFAULT: "var(--info)",
                    light: "var(--info-light)",
                    dark: "var(--info-dark)",
                },
                // Neutral Colors
                neutral: {
                    50: "var(--neutral-50)",
                    100: "var(--neutral-100)",
                    200: "var(--neutral-200)",
                    300: "var(--neutral-300)",
                    400: "var(--neutral-400)",
                    500: "var(--neutral-500)",
                    600: "var(--neutral-600)",
                    700: "var(--neutral-700)",
                    800: "var(--neutral-800)",
                    900: "var(--neutral-900)",
                },
                // Background Colors
                bg: {
                    primary: "var(--bg-primary)",
                    secondary: "var(--bg-secondary)",
                    tertiary: "var(--bg-tertiary)",
                    dark: "var(--bg-dark)",
                    overlay: "var(--bg-overlay)",
                    overlayLight: "var(--bg-overlay-light)",
                },
                // Text Colors
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    tertiary: "var(--text-tertiary)",
                    disabled: "var(--text-disabled)",
                    inverse: "var(--text-inverse)",
                    link: "var(--text-link)",
                    linkHover: "var(--text-link-hover)",
                },
                // Border Colors
                border: {
                    light: "var(--border-light)",
                    default: "var(--border-default)",
                    dark: "var(--border-dark)",
                    focus: "var(--border-focus)",
                },
                // Legacy Support (for gradual migration)
                white: "var(--white)",
                black: "var(--black)",
                cyan: "var(--cyan)",
                alt: "var(--alt)",
                altLight: "var(--alt-light)",
                light: "var(--light)",
                lightYellow: "var(--light-yellow)",
                primaryLight: "var(--primary-lighter)",
                blackLight: "var(--black-light)",
            },
            spacing: designTokens.spacing,
            borderRadius: designTokens.borderRadius,
            boxShadow: designTokens.shadows,
            zIndex: designTokens.zIndex,
            screens: {
                xs: designTokens.breakpoints.xs,
                sm: designTokens.breakpoints.sm,
                md: designTokens.breakpoints.md,
                lg: designTokens.breakpoints.lg,
                xl: designTokens.breakpoints.xl,
                "2xl": designTokens.breakpoints["2xl"],
                "3xl": designTokens.breakpoints["3xl"],
            },
            fontFamily: designTokens.typography.fontFamily,
            fontSize: designTokens.typography.fontSize,
            fontWeight: designTokens.typography.fontWeight,
            lineHeight: designTokens.typography.lineHeight,
            transitionDuration: designTokens.transitions.duration,
            transitionTimingFunction: designTokens.transitions.timing,
            opacity: designTokens.opacity,
        },
    },
    plugins: [require("@tailwindcss/container-queries")],
} as Config;
export default config;
