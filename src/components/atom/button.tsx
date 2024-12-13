"use client";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

const variants = cva(["hk-button", "block", "rounded-lg", "text-label"], {
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
                "border-[1px]",
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
});

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof variants> {
    label: string;
    type?: "button" | "submit";
    link?: string;
    icon?: IconDefinition;
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
    ...rest
}: ButtonProps) => {
    const router = useRouter();
    return (
        <button
            className={twMerge(
                variants({ intend, selected, disabled }),
                className
            )}
            type={type ?? "butto,n"}
            onClick={
                link
                    ? () => {
                          router.push(link);
                      }
                    : onClick
            }
            disabled={!!disabled}
            {...rest}
        >
            {label && label}
            {icon && <FontAwesomeIcon icon={icon} />}
        </button>
    );
};

export default Button;
