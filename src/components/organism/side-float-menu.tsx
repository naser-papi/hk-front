"use client";
import { MenuLinks } from "@/constants/base";
import { MenuLink } from "@/components/atom";
import ShareButton from "@/components/organism/share-button";
import { useEffect, useState } from "react";

const SideFloatMenu = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const scrollElement = document.querySelector(
            "main.page-default-container"
        )! as HTMLElement;
        scrollElement.addEventListener("scroll", () => {
            setVisible(scrollElement.scrollTop > 400);
        });

        return () => scrollElement.removeEventListener("scroll", () => {});
    }, []);
    return (
        <aside className={`side-float-menu ${visible ? "block" : "hidden"}`}>
            <nav>
                {MenuLinks.map((link) => (
                    <MenuLink
                        key={link.id}
                        label={link.title}
                        icon={link.icon}
                        href={link.path}
                        hideLabel
                    />
                ))}
                <hr />
                <ShareButton />
            </nav>
        </aside>
    );
};

export default SideFloatMenu;
