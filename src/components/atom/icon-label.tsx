import { cva, VariantProps } from "class-variance-authority";
import { LabelHTMLAttributes } from "react";
import { IconType } from "react-icons";

const variants = cva(
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
            intend: {
                primary: ["[&>svg]:text-altLight", "text-secondary"],
                secondary: ["[&>svg]:text-secondary", "text-altLight"],
                tertiary: ["[&>svg]:text-white", "text-white"],
            },
        },
        defaultVariants: {
            intend: "primary",
        },
    }
);

interface IconLabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof variants> {
    icon: IconType;
    label: string | number;
}
const IconLabel = ({ icon, label, intend }: IconLabelProps) => {
    const Icon = icon;
    return (
        <label className={variants({ intend })}>
            <Icon />
            <span>{label}</span>
        </label>
    );
};

export default IconLabel;
