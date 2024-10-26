import { cva, VariantProps } from "class-variance-authority";

import { BaseHTMLAttributes } from "react";
import {
    faCalendarDays,
    faMessage,
} from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { IconLabel, ImageKit, LinkButton } from "@/components";
import { formatEventDate, useTranslation } from "@/helpers";
import "./event-card.css";

const variants = cva([
    "event-card",
    "min-w-[300px]",
    "pr-[90px]",
    "grid",
    "relative",
    "[&>img]:z-0",
    "xs:min-w-[360px]",
]);

const infoVariants = cva([
    "grid",
    "gap-y-3",
    "text-primary",
    "text-lg",
    "font-semibold",
    "p-3",
    "z-10",
    "[&>h4]:row-container",
    "w-full",
    "h-full",
    "bg-white",
    "text-sm",
    "xs:text-base",
]);

interface EventCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    ikUrl: string;
    desc: string;
    date: string;
    commentsCount: number;
    href: string;
}

const EventCard = ({
    ikUrl,
    desc,
    date,
    commentsCount,
    href,
}: EventCardProps) => {
    const { t } = useTranslation();
    return (
        <div className={variants({})}>
            <ImageKit src={ikUrl} alt={"event"} fill />
            <section className={infoVariants({})}>
                <h4>
                    <IconLabel
                        icon={faCalendarDays}
                        label={formatEventDate(date)}
                    />
                    <IconLabel icon={faMessage} label={commentsCount} />
                </h4>
                <p>{desc}</p>
                <LinkButton label={t("common.detailDot")} href={href} />
            </section>
        </div>
    );
};

export default EventCard;
