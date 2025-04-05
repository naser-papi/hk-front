import { cva, VariantProps } from "class-variance-authority";
import { LabelHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = cva(
    [
        "icon-label",
        "flex",
        "gap-1",
        "items-start",
        "h-[max-content]",
        "text-xl",
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
    icon: IconDefinition;
    label: string | number;
}
const IconLabel = ({ icon, label, intend }: IconLabelProps) => {
    return (
        <label className={variants({ intend })}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </label>
    );
};

export default IconLabel;
