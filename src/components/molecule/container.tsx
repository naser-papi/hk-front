import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const variants = cva(["flex", "items-center", "w-full"], {
    variants: {
        direction: {
            row: ["flex-row", "overflow-x-auto"],
            column: ["flex-col", "overflow-y-auto"],
        },
        gap: {
            little: ["gap-3"],
            normal: ["gap-6"],
            medium: ["gap-9"],
            big: ["gap-12"],
        },
        noScroll: {
            true: ["hidden-scroll"],
            false: [],
        },
    },
    defaultVariants: {
        direction: "column",
        noScroll: true,
        gap: "little",
    },
});

interface ContainerProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    children: React.ReactNode[];
}

const Container = ({ children, direction }: ContainerProps) => {
    return <article className={variants({ direction })}>{children}</article>;
};

export default Container;
