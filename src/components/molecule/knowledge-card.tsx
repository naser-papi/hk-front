import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components";

const variants = cva(["flex", "flex-col", "gap-0", "items-end"], {
    variants: {
        size: {
            small: ["min-w-[300px]"],
        },
    },
    defaultVariants: {
        size: "small",
    },
});

const imageVariants = cva(["rounded-t-lg"], {
    variants: {
        size: {
            small: ["h-[300px]", "w-full"],
        },
    },
});

const infoVariants = cva(
    [
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
    image: StaticImageData;
    href: string;
}

const KnowledgeCard = ({
    size,
    title,
    description,
    image,
    href,
}: KnowledgeCardProps) => {
    return (
        <div className={variants({ size })}>
            <Image
                src={image}
                alt={title}
                className={imageVariants({ size })}
            />
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
