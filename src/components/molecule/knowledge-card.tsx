import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { ImageKit } from "@/components/atom";
import { Button } from "@/components";

const variants = cva(
    ["knowledge-card", "w-full", "flex", "flex-col", "gap-0", "items-end"],
    {
        variants: {
            size: {
                small: [
                    "min-w-[300px]",
                    "[&>img]:w-full",
                    "[&>img]:h-300px",
                    "[&>img]:max-h-[300px]",
                ],
            },
        },
        defaultVariants: {
            size: "small",
        },
    }
);

const infoVariants = cva(
    [
        "info-part",
        "bg-white",
        "text-primary",
        "w-full",
        "flex",
        "flex-col",
        "gap-4",
        "p-4",
        "items-center",
        "drop-shadow-lg",
        "rounded-bl-lg",
        "[&>h3]:text-title",
        "[&>p]:text-desc",
    ],
    {
        variants: {
            size: {
                small: [],
            },
        },
    }
);
const actionsVariants = cva(
    ["[&>.hk-button]:w-full", "[&>.hk-button]:rounded-t-none"],
    {
        variants: {
            size: {
                small: ["w-[134px]"],
            },
        },
    }
);

interface KnowledgeCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    title: string;
    description: string;
    ikUrl: string;
    href: string;
}

const KnowledgeCard = ({
    size,
    title,
    description,
    ikUrl,
    href,
}: KnowledgeCardProps) => {
    return (
        <div className={variants({ size })}>
            <ImageKit src={ikUrl} alt={title} width={300} height={300} />

            <section className={infoVariants({ size })}>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <section className={actionsVariants({ size })}>
                <Button label={"View Detail"} link={href} />
            </section>
        </div>
    );
};

export default KnowledgeCard;
