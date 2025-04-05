"use server";
import { cva, VariantProps } from "class-variance-authority";
import trans from "@/helpers/i18n/server";
import { BaseHTMLAttributes } from "react";
import {
    faCalendarDays,
    faCalendarExclamation,
    faClock,
    faHouseDay,
} from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { IconLabel, ImageKit, LinkButton } from "@/components/atom";
import { formatEventDate, formatLocaleString } from "@/helpers";
import { GetLocaleFromCookie } from "@/services/common";

const variants = cva(
    [
        "event-card",
        "w-full",
        "min-w-[300px]",
        "pe-[90px]",
        "grid",
        "relative",
        "[&>img]:z-0",
        "@sm:min-w-[360px]",
        "@3xl:h-[260px]",
        "@5xl:pe-[120px]",
    ],
    {
        variants: {
            selected: {
                true: [],
                false: [],
            },
            eventType: {
                Online: [],
                InPlace: [],
            },
            eventSubject: {
                Learning: [],
                Hobby: [],
                Entertainment: [],
            },
        },
    }
);

const infoVariants = cva(
    [
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
        "md:text-xl",
    ],
    {
        variants: {
            eventType: {
                Online: ["from-lightYellow"],
                InPlace: [],
            },
            eventSubject: {
                Learning: [],
                Hobby: [],
                Entertainment: [],
            },
        },
    }
);

interface EventCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    ikUrl: string;
    desc: string;
    date: string;
    href: string;
    commentsCount: number;
    durationPerDay: number;
    eventTimeInDay: number;
    address?: string;
}

const EventCard = ({
    ikUrl,
    desc,
    date,
    commentsCount,
    eventType,
    eventSubject,
    durationPerDay,
    eventTimeInDay,
    address,
    href,
}: EventCardProps) => {
    const locale = GetLocaleFromCookie();
    return (
        <div className={variants({ eventType })}>
            <ImageKit src={ikUrl} alt={"event"} fill />
            <section className={infoVariants({ eventType })}>
                <h4>
                    <IconLabel
                        icon={faCalendarDays}
                        label={formatEventDate(date, locale)}
                    />
                    <IconLabel
                        icon={faCalendarExclamation}
                        label={
                            eventType === "Online"
                                ? trans("common.online")
                                : trans("common.inPlace")
                        }
                    />
                </h4>
                <h4>
                    <IconLabel
                        icon={faHouseDay}
                        label={formatLocaleString(
                            trans("common.durationPerDay"),
                            durationPerDay || 0
                        )}
                    />
                    <IconLabel
                        icon={faClock}
                        label={formatLocaleString(
                            trans("common.eventTimeInDay"),
                            eventTimeInDay || 0
                        )}
                    />
                </h4>
                <p>{desc}</p>
                <LinkButton label={trans("common.detailDot")} href={href} />
            </section>
        </div>
    );
};

export default EventCard;
