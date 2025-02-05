import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import { faArrowUpRightFromSquare } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const variants = cva([
    "flex",
    "text-base",
    "font-normal",
    "text-white",
    "items-center",
    "justify-between",
    "w-full",
    "bg-altLight",
    "p-2",
    "rounded-lg",
]);

interface OpenLinkBoxProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof variants> {
    title: string;
    href: string;
}

const OpenLinkBox = ({ title, href, ...rest }: OpenLinkBoxProps) => {
    return (
        <Link {...rest} className={variants({})} href={href}>
            <span>{title}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
    );
};

export default OpenLinkBox;
