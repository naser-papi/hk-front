"use client";
import { Button, NlLogo } from "@/components/atom";
import { MainMenu } from "@/components/organism";
import { faBars } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import BaseState from "@/stores/base";

const TopNav = () => {
    const toggleMenu = () => {
        BaseState.toggleMenu();
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
                    label={"EN"}
                    intend={"tertiary"}
                    className={"text-xl font-bold text-secondary"}
                />
            </aside>
        </nav>
    );
};

export default TopNav;
