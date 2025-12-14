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
                "w-full bg-primary p-2 lg:hidden"
            }
        >
            <article
                className={
                    "w-full text-secondary [&>button]:ms-auto [&>button]:me-4"
                }
            >               
                <MainMenu direction={"col"} />
            </article>
        </div>
    );
};

export default MobileMenu;
