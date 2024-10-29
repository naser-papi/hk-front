"use client";
import BaseState from "@/stores/base";
import { useSnapshot } from "valtio/react";
import { Button, MainMenu } from "@/components";
import { faClose } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import { useCallback } from "react";

const MobileMenu = () => {
    const { showMenu } = useSnapshot(BaseState);
    const closeMenu = useCallback(() => {
        BaseState.toggleMenu();
    }, []);
    if (!showMenu) return null;
    return (
        <div
            className={
                "absolute left-0 top-[70px] w-full bg-primary p-2 lg:hidden"
            }
        >
            <article
                className={
                    "w-full text-secondary [&>button]:ml-auto [&>button]:mr-4"
                }
            >
                <Button
                    label={""}
                    intend={"tertiary"}
                    icon={faClose}
                    onClick={closeMenu}
                />
                <MainMenu direction={"col"} />
            </article>
        </div>
    );
};

export default MobileMenu;
