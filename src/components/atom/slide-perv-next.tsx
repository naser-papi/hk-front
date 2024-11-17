import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDoubleLeft,
    faChevronDoubleRight,
} from "@awesome.me/kit-026a927a83/icons/classic/solid";

const variants = cva(
    [
        "w-full",
        "flex",
        "items-center",
        "justify-between",
        "gap-4",
        "p-2",
        "[&>svg]:text-black",
    ],
    {
        variants: {
            mode: {
                both: [],
                left: ["[&>svg:nth-of-type(2)]:invisible"],
                right: ["[&>svg:nth-of-type(1)]:invisible"],
                none: ["[&>svg]:hidden"],
            },
        },
        defaultVariants: {
            mode: "left",
        },
    }
);

interface SlidePervNextProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    leftClick?: () => void;
    rightClick?: () => void;
}

const SlidePervNext = ({ mode, leftClick, rightClick }: SlidePervNextProps) => {
    return (
        <div className={variants({ mode })}>
            <FontAwesomeIcon icon={faChevronDoubleLeft} onClick={leftClick} />
            <FontAwesomeIcon icon={faChevronDoubleRight} onClick={rightClick} />
        </div>
    );
};

export default SlidePervNext;
