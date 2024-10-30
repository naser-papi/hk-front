import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
        layout: "centered",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        nextjs: {
            appDirectory: true,
            router: {
                basePath: "/",
            },
        },
    },
};

export default preview;
