"use client";
import { cva, VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

const showMoreLinkVariants = cva(
    [
        "show-more-button",
        "flex",
        "flex-col-reverse",
        "items-center",
        "pb-7",
        "relative",
        "w-[190px]",
        "h-[150px]",
        "[&>span]:z-10",
        "[&>span]:text-label",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-border-focus",
    ],
    {
        variants: {
            variant: {
                primary: [],
                secondary: [],
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

interface ShowMoreLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof showMoreLinkVariants> {
    label: string;
    image: StaticImageData;
    href: string;
}

const ShowMoreLink = ({ label, image, href, variant }: ShowMoreLinkProps) => {
    return (
        <Link href={href} className={showMoreLinkVariants({ variant })}>
            <Image src={image} alt={"show more"} fill />
            <span>{label}</span>
        </Link>
    );
};

export default ShowMoreLink;
