import { cva, VariantProps } from "class-variance-authority";

import FabIcon from "./fab-icon";
import { ButtonHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof fabIconButtonVaraints> {
    label: string;
    icon: IconDefinition;
    hideLabel?: boolean;
}

const FabIconButton = ({
    disabled,
    label,
    icon,
    onClick,
    hideLabel,
}: FabIconButtonProps) => {
    return (
        <button
            className={fabIconButtonVaraints({ disabled })}
            onClick={onClick}
        >
            <FabIcon icon={icon} />
            {!hideLabel && <span>{label}</span>}
        </button>
    );
};

export default FabIconButton;
