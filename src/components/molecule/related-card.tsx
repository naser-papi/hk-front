import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Button, ImageKit } from "@/components/atom";
import trans from "@/helpers/i18n/server";

const variants = cva(
    [
        "related-card",
        "w-full",
        "flex",
        "flex-col",
        "gap-0",
        "items-end",
        "shrink-0",
        "w-[300px]",
        "[&>img]:w-full",
        "[&>img]:min-h-[280px]",
        "[&>img]:max-h-[200px]",
        "@2xl:w-[420px]",
        "@2xl:[&>img]:min-h-[300px]",
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
        "h-full",
        "flex",
        "flex-col",
        "gap-4",
        "p-4",
        "items-center",
        "drop-shadow-lg",
        "[&>h3]:text-title",
        "[&>p]:text-desc",
        "@3xl:[&>h3]:text-3xl",
        "@3xl:[&>p]:text-2xl",
    ],
    {
        variants: {},
    }
);
const actionsVariants = cva(
    [
        "actions-part",
        "w-full",
        "[&>.hk-button]:w-full",
        "[&>.hk-button]:rounded-t-none",
        "[&>.hk-button]:border-2",
    ],
    {
        variants: {},
    }
);

interface RelatedCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    title: string;
    description: string;
    ikUrl: string;
    href: string;
}

const RelatedCard = ({ title, description, ikUrl, href }: RelatedCardProps) => {
    return (
        <div className={variants({})}>
            <ImageKit src={ikUrl} alt={title} width={300} height={300} />
            <section className={infoVariants({})}>
                <h3>{title}</h3>
            </section>
            <section className={actionsVariants({})}>
                <Button label={trans("common.viewDetail")} link={href} />
            </section>
        </div>
    );
};

export default RelatedCard;
