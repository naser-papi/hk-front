import { cva, VariantProps } from "class-variance-authority";
import { LinkButton } from "../atom";
import { BaseHTMLAttributes } from "react";
import { ImageKit } from "@/components/atom";
import trans from "@/helpers/i18n/server";

const variants = cva(
    [
        "service-card",
        "w-full",
        "flex",
        "flex-col",
        "p-4",
        "gap-8",
        "bg-white",
        "text-primary",
        "items-center",
        "rounded-lg",
        "drop-shadow-lg",
        "[&>.hk-button]:w-full",
        "w-[300px]",
        "[&>img]:w-[70px]",
        "[&>img]:h-[70px]",
        "[&>h3]:text-title",
        "[&>p]:text-desc",
        "[&>p]:text-altLight",
        "[&>p]:text-center",
        "md:[&>img]:w-[140px]",
        "md:[&>img]:h-[140px]",
        "md:[&>h3]:text-3xl",
        "md:[&>p]:text-2xl",
        "md:[&>.link-button]:text-2xl",
    ],
    {
        variants: {},
    }
);

interface ServiceCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    ikUrl: string;
    title: string;
    description: string;
    href: string;
}

const ServiceCard = ({ title, ikUrl, description, href }: ServiceCardProps) => {
    return (
        <div className={variants({})}>
            <ImageKit src={ikUrl} alt={title} width={70} height={70} loading="lazy" />
            <h3>{title}</h3>
            <p>{description}</p>
            <LinkButton
                label={trans("common.readMore")}
                href={href}
                variant={"tertiary"}
            />
        </div>
    );
};

export default ServiceCard;
