import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { AnchorHTMLAttributes } from "react";
import { IconType } from "react-icons";

const variants = cva(["link-icon", "text-5xl", "rounded-full"], {
    variants: {
        intend: {
            primary: ["text-white"],
            secondary: ["bg-white", "text-primary", "px-1"],
        },
        size: {
            large: [],
            middle: [],
            small: [],
        },
    },
    defaultVariants: {
        intend: "primary",
    },
});

interface LinkIconProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof variants> {
    icon: IconType;
    href: string;
}

const LinkIcon = ({ icon, size, intend, href, className }: LinkIconProps) => {
    const Icon = icon;
    return (
        <Link
            href={href}
            className={twMerge(variants({ size, intend }), className)}
        >
            <Icon />
        </Link>
    );
};

export default LinkIcon;
