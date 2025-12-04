import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { IconType } from "react-icons";
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
    icon: IconType;
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
    const Icon = icon;
    return (
        <Link
            href={href}
            className={twMerge(menuLinkVariants({ disabled }), className)}
            title={hideLabel ? label : undefined}
        >
            <Icon />
            {!hideLabel && <span>{label}</span>}
        </Link>
    );
};

export default MenuLink;
