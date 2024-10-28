import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const bulletVariants = cva(
    [
        "bullet-point",
        "w-6",
        "h-6",
        "border-1",
        "border-cyan",
        "rounded-full",
        "drop-shadow-lg",
    ],
    {
        variants: {
            active: {
                true: ["bg-secondary"],
                false: ["bg-white"],
            },
        },
    }
);

interface BulletPointProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof bulletVariants> {}

const BulletPoint = ({ active, ...rest }: BulletPointProps) => {
    return <div className={bulletVariants({ active })} {...rest}></div>;
};

export default BulletPoint;
