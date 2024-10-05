"use client";
import { cva, VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

const variants = cva(
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
    ],
    {
        variants: {
            intend: {
                primary: [],
                secondary: [],
            },
        },
    }
);

interface ShowMoreLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof variants> {
    label: string;
    image: StaticImageData;
    href: string;
}

const ShowMoreLink = ({ label, image, href, intend }: ShowMoreLinkProps) => {
    return (
        <Link href={href} className={variants({ intend })}>
            <Image src={image} alt={"show more"} fill />
            <span>{label}</span>
        </Link>
    );
};

export default ShowMoreLink;
