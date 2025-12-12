import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import FabIcon from "./fab-icon";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

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
    icon: IconType;
    hideLabel?: boolean;
}

const FabIconButton = ({
    disabled,
    label,
    icon,
    onClick,
    hideLabel,
    className,
    ...rest
}: FabIconButtonProps) => {
    return (
        <button
            {...rest}
            className={twMerge(
                fabIconButtonVaraints({ disabled }),
                className,
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            )}
            onClick={onClick}
            aria-label={hideLabel ? label : undefined}
        >
            <FabIcon icon={icon} aria-hidden={hideLabel ? true : undefined} />
            {!hideLabel && <span>{label}</span>}
        </button>
    );
};

export default FabIconButton;
