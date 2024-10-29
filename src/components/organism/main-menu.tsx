import { MenuLinks } from "@/constants/base";
import { MenuLink } from "@/components";
import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import useTranslation from "@/helpers/i18n/use-translation";

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
    return (
        <ul className={variants({ direction })}>
            {MenuLinks.map((link) => (
                <li key={link.id}>
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
