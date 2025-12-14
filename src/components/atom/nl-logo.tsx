import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";

const logoVariants = cva(
    ["nl-logo", "text-heading", "border-cyan", "drop-shadow-lg"],
    {
        variants: {
            type: {
                default: ["text-secondary", "stroke-normal"],
                flag: [
                    "bg-[url('/assets/images/flag-circle.png')]",
                    "bg-contain",
                    "bg-center",
                    "text-transparent",
                    "bg-clip-text",
                ],
                image: [
                    "flex",
                    "items-center",
                    "justify-center",
                    "relative",
                ],
            },
        },
    }
);

interface NlLogoProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof logoVariants> {}

const NlLogo = ({ type = "default" }: NlLogoProps) => {
    return (
        <Link href={"/"}>
            {type === "image" ? (
                <Image
                    src="/assets/logo/small.svg"
                    alt="HollandKade Logo"
                    width={173}
                    height={134}
                    className="h-auto w-auto max-h-[60px] md:max-h-[80px] drop-shadow-lg"
                    priority
                />
            ) : (
                <h1 className={logoVariants({ type })}>H</h1>
            )}
        </Link>
    );
};

export default NlLogo;
