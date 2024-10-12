import { MenuLinks } from "@/constants/base";
import { useTranslation } from "@/helpers";
import { MenuLink } from "@/components";
import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const variants = cva([
    "grid",
    "py-2",
    "min-w-[300px]",
    "gap-y-4",
    "bg-primary",
    "text-secondary",
]);

interface MainMenuProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {}

const MainMenu = ({}: MainMenuProps) => {
    const { t } = useTranslation();
    return (
        <ul className={variants({})}>
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
