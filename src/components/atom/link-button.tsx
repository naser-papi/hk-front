import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDoubleRight } from "@awesome.me/kit-026a927a83/icons/classic/solid";

const linkButtonVariants = cva(
    [
        "link-button",
        "normal-flex-row-container",
        "border-b-2",
        "border-black",
        "text-label",
        "text-black",
        "[&>svg]:text-secondary",
    ],
    {
        variants: {
            disabled: {
                true: [],
                false: [],
            },
            hover: {
                true: [],
                false: [],
            },
        },
    }
);

interface LinkButtonProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof linkButtonVariants> {
    label: string;
}
const LinkButton = ({ label, href, disabled, hover }: LinkButtonProps) => {
    return (
        <Link href={href} className={linkButtonVariants({ disabled, hover })}>
            <span>{label}</span>
            <FontAwesomeIcon icon={faChevronDoubleRight} />
        </Link>
    );
};

export default LinkButton;
