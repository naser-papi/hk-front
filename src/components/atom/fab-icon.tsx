import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

const iconVariants = cva(
    [
        "fab-icon",
        "w-8",
        "h-8",
        "rounded-full",
        "hover:drop-shadow-lg",
        "text-label",
        "text-secondary",
        "text-center",
        "flex",
        "justify-center",
        "items-center",
    ],
    {
        variants: {
            disabled: {
                false: ["bg-white"],
                true: ["bg-cyan", "text-white"],
            },
        },
        defaultVariants: {
            disabled: false,
        },
    }
);

export interface FabIconProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof iconVariants> {
    icon: IconType;
}

const FabIcon = ({ disabled, icon, className }: FabIconProps) => {
    const Icon = icon;
    return (
        <div className={twMerge(iconVariants({ disabled }), className)}>
            <Icon />
        </div>
    );
};

export default FabIcon;
