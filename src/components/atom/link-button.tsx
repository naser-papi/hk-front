import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaAnglesRight } from "react-icons/fa6";

const linkButtonVariants = cva(
    [
        "link-button",
        "text-center",
        "normal-flex-row-container",
        "border-b-2",
        "border-black",
        "text-label",
        "text-black",
        "max-w-[fit-content]",
        "h-[max-content]",
        "[&>svg]:text-secondary",
        "rtl:[&>svg]:rotate-180",
        "transition-colors",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-border-focus",
    ],
    {
        variants: {
            disabled: {
                true: ["opacity-50", "cursor-not-allowed"],
                false: [],
            },
            hover: {
                true: [],
                false: [],
            },
            variant: {
                primary: [],
                secondary: [
                    "bg-secondary",
                    "[&>svg]:hidden",
                    "text-white",
                    "px-4",
                    "py-2",
                    "border-b-0",
                    "rounded-lg",
                ],
                tertiary: [
                    "bg-primary",
                    "[&>svg]:hidden",
                    "text-white",
                    "px-4",
                    "py-2",
                    "border-b-0",
                    "rounded-lg",
                ],
            },
        },
        defaultVariants: {
            variant: "primary",
            disabled: false,
        },
    }
);

interface LinkButtonProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof linkButtonVariants> {
    label: string;
    href: string;
}

const LinkButton = ({
    label,
    href,
    className,
    disabled,
    hover,
    variant,
}: LinkButtonProps) => {
    return (
        <Link                            
            href={href}
            className={twMerge(
                linkButtonVariants({ disabled, hover, variant }),
                className
            )}            
        >
            <span>{label}</span>
            <FaAnglesRight />
        </Link>
    );
};

export default LinkButton;
