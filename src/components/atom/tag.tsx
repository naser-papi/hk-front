import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const tagVariants = cva(
    [
        "tag",
        "inline-flex",
        "items-center",
        "px-3",
        "py-1",
        "rounded-md",
        "text-sm",
        "font-semibold",
        "uppercase",
        "shadow-md",
        "z-10",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-primary",
                    "text-white",
                ],
                secondary: [
                    "bg-secondary",
                    "text-white",
                ],
                accent: [
                    "bg-secondary",
                    "text-white",
                ],
                success: [
                    "bg-success",
                    "text-white",
                ],
                warning: [
                    "bg-warning",
                    "text-white",
                ],
                error: [
                    "bg-error",
                    "text-white",
                ],
            },
            position: {
                absolute: [
                    "absolute",
                    "top-4",
                    "start-4",
                ],
                relative: [],
            },
        },
        defaultVariants: {
            variant: "accent",
            position: "relative",
        },
    }
);

interface TagProps
    extends BaseHTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof tagVariants> {
    children: React.ReactNode;
}

const Tag = ({
    children,
    variant,
    position,
    className,
    ...rest
}: TagProps) => {
    return (
        <span className={twMerge(tagVariants({ variant, position }), className)} {...rest}>
            {children}
        </span>
    );
};

export default Tag;

