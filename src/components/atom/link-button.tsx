import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDoubleRight } from "@awesome.me/kit-026a927a83/icons/classic/solid";

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
    ],
    {
        variants: {
            disabled: {
                true: [],
                false: [],
            },
            hover: {
                true: [],
                false: [],
            },
            intend: {
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
    intend,
}: LinkButtonProps) => {
    return (
        <Link
            href={href}
            className={twMerge(
                linkButtonVariants({ disabled, hover, intend }),
                className
            )}
    ,    >
            <span>{label}</span>
            <FontAwesomeIcon icon={faChevronDoubleRight} />
        </Link>
    );
};

export default LinkButton;
