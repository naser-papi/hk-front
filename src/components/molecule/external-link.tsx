import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import { OpenLinkBox } from "@/components";
import urlImg from "assets/images/url.jpeg";

const variants = cva([
    "external-link",
    "min-w-[300px]",
    "relative",
    "[&>img]:z-0",
    "[&>img]:opacity-50",
    "[&>img]:rounded-lg",
]);

const infoVariants = cva([
    "z-10",
    "relative",
    "w-full",
    "grid",
    "place-items-center",
    "gap-y-4",
    "p-4",
    "text-secondary",
    "text-lg",
    "font-semibold",
    "[&>img]:logo-rounded",
    "[&>img]:drop-shadow-lg",
]);
interface ExternalLinkProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    logo: StaticImageData;
    title: string;
    href: string;
}
const ExternalLink = ({ logo, title, href }: ExternalLinkProps) => {
    return (
        <div className={variants({})}>
            <Image src={urlImg} alt={"url"} fill />
            <section className={infoVariants({})}>
                <Image src={logo} alt={"logo"} />
                <h2>{title}</h2>
                <OpenLinkBox title={"Go To Page"} href={href} />
            </section>
        </div>
    );
};

export default ExternalLink;
