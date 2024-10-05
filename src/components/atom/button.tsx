"use client";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

const variants = cva(
    [
        "hk-button",
        "block",
        "px-4",
        "py-2",
        "rounded-lg",
        "text-label",
        "text-white",
        "hover:border-shadow",
    ],
    {
        variants: {
            intend: {
                primary: ["bg-primary"],
                secondary: ["bg-secondary"],
            },
        },
        defaultVariants: {
            intend: "primary",
        },
    }
);

interface buttonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof variants> {
    label: string;
    type?: "button" | "submit";
    link?: string;
}

const Button = ({ label, intend, onClick, link, type }: buttonProps) => {
    const router = useRouter();
    return (
        <button
            className={variants({ intend })}
            type={type ?? "button"}
            onClick={
                link
                    ? () => {
                          router.push(link);
                      }
                    : onClick
            }
        >
            {label}
        </button>
    );
};

export default Button;
