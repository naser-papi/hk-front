"use client";
import { twMerge } from "tailwind-merge";
import { useMemo, useState } from "react";
import { BulletPoint } from "@/components";

interface ContainerProps {
    children: JSX.Element[];
}

const Container = ({ children }: ContainerProps) => {
    const [index, setIndex] = useState(1);
    const visible = useMemo(() => {
        switch (index) {
            case 1:
                return `[&>.banner-card:nth-of-type(1)]:block`;
            case 2:
                return `[&>.banner-card:nth-of-type(2)]:block`;
            case 3:
                return `[&>.banner-card:nth-of-type(3)]:block`;
            case 4:
                return `[&>.banner-card:nth-of-type(4)]:block`;
            case 5:
                return `[&>.banner-card:nth-of-type(5)]:block`;
        }
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
        <div
            className={twMerge(
                "banner-carousel relative [&>.banner-card]:hidden",
                visible
            )}
        >
            {children}
            <ul
                className={"mt-5 flex w-full items-center justify-center gap-3"}
            >
                {bullets}
            </ul>
        </div>
    );
};

export default Container;
