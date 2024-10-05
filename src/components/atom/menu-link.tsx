import { AnchorHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const menuLinkVariants = cva(
    [
        "menu-link",
        "normal-flex-row-container",
        "text-secondary",
        "py-2",
        "px-4",
        "rounded-lg",
        "hover:bg-primary",
        "hover:text-white",
    ],
    {
        variants: {
            disabled: {
                true: [],
                false: [],
            },
        },
    }
);

interface menuLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof menuLinkVariants> {
    label: string;
    icon: IconDefinition;
}

const MenuLink = ({ label, disabled, href, icon }: menuLinkProps) => {
    return (
        <Link href={href} className={menuLinkVariants({ disabled })}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </Link>
    );
};

export default MenuLink;
