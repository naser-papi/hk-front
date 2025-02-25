import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const menuLinkVariants = cva(
    [
        "menu-link",
        "row-container",
        "text-secondary",
        "py-2",
        "px-4",
        "w-full",
        "rounded-lg",
        "text-center",
        "hover:bg-altLight",
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
    href: string;
    hideLabel?: boolean;
}

const MenuLink = ({
    label,
    disabled,
    href,
    icon,
    hideLabel,
    className,
}: menuLinkProps) => {
    return (
        <Link
            href={href}
            className={twMerge(menuLinkVariants({ disabled }), className)}
            title={hideLabel ? label : undefined}
        >
            <FontAwesomeIcon icon={icon} />
            {!hideLabel && <span>{label}</span>}
        </Link>
    );
};

export default MenuLink;
