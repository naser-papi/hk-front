"use server";
import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Link from "next/link";
import { FaUpRightFromSquare, FaGlobe } from "react-icons/fa6";

const cardVariants = cva(
    [
        "external-link",
        "bg-white",
        "rounded-lg",
        "overflow-hidden",
        "shadow-md",
        "flex",
        "flex-col",
        "w-full",
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
    extends BaseHTMLAttributes<HTMLDivElement>,
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
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <div className={cardVariants({})} {...rest}>
                {/* Content Section */}
                <div className="p-5 flex flex-col gap-4 relative">
                    {/* External Link Indicator - Top Right */}
                    <div className="absolute top-4 right-4 text-gray-400 group-hover:text-gray-600 transition-colors">
                        <FaUpRightFromSquare className="w-4 h-4" />
                    </div>

                    {/* Icon Badge - Top Left */}
                    <div className="bg-orange-50 rounded-lg p-3 w-fit">
                        <FaGlobe className="w-8 h-8 text-orange-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ExternalLink;
