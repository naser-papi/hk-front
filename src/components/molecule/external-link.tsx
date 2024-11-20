import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Image from "next/image";
import { ImageKit, OpenLinkBox } from "@/components/atom";
import urlImg from "assets/images/url.jpeg";
import trans from "@/helpers/i18n/server";

const variants = cva([
    "w-full",
    "external-link",
    "min-w-[300px]",
    "relative",
    "[&>img]:z-0",
    "[&>img]:opacity-50",
    "[&>img]:rounded-lg",
    "@3xl:h-[300px]",
    "@5xl:h-[360px]",
]);

const infoVariants = cva([
    "z-10",
    "relative",
    "w-full",
    "h-full",
    "grid",
    "place-items-center",
    "gap-y-4",
    "p-4",
    "text-secondary",
    "text-lg",
    "font-semibold",
    "[&>img]:rounded-full",
    "[&>img]:drop-shadow-lg",
    "[&>img]:bg-white",
]);
interface ExternalLinkProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    logo: string;
    title: string;
    href: string;
}
const ExternalLink = ({ logo, title, href }: ExternalLinkProps) => {
    return (
        <div className={variants({})}>
            <Image src={urlImg} alt={"url"} fill />
            <section className={infoVariants({})}>
                <ImageKit src={logo} alt={"logo"} width={120} height={120} />
                <h2>{title}</h2>
                <OpenLinkBox title={trans("common.gotoPage")} href={href} />
            </section>
        </div>
    );
};

export default ExternalLink;
