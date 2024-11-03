import type { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import Background from "./background";

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

const yakanThin = localFont({
    src: "./fonts/yekan/YekanBakh-Thin.woff",
    variable: "--font-yekan",
    weight: "100 300",
});
const yakanRegular = localFont({
    src: "./fonts/yekan/YekanBakh-Regular.woff",
    variable: "--font-yekan",
    weight: "400 500",
});
const yakanBold = localFont({
    src: "./fonts/yekan/YekanBakh-Bold.woff",
    variable: "--font-yekan",
    weight: "600 700",
});
const yakanBlack = localFont({
    src: "./fonts/yekan/YekanBakh-Black.woff",
    variable: "--font-yekan",
    weight: "800 900",
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
            ? `rtl ${yakanThin.variable} ${yakanRegular.variable} ${yakanBold.variable} ${yakanBlack.variable}`
            : `ltr ${geistSans.variable} ${geistMono.variable}`;
    return (
        <html lang={params.locale}>
            <body
                className={`h-screen w-screen antialiased ${fontClasses}`}
                dir={params.locale === "fa" ? "rtl" : "ltr"}
            >
                <Background />
                {children}
            </body>
        </html>
    );
}
