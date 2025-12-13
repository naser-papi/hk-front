"use client";
import { MenuLinks } from "@/constants/base";
import { MenuLink } from "@/components/atom";
import ShareButton from "@/components/organism/share-button";
import { useEffect, useState } from "react";
import useTranslation from "@/helpers/i18n/use-translation";

const SideFloatMenu = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const scrollElement = document.querySelector(
            "main.page-default-container"
        ) as HTMLElement;
        
        if (!scrollElement) return;
        
        const handleScroll = () => {
            setVisible(scrollElement.scrollTop > 400);
        };
        
        scrollElement.addEventListener("scroll", handleScroll, { passive: true });
        
        // Initial check
        handleScroll();

        return () => {
            scrollElement.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <aside className={`side-float-menu ${visible ? "block" : "hidden"}`}>
            <nav>
                {MenuLinks.map((link) => (
                    <MenuLink
                        key={link.id}
                        label={t(link.title)}
                        icon={link.icon}
                        href={link.path}
                    />
                ))}
                <hr />
                <ShareButton />
            </nav>
        </aside>
    );
};

export default SideFloatMenu;
