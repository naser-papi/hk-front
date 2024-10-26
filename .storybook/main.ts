import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "storybook-addon-next",
        "storybook-addon-next-router",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    features: {
        experimentalRSC: true,
    },
    webpackFinal: async (config, { configType }) => {
        if (config.resolve) {
            config.resolve.modules = [
                path.resolve(__dirname, ".."),
                "node_modules",
            ];
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.resolve(__dirname, "../src"),
                assets: path.resolve(__dirname, "../public/assets"),
            };
        }
        return config;
    },
};
export default config;
