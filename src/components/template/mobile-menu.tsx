"use client";
import { useCallback } from "react";
import BaseState from "@/stores/base";
import { useSnapshot } from "valtio/react";
import { Button } from "@/components/atom";
import { MainMenu } from "@/components/organism";
import { FaXmark } from "react-icons/fa6";

const MobileMenu = () => {
    const { showMenu } = useSnapshot(BaseState);
    const closeMenu = useCallback(() => {
        BaseState.toggleMenu();
    }, []);
    if (!showMenu) return null;
    return (
        <div
            className={
                "absolute inset-x-0 top-[70px] w-full bg-primary p-2 lg:hidden"
            }
        >
            <article
                className={
                    "w-full text-secondary [&>button]:ms-auto [&>button]:me-4"
                }
            >
                <Button
                    label={""}
                    variant={"tertiary"}
                    icon={FaXmark}
                    onClick={closeMenu}
                    ariaLabel="Close menu"
                />
                <MainMenu direction={"col"} />
            </article>
        </div>
    );
};

export default MobileMenu;
