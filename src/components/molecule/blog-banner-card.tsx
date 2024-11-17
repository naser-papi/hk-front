import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Button, ImageKit, SlidePervNext } from "@/components";
import trans from "@/helpers/i18n/server";
import { Direction } from "@/types/base";

const variants = cva(
    [
        "blog-banner-card",
        "w-full",
        "grid",
        "gap-4",
        "[&>img]:w-full",
        "rounded-lg",
        "bg-altLight",
        "p-2",
        "[&>h3]:text-3xl",
        "[&>h3]:font-bold",
        "text-white",
        "text-center",
        "[&>img]:max-h-[300px]",
        "[&>img]:h-[300px]",
        "border-2",
        "border-dotted",
        "drop-shadow-lg",
        "border-primary",
    ],
    {
        variants: {
            screen: {
                mobile: [],
                tablet: [],
                desktop: [],
            },
        },
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
    screen,
    navDirection,
}: BlogBannerCardProps) => {
    return (
        <div className={variants({ screen })}>
            <h3>{title}</h3>
            <ImageKit src={ikUrl} alt={title} width={300} height={300} />
            <p>{shortDesc}</p>
            <Button label={trans("common.readFullArticle")} link={link} />
            <SlidePervNext mode={navDirection} />
        </div>
    );
};

export default BlogBannerCard;
