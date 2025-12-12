"use client";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

const variants = cva(
    ["hk-button", "block", "rounded-lg", "text-label", "flex-shrink-0"],
    {
        variants: {
            intend: {
                primary: [
                    "text-white",
                    "bg-primary",
                    "hover:bg-secondary",
                    "hover:drop-shadow-lg",
                    "px-4",
                    "py-2",
                ],
                secondary: [
                    "text-white",
                    "bg-secondary",
                    "hover:bg-primary",
                    "hover:drop-shadow-lg",
                    "px-4",
                    "py-2",
                ],
                tertiary: [],
                filter: [
                    "text-primary",
                    "bg-white",
                    "hover:bg-primary",
                    "hover:text-white",
                    "rounded-full",
                    "border",
                    "border-black",
                    "px-5",
                    "py-1",
                ],
            },
            disabled: {
                true: ["bg-alt", "cursor-not-allowed", "hover:bg-alt"],
                false: [],
            },
            selected: {
                true: [],
                false: [],
            },
        },
        defaultVariants: {
            intend: "primary",
        },
        compoundVariants: [
            {
                selected: true,
                intend: "filter",
                className: ["bg-primary", "text-white"],
            },
        ],
    }
);

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof variants> {
    label: string;
    type?: "button" | "submit";
    link?: string;
    icon?: IconType;
    ariaLabel?: string; // For icon-only buttons, provide accessible label
}

const Button = ({
    label,
    intend,
    selected,
    onClick,
    link,
    type,
    icon,
    className,
    disabled,
    ariaLabel,
    ...rest
}: ButtonProps) => {
    const router = useRouter();
    // If label is empty but icon exists, use ariaLabel or icon description
    const accessibleLabel = !label && icon ? ariaLabel : label;
    const hasIconOnly = !label && icon;
    
    return (
        <button
            className={twMerge(
                variants({ intend, selected, disabled }),
                className,
                // Add focus styles for accessibility
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            )}
            type={type ?? "button"}
            onClick={
                link
                    ? () => {
                          router.push(link);
                      }
                    : onClick
            }
            disabled={!!disabled}
            aria-label={hasIconOnly ? accessibleLabel : undefined}
            aria-hidden={hasIconOnly && !accessibleLabel ? true : undefined}
            {...rest}
        >
            {label && <span>{label}</span>}
            {icon && (() => {
                const Icon = icon;
                return <Icon aria-hidden={hasIconOnly ? true : undefined} />;
            })()}
        </button>
    );
};

export default Button;
