import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Button, ImageKit, Tag, DateLabel } from "@/components/atom";
import trans from "@/helpers/i18n/server";

const variants = cva(
    [
        "knowledge-card",
        "w-full",
        "flex",
        "flex-col",
        "gap-0",
        "bg-white",
        "rounded-lg",
        "overflow-hidden",
        "drop-shadow-lg",
        "min-w-[300px]",
    ],
    {
        variants: {},
    }
);

const imageContainerVariants = cva(
    [
        "image-container",
        "relative",
        "w-full",
        "overflow-hidden",
        "[&>img]:w-full",
        "[&>img]:h-full",
        "[&>img]:object-cover",
        "aspect-[16/9]",
        "min-h-[200px]",
    ],
    {
        variants: {},
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
        "gap-3",
        "p-4",
        "pt-4",
    ],
    {
        variants: {},
    }
);

const titleVariants = cva(
    [
        "title",
        "text-title",
        "font-bold",
        "text-lg",
        "leading-tight",
        "@3xl:text-xl",
    ],
    {
        variants: {},
    }
);

const descriptionVariants = cva(
    [
        "description",
        "text-desc",
        "text-sm",
        "text-gray-700",
        "leading-relaxed",
        "@3xl:text-base",
    ],
    {
        variants: {},
    }
);

const actionsVariants = cva(
    [
        "actions-part",
        "px-4",
        "pb-4",
        "pt-2",
        "[&>.hk-button]:w-full",
        "[&>.hk-button]:rounded-lg",
        "[&>.hk-button]:border",
        "[&>.hk-button]:border-gray-300",
        "[&>.hk-button]:bg-white",
        "[&>.hk-button]:text-primary",
        "[&>.hk-button]:hover:bg-gray-50",
        "[&>.hk-button]:hover:border-gray-400",
    ],
    {
        variants: {},
    }
);

interface KnowledgeCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    title: string;
    description: string;
    ikUrl: string;
    href: string;
    date?: string;
    tag?: string;
}

const KnowledgeCard = ({
    title,
    description,
    ikUrl,
    href,
    date,
    tag,
}: KnowledgeCardProps) => {
    return (
        <div className={variants({})}>
            <div className={imageContainerVariants({})}>
                <ImageKit src={ikUrl} alt={title} width={400} height={225} />
                {tag && (
                    <Tag variant="accent" position="absolute">
                        {tag}
                    </Tag>
                )}
            </div>
            <section className={infoVariants({})}>
                {date && (
                    <DateLabel date={date} variant="primary" />
                )}
                <h3 className={titleVariants({})}>{title}</h3>
                <p className={descriptionVariants({})}>{description}</p>
            </section>
            <section className={actionsVariants({})}>
                <Button
                    label={trans("common.viewDetail")}
                    link={href}
                    variant="tertiary"
                />
            </section>
        </div>
    );
};

export default KnowledgeCard;
