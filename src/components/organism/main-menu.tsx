"use client";
import { MenuLinks } from "@/constants/base";
import { MenuLink } from "@/components/atom";
import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes, useCallback } from "react";
import useTranslation from "@/helpers/i18n/use-translation";
import BaseState from "@/stores/base";

const variants = cva(["main-menu", "min-w-[300px]"], {
    variants: {
        direction: {
            row: ["flex", "items-center", "justify-between"],
            col: ["grid", "py-2", "gap-y-4"],
        },
    },
    defaultVariants: {
        direction: "col",
    },
});

interface MainMenuProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {}
        

const MainMenu = ({ direction }: MainMenuProps) => {
    const { t } = useTranslation();
    const onMenuItemClicked= useCallback(()=>{
        BaseState.toggleMenu();
    },[]);
    return (
        <ul className={variants({ direction })}>
            {MenuLinks.map((link) => (
                <li key={link.id} onClick={onMenuItemClicked}>
                    <MenuLink
                        label={t(link.title)}
                        icon={link.icon}
                        href={link.path}                       
                    />
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;
