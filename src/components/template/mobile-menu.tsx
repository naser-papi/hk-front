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
                "absolute left-0 top-[70px] w-full border-b border-altLight bg-white p-2 shadow-md lg:hidden"
            }
        >
            <article
                className={
                    "w-full text-blackLight [&>button]:ml-auto [&>button]:mr-4"
                }
            >
                <Button
                    label={""}
                    intend={"tertiary"}
                    icon={FaXmark}
                    onClick={closeMenu}
                />
                <MainMenu direction={"col"} />
            </article>
        </div>
    );
};

export default MobileMenu;
