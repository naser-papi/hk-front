import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
    icon: IconDefinition;
}

const FabIcon = ({ disabled, icon }: FabIconProps) => {
    return (
        <div className={iconVariants({ disabled })}>
            <FontAwesomeIcon icon={icon} />
        </div>
    );
};

export default FabIcon;
