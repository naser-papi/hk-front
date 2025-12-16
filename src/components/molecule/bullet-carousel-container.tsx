"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useMemo, useState } from "react";
import { BulletPoint } from "@/components/atom";

interface ContainerProps {
    children: JSX.Element[];
    variant?: "default" | "hero";
}

const BulletCarouselContainer = ({ children, variant = "default" }: ContainerProps) => {
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
    }, [index, children.length]);

    const bullets = children.map((_, order) => (
        <li
            className={"cursor-pointer transition-opacity hover:opacity-80"}
            onClick={() => setIndex(order + 1)}
            key={order}
            aria-label={`Go to slide ${order + 1}`}
        >
            <BulletPoint active={index === order + 1} />
        </li>
    ));

    if (variant === "hero") {
        return (
            <article
                className={twMerge(
                    "bullet-carousel-container relative w-full [&>.card]:hidden [&>.card]:transition-opacity [&>.card]:duration-1000 [&>.card]:ease-in-out",
                    visible
                )}
            >
                {children}
                {/* Bullet navigation positioned absolutely at bottom */}
                <ul
                    className={
                        "absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-3 md:bottom-8"
                    }
                    role="tablist"
                    aria-label="Carousel navigation"
                >
                    {bullets}
                </ul>
            </article>
        );
    }

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
