/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-nested": {}, // Add this line for nested CSS support
    },
};

export default config;
