import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Button, ImageKit } from "@/components/atom";
import trans from "@/helpers/i18n/server";

const variants = cva(
    [
        "knowledge-card",
        "w-full",
        "flex",
        "flex-col",
        "gap-0",
        "items-end",
        "@4xl:flex-row",
        "@4xl:items-stretch",
        "@4xl:drop-shadow-lg",
        "relative",
        "min-w-[300px]",
        "[&>img]:w-full",
        "[&>img]:h-300px",
        "[&>img]:max-h-[300px]",
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
        "gap-4",
        "p-4",
        "items-center",
        "drop-shadow-lg",
        "rounded-bl-lg",
        "[&>h3]:text-title",
        "[&>p]:text-desc",
        "@3xl:[&>h3]:text-3xl",
        "@3xl:[&>p]:text-2xl",
        "@4xl:grow-1",
        "@4xl:rounded-bl-none",
        "@4xl:drop-shadow-none",
    ],
    {
        variants: {},
    }
);
const actionsVariants = cva(
    [
        "[&>.hk-button]:w-full",
        "[&>.hk-button]:rounded-t-none",
        "[&>.hk-button]:border-2",
        "@4xl:absolute",
        "@4xl:bottom-0",
        "@4xl:end-0",
        "@4xl:[&>.hk-button]:rounded-none",
        "@3xl:w-[fit-content]",
        "@3xl:[&>.hk-button]:text-2xl",
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
}

const KnowledgeCard = ({
    title,
    description,
    ikUrl,
    href,
}: KnowledgeCardProps) => {
    return (
        <div className={variants({})}>
            <ImageKit src={ikUrl} alt={title} width={300} height={300} />
            <section className={infoVariants({})}>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <section className={actionsVariants({})}>
                <Button label={trans("common.viewDetail")} link={href} />
            </section>
        </div>
    );
};

export default KnowledgeCard;
