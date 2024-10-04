import { cva, VariantProps } from "class-variance-authority";
import type { FabIconProps } from "./fab-icon";
import FabIcon from "./fab-icon";
import { ButtonHTMLAttributes } from "react";

const fabIconButtonVaraints = cva(
    [
        "fab-icon-button",
        "flex",
        "items-center",
        "gap-2",
        "text-label",
        "text-white",
    ],
    {
        variants: {
            disabled: {
                true: [],
                false: [],
            },
        },
    }
);

interface FabIconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        FabIconProps,
        VariantProps<typeof fabIconButtonVaraints> {
    label: string;
}

const FabIconButton = ({
    disabled,
    label,
    icon,
    onClick,
}: FabIconButtonProps) => {
    return (
        <button
            className={fabIconButtonVaraints({ disabled })}
            onClick={onClick}
        >
            <FabIcon icon={icon} />
            <span>{label}</span>
        </button>
    );
};

export default FabIconButton;
