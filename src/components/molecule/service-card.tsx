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
        "overflow-hidden",
        "bg-white",
        "text-primary",
        "rounded-lg",
        "drop-shadow-lg",
    ],
    {
        variants: {
            verticalLayout: {
                true: ["md:flex-col"],
                false: ["md:flex-row"],
            },
        },
    }
);

const imageContainerVariants = cva(["relative", "min-h-[360px]", "w-full"], {
    variants: {
        verticalLayout: {
            true: ["md:w-full"],
            false: ["md:w-1/2"],
        },
    },
});

const contentVariants = cva(
    ["flex", "flex-col", "justify-between", "p-6", "gap-4", "w-full"],
    {
        variants: {
            verticalLayout: {
                true: ["md:w-full"],
                false: ["md:w-1/2"],
            },
        },
    }
);

const titleVariants = cva(["text-title", "font-semibold", "md:text-3xl"]);

const descriptionVariants = cva(["text-desc", "flex-grow", "md:text-2xl"]);

interface ServiceCardProps
    extends BaseHTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    ikUrl: string;
    title: string;
    description: string;
    href: string;
}

const ServiceCard = ({
    title,
    ikUrl,
    description,
    href,
    verticalLayout,
}: ServiceCardProps) => {
    return (
        <div className={variants({ verticalLayout })}>
            <div className={imageContainerVariants({ verticalLayout })}>
                <ImageKit
                    src={ikUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    loading="lazy"
                />
            </div>
            <div className={contentVariants({ verticalLayout })}>
                <div className="flex flex-col gap-3">
                    <h3 className={titleVariants()}>{title}</h3>
                    <p className={descriptionVariants()}>{description}</p>
                </div>
                <LinkButton
                    label={trans("common.readMore")}
                    href={href}
                    variant={"tertiary"}
                />
            </div>
        </div>
    );
};

export default ServiceCard;
