import type { Metadata } from "next";
import i18nConfig from "../../i18nConfig";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";

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
    return (
        <html lang={params.locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
