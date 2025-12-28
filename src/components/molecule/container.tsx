import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6;

const columnClassMap: Record<ColumnCount, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
};

const variants = cva(["w-full", "z-20"], {
    variants: {
        layout: {
            flex: ["flex", "items-center"],
            grid: ["grid"],
        },
        direction: {
            row: [],
            column: [],
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
    compoundVariants: [
        {
            layout: "flex",
            direction: "row",
            class: "flex-row overflow-x-auto",
        },
        {
            layout: "flex",
            direction: "column",
            class: "flex-col overflow-y-auto",
        },
    ],
    defaultVariants: {
        layout: "flex",
        direction: "column",
        noScroll: true,
        gap: "little",
    },
});

interface ContainerProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    children: React.ReactNode[] | JSX.Element;
    columns?: ColumnCount;
}

const Container = ({
    children,
    direction,
    noScroll,
    className,
    gap,
    layout,
    columns = 1,
}: ContainerProps) => {
    const gridColumnClass =
        layout === "grid" ? columnClassMap[columns] ?? columnClassMap[1] : undefined;

    return (
        <article
            className={twMerge(
                variants({ direction, gap, noScroll, layout }),
                gridColumnClass,
                className
            )}
        >
            {children}
        </article>
    );
};

export default Container;
