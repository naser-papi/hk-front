import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(["flex", "items-center", "w-full", "z-20"], {
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
    children: React.ReactNode[] | JSX.Element;
}

const Container = ({
    children,
    direction,
    noScroll,
    className,
    gap,
}: ContainerProps) => {
    return (
        <article
            className={twMerge(
                variants({ direction, gap, noScroll }),
                className
            )}
        >
            {children}
        </article>
    );
};

export default Container;
