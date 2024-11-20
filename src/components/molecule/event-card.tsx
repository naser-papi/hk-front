import { cva, VariantProps } from "class-variance-authority";
import trans from "@/helpers/i18n/server";
import { BaseHTMLAttributes } from "react";
import {
    faCalendarDays,
    faMessage,
} from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { IconLabel, ImageKit, LinkButton } from "@/components/atom";
import { formatEventDate } from "@/helpers";

const variants = cva([
    "event-card",
    "w-full",
    "@container",
    "min-w-[300px]",
    "pe-[90px]",
    "grid",
    "relative",
    "[&>img]:z-0",
    "@sm:min-w-[360px]",
    "@3xl:h-[420px]",
    "@5xl:pe-[120px]",
]);

const infoVariants = cva([
    "bg-gradient-to-r",
    "from-white",
    "to-transparent",
    "from-50%",
    "to-100%",
    "info-part",
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
    "text-sm",
    "@sm:text-base",
    "@3xl:text-2xl",
    "@3xl:[&_.link-button]:text-2xl",
    "rtl:bg-gradient-to-l",
    "[&_.icon-label:nth-of-type(2)]:hidden",
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
                <LinkButton label={trans("common.detailDot")} href={href} />
            </section>
        </div>
    );
};

export default EventCard;
