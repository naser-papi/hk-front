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

const iranSansThin = localFont({
    src: "./fonts/iran-sans/IRANSansXFaNum-Thin.woff2",
    variable: "--font-iransans",
    weight: "100 300",
});
const iranSansRegular = localFont({
    src: "./fonts/iran-sans/IRANSansXFaNum-Regular.woff2",
    variable: "--font-iransans",
    weight: "400 500",
});
const iranSansBold = localFont({
    src: "./fonts/iran-sans/IRANSansXFaNum-Bold.woff2",
    variable: "--font-iransans",
    weight: "600 700",
});
const iranSansBlack = localFont({
    src: "./fonts/iran-sans/IRANSansXFaNum-ExtraBold.woff2",
    variable: "--font-iransans",
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
            ? `rtl ${iranSansThin.variable} ${iranSansRegular.variable} ${iranSansBold.variable} ${iranSansBlack.variable}`
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
