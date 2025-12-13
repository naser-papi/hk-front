import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { AnchorHTMLAttributes } from "react";
import { IconType } from "react-icons";

const linkIconVariants = cva(
    [
        "link-icon",
        "text-5xl",
        "rounded-full",
        "transition-colors",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-border-focus",
    ],
    {
        variants: {
            variant: {
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
            variant: "primary",
            size: "middle",
        },
    }
);

interface LinkIconProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof linkIconVariants> {
    icon: IconType;
    href: string;
}

const LinkIcon = ({ icon, size, variant, href, className }: LinkIconProps) => {
    const Icon = icon;
    return (
        <Link
            href={href}
            className={twMerge(linkIconVariants({ size, variant }), className)}
            aria-label={`Link to ${href}`}
        >
            <Icon aria-hidden="true" />
        </Link>
    );
};

export default LinkIcon;
