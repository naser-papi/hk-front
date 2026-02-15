"use server";
import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Link from "next/link";
import { FaGlobe, FaUpRightFromSquare } from "react-icons/fa6";

const cardVariants = cva(
    [
        "external-link",
        "bg-white",
        "rounded-lg",
        "overflow-hidden",
        "shadow-md",
        "flex",
        "flex-col",
        "min-w-content",
        "flex-shrink-0",
        "transition-all",
        "hover:shadow-lg",
        "hover:scale-[1.02]",
        "cursor-pointer",
        "group",
    ],
    {
        variants: {},
    }
);

interface ExternalLinkProps
    extends
        BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {
    title: string;
    description?: string;
    href: string;
}

const ExternalLink = ({
    title,
    description,
    href,
    ...rest
}: ExternalLinkProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={"flex"}
        >
            <div className={cardVariants({})} {...rest}>
                {/* Content Section */}
                <div className="relative flex flex-col gap-4 p-5">
                    {/* External Link Indicator - Top Right */}
                    <div className="absolute right-4 top-4 text-gray-400 transition-colors group-hover:text-gray-600">
                        <FaUpRightFromSquare className="h-4 w-4" />
                    </div>

                    {/* Icon Badge - Top Left */}
                    <div className="w-fit rounded-lg bg-orange-50 p-3">
                        <FaGlobe className="h-8 w-8 text-orange-600" />
                    </div>

                    {/* Title */}
                    <h3 className="line-clamp-2 text-lg font-bold text-gray-900">
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="line-clamp-2 text-sm text-gray-600">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ExternalLink;
