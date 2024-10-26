import { cva, VariantProps } from "class-variance-authority";
import { Button } from "../atom";
import { BaseHTMLAttributes } from "react";
import { useTranslation } from "@/helpers";
import { ImageKit } from "@/components";

const variants = cva(
    [
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
    ],
    {
        variants: {
            size: {
                small: [
                    "w-[300px]",
                    "[&>img]:w-[70px]",
                    "[&>img]:h-[70px]",
                    "[&>h3]:text-title",
                    "[&>p]:text-desc",
                    "[&>p]:text-altLight",
                    "[&>p]:text-center",
                ],
            },
        },
        defaultVariants: {
            size: "small",
        },
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
    const { t } = useTranslation();
    return (
        <div className={variants({})}>
            <ImageKit src={ikUrl} alt={title} width={70} height={70} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Button
                label={t("common.readMore")}
                link={href}
                intend={"primary"}
            />
        </div>
    );
};

export default ServiceCard;
