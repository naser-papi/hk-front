import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true,
            hmrRefreshes: true,
        },
    },
    output: "standalone",
    images: {
        // enable dangerous use of SVG images
        dangerouslyAllowSVG: false,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.vimeocdn.com",
                port: "443",
                pathname: "**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "8008",
                pathname: "/assets/**",
            },
            {
                protocol: "http",
                hostname: "dev.hollandkade.nl",
                port: "80",
                pathname: "/assets/**",
            },
            {
                protocol: "https",
                hostname: "dev.hollandkade.nl",
                port: "443",
                pathname: "/assets/**",
            },
            {
                protocol: "https",
                hostname: "hollandkade.nl",
                port: "443",
                pathname: "/assets/**",
            },
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                port: "443",
                pathname: "/x3m9judsik/**",
            }
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(wav)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/sounds/',
                    outputPath: 'static/sounds/',
                    name: '[name].[ext]'
                }
            }
        });
        config.resolve.alias.canvas = false
        return config;
    }
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

    org: "naserpapi",
    project: "hk-front-dev",

// Only print logs for uploading source maps in CI
    silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

// Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
        enabled: true,
    },

// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
    tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
    hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
});