import { cva, VariantProps } from "class-variance-authority";
import { LabelHTMLAttributes } from "react";
import { IconType } from "react-icons";

const iconLabelVariants = cva(
    [
        "icon-label",
        "flex",
        "gap-1",
        "items-start",
        "h-[max-content]",
        "text-body",
        "md:text-label",
    ],
    {
        variants: {
            variant: {
                primary: ["[&>svg]:text-altLight", "text-secondary"],
                secondary: ["[&>svg]:text-secondary", "text-altLight"],
                tertiary: ["[&>svg]:text-white", "text-white"],
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

interface IconLabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof iconLabelVariants> {
    icon: IconType;
    label: string | number;
}
const IconLabel = ({ icon, label, variant }: IconLabelProps) => {
    const Icon = icon;
    return (
        <label className={iconLabelVariants({ variant })}>
            <Icon />
            <span>{label}</span>
        </label>
    );
};

export default IconLabel;
