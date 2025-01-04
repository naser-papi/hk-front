"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useMemo, useState } from "react";
import { BulletPoint } from "@/components/atom";

interface ContainerProps {
    children: JSX.Element[];
}

const BulletCarouselContainer = ({ children }: ContainerProps) => {
    const [index, setIndex] = useState(1);
    const visible = useMemo(() => {
        switch (index) {
            case 1:
                return `[&>.card:nth-of-type(1)]:flex`;
            case 2:
                return `[&>.card:nth-of-type(2)]:flex`;
            case 3:
                return `[&>.card:nth-of-type(3)]:flex`;
            case 4:
                return `[&>.card:nth-of-type(4)]:flex`;
            case 5:
                return `[&>.card:nth-of-type(5)]:flex`;
            case 6:
                return `[&>.card:nth-of-type(6)]:flex`;
            case 7:
                return `[&>.card:nth-of-type(7)]:flex`;
            case 8:
                return `[&>.card:nth-of-type(8)]:flex`;
            case 9:
                return `[&>.card:nth-of-type(9)]:flex`;
            case 10:
                return `[&>.card:nth-of-type(10)]:flex`;
        }
    }, [index]);

    useEffect(() => {
        const interval = setTimeout(() => {
            const nextIndex = index + 1;
            if (nextIndex > children.length) {
                setIndex(1);
            } else {
                setIndex(nextIndex);
            }
        }, 10 * 1000);
        return () => clearTimeout(interval);
    }, [index]);

    const bullets = children.map((_, order) => (
        <li
            className={"cursor-pointer"}
            onClick={() => setIndex(order + 1)}
            key={order}
        >
            <BulletPoint active={index === order + 1} />
        </li>
    ));
    return (
        <article
            className={twMerge(
                "bullet-carousel-container relative w-full [&>.card]:hidden",
                visible
            )}
        >
            {children}
            <ul
                className={"mt-2 flex w-full items-center justify-center gap-3"}
            >
                {bullets}
            </ul>
        </article>
    );
};

export default BulletCarouselContainer;
