import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { AnchorHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = cva(["text-5xl", "rounded-full"], {
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
    icon: IconDefinition;
    href: string;
}

const LinkIcon = ({ icon, size, intend, href, className }: LinkIconProps) => {
    return (
        <Link
            href={href}
            className={twMerge(variants({ size, intend }), className)}
        >
            <FontAwesomeIcon icon={icon} />
        </Link>
    );
};

export default LinkIcon;
