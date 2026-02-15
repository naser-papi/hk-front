import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Button, ImageKit } from "@/components/atom";
import trans from "@/helpers/i18n/server";
import { Direction } from "@/types/base";

const variants = cva(
    [
        "blog-banner-card",
        "grid",
        "grid-rows-[32px_auto_1fr_1fr]",
        "gap-4",
        "rounded-lg",
        "bg-altLight",
        "p-2",
        "text-white",
        "text-center",
        "border-2",
        "border-dotted",
        "drop-shadow-lg",
        "border-primary",
        "w-[min(calc(100vw-84px),531px)]",
        "shrink-0",
        "[&>img]:w-full",
        "[&>img]:rounded-lg",
        "[&>h3]:text-xl",
        "md:[&>h3]:text-2xl",
        "lg:[&>h3]:text-3xl",
        "[&>h3]:z-50",
        "[&>h3]:drop-shadow-lg",
        "[&>h3]:font-bold",
        "[&>img]:h-[min(calc((100vw-84px)/1.77),300px)]",
        "[&>img]:dark-box-shadow",
        "[&>section]:mt-auto",
        "[&>section]:flex",
        "[&>section]:flex-col",
    ],
    {
        variants: {},
    }
);

interface ListBannerCardProps
    extends BaseHTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    title: string;
    ikUrl: string;
    shortDesc: string;
    link: string;
    navDirection: Direction;
    detailButtonText?: string;
}

const ListBannerCard = ({
    title,
    ikUrl,
    shortDesc,
    link,
    detailButtonText = trans("common.readFullArticle"),
}: ListBannerCardProps) => {
    return (
        <div className={variants({})}>
            <h3>{title}</h3>
            <ImageKit src={ikUrl} alt={title} width={300} height={300} />
            <p>{shortDesc}</p>
            <section>
                <Button label={detailButtonText} link={link} />
            </section>
        </div>
    );
};

export default ListBannerCard;
