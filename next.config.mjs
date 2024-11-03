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

export default nextConfig;