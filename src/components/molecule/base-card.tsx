/**
 * BaseCard Component
 * 
 * A standardized base card component that provides consistent structure
 * for all card types (ServiceCard, KnowledgeCard, RelatedCard, etc.)
 * 
 * This component abstracts common card patterns:
 * - Image/Icon display
 * - Title and description
 * - Action buttons/links
 * - Consistent spacing and styling
 */

import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ImageKit } from "@/components/atom";

const baseCardVariants = cva(
    [
        "base-card",
        "w-full",
        "flex",
        "flex-col",
        "bg-white",
        "text-primary",
        "rounded-lg",
        "drop-shadow-lg",
        "overflow-hidden",
    ],
    {
        variants: {
            variant: {
                default: [],
                elevated: ["drop-shadow-xl"],
                outlined: ["border-2", "border-border-default", "drop-shadow-none"],
            },
            size: {
                sm: ["p-3", "gap-4"],
                md: ["p-4", "gap-6"],
                lg: ["p-6", "gap-8"],
            },
            imagePosition: {
                top: [],
                left: ["flex-row", "@4xl:flex-row"],
                right: ["flex-row-reverse", "@4xl:flex-row-reverse"],
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
            imagePosition: "top",
        },
    }
);

const imageVariants = cva(
    [
        "base-card-image",
        "w-full",
        "object-cover",
    ],
    {
        variants: {
            size: {
                sm: ["h-32", "min-h-[120px]"],
                md: ["h-48", "min-h-[200px]"],
                lg: ["h-64", "min-h-[280px]"],
            },
            position: {
                top: [],
                left: ["@4xl:w-[300px]", "@4xl:flex-shrink-0"],
                right: ["@4xl:w-[300px]", "@4xl:flex-shrink-0"],
            },
        },
        defaultVariants: {
            size: "md",
            position: "top",
        },
    }
);

const contentVariants = cva(
    [
        "base-card-content",
        "flex",
        "flex-col",
        "gap-4",
        "flex-1",
    ],
    {
        variants: {
            align: {
                start: ["items-start", "text-left"],
                center: ["items-center", "text-center"],
                end: ["items-end", "text-right"],
            },
        },
        defaultVariants: {
            align: "center",
        },
    }
);

const titleVariants = cva(
    [
        "base-card-title",
        "font-semibold",
        "text-primary",
    ],
    {
        variants: {
            size: {
                sm: ["text-lg"],
                md: ["text-xl", "md:text-2xl"],
                lg: ["text-2xl", "md:text-3xl"],
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const descriptionVariants = cva(
    [
        "base-card-description",
        "text-secondary",
    ],
    {
        variants: {
            size: {
                sm: ["text-sm"],
                md: ["text-base"],
                lg: ["text-lg"],
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const actionsVariants = cva(
    [
        "base-card-actions",
        "flex",
        "gap-2",
    ],
    {
        variants: {
            align: {
                start: ["justify-start"],
                center: ["justify-center"],
                end: ["justify-end"],
                stretch: ["flex-col", "[&>*]:w-full"],
            },
        },
        defaultVariants: {
            align: "stretch",
        },
    }
);

export interface BaseCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof baseCardVariants> {
    // Image props
    imageUrl?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    
    // Content props
    title?: string;
    description?: string;
    
    // Custom content (overrides title/description)
    children?: ReactNode;
    
    // Actions
    actions?: ReactNode;
    
    // Content alignment
    contentAlign?: VariantProps<typeof contentVariants>["align"];
}

const BaseCard = ({
    variant,
    size,
    imagePosition,
    imageUrl,
    imageAlt,
    imageWidth = 300,
    imageHeight = 300,
    title,
    description,
    children,
    actions,
    contentAlign,
    className,
    ...rest
}: BaseCardProps) => {
    const hasImage = !!imageUrl;
    const hasContent = !!(title || description || children);
    
    return (
        <div
            className={twMerge(
                baseCardVariants({ variant, size, imagePosition }),
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                className
            )}
            {...rest}
        >
            {/* Image Section */}
            {hasImage && (
                <div className={imageVariants({ size, position: imagePosition })}>
                    <ImageKit
                        src={imageUrl}
                        alt={imageAlt || title || "Card image"}
                        width={imageWidth}
                        height={imageHeight}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            
            {/* Content Section */}
            {hasContent && (
                <div className={contentVariants({ align: contentAlign })}>
                    {title && (
                        <h3 className={titleVariants({ size })}>{title}</h3>
                    )}
                    {description && (
                        <p className={descriptionVariants({ size })}>{description}</p>
                    )}
                    {children}
                </div>
            )}
            
            {/* Actions Section */}
            {actions && (
                <div className={actionsVariants({ align: contentAlign })}>
                    {actions}
                </div>
            )}
        </div>
    );
};

export default BaseCard;

