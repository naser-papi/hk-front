import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Button, ImageKit, SlidePervNext } from "@/components/atom";
import trans from "@/helpers/i18n/server";
import { Direction } from "@/types/base";

const variants = cva(
    [
        "blog-banner-card",
        "grid",
        "grid-rows-[32px_300px_1fr_1fr]",
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
        "w-[min(100%-64px,620px)]",
        "shrink-0",
        "[&>img]:w-full",
        "[&>h3]:text-3xl",
        "[&>h3]:font-bold",
        "[&>img]:max-h-[300px]",
        "[&>img]:h-[300px]",
        "[&>section]:mt-auto",
        "[&>section]:flex",
        "[&>section]:flex-col",
    ],
    {
        variants: {},
    }
);

interface BlogBannerCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    title: string;
    ikUrl: string;
    shortDesc: string;
    link: string;
    navDirection: Direction;
}

const BlogBannerCard = ({
    title,
    ikUrl,
    shortDesc,
    link,
    navDirection,
}: BlogBannerCardProps) => {
    return (
        <div className={variants({})}>
            <h3>{title}</h3>
            <ImageKit src={ikUrl} alt={title} width={300} height={300} />
            <p>{shortDesc}</p>
            <section>
                <Button label={trans("common.readFullArticle")} link={link} />
                <SlidePervNext mode={navDirection} />
            </section>
        </div>
    );
};

export default BlogBannerCard;
