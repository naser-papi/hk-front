import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import Link from "next/link";

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
            },
        },
    }
);

interface NlLogoProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof logoVariants> {}

const NlLogo = ({ type }: NlLogoProps) => {
    return (
        <Link href={"/"}>
            <h1 className={logoVariants({ type })}>H</h1>
        </Link>
    );
};

export default NlLogo;
