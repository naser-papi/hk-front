import type { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import Background from "@/components/organism/background";
import ClientInitializer from "@/components/organism/client-initializer";
import GlobalAlert from "@/components/organism/global-alert";
import SideFloatMenu from "@/components/organism/side-float-menu";
import GlobalConfirm from "@/components/organism/global-confirm";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const IRANSansXFaNum = localFont({
    src: [
        {
            path: "./fonts/iran-sans/IRANSansXFaNum-Thin.woff2",
            weight: "100 300", // Thin style weights
            style: "normal", // Ensure you specify style
        },
        {
            path: "./fonts/iran-sans/IRANSansXFaNum-Regular.woff2",
            weight: "400 500", // Regular style weights
            style: "normal",
        },
        {
            path: "./fonts/iran-sans/IRANSansXFaNum-Bold.woff2",
            weight: "600 700", // Bold style weights
            style: "normal",
        },
        {
            path: "./fonts/iran-sans/IRANSansXFaNum-ExtraBold.woff2",
            weight: "800 900", // Extra-bold style weights
            style: "normal",
        },
    ],
    variable: "--font-iransans", // CSS variable reference
    display: "swap", // Optional: Better user experience while loading fonts
});

export const metadata: Metadata = {
    title: "HollandKade",
    description: "An Awesome Immigration Website for NL lovers",
};

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    if (!i18nConfig.locales.includes(params.locale)) {
        notFound();
    }
    const fontClasses =
        params.locale === "fa"
            ? `rtl ${IRANSansXFaNum.variable}`
            : `ltr ${geistSans.variable} ${geistMono.variable}`;
    return (
        <html lang={params.locale}>
            <body
                className={`h-screen w-screen antialiased ${fontClasses}`}
                dir={params.locale === "fa" ? "rtl" : "ltr"}
            >
                <Background />
                <ClientInitializer />
                <GlobalAlert />
                <GlobalConfirm />
                <SideFloatMenu />
                {children}
            </body>
        </html>
    );
}
