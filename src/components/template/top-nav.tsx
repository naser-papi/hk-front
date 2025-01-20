"use client";
import { useRouter } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import { Button, NlLogo } from "@/components/atom";
import { MainMenu } from "@/components/organism";
import { faBars } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import { i18nCookieName } from "@/constants/locale";
import BaseState from "@/stores/base";
import i18nConfig from "@/i18nConfig";

const TopNav = () => {
    const router = useRouter();
    const locale = useCurrentLocale(i18nConfig, i18nCookieName) || "fa";

    const toggleMenu = () => {
        BaseState.toggleMenu();
    };
    const toggleLang = () => {
        const newLang = locale === "fa" ? "en" : "fa";
        router.push(`/${newLang}`); // Navigate to the selected language route
        router.refresh();
    };
    return (
        <nav
            className={
                "mobile-nav flex w-full items-center gap-3 drop-shadow-lg"
            }
        >
            <NlLogo type={"default"} />
            <aside
                className={
                    "flex grow items-center justify-between gap-3 [&>.main-menu]:hidden [&>.main-menu]:lg:flex [&>.menu-toggle]:lg:hidden [&_.menu-link]:lg:text-white"
                }
            >
                <Button
                    icon={faBars}
                    label=""
                    intend={"tertiary"}
                    onClick={toggleMenu}
                    className={"menu-toggle text-xl font-bold lg:hidden"}
                />
                <MainMenu direction={"row"} />
                <Button
                    label={locale === "fa" ? "EN" : "FA"}
                    intend={"tertiary"}
                    className={"text-xl font-bold text-secondary"}
                    onClick={toggleLang}
                />
            </aside>
        </nav>
    );
};

export default TopNav;
