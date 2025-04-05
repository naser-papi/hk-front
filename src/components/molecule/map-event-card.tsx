"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { EventDto } from "@/types/dto";
import { useCurrentLocale } from "next-i18n-router/client";
import useTranslation from "@/helpers/i18n/use-translation";
import Link from "next/link";
import { IconLabel } from "@/components/atom";
import {
    faCalendarDays,
    faCalendarExclamation,
} from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { formatEventDate } from "@/helpers";
import i18nConfig from "@/i18nConfig";

interface MapEventCardProps extends HTMLAttributes<HTMLDivElement> {
    eventData: EventDto;
    selected: boolean;
    href: string;
}

const MapEventCard = ({
    eventData,
    selected,
    href,
    ...rest
}: MapEventCardProps) => {
    const { t } = useTranslation();
    const locale = useCurrentLocale(i18nConfig);
    const curRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (curRef.current) {
            curRef.current.scrollIntoView({
                behavior: "smooth", // Smooth scrolling for a better user experience
                block: "nearest", // Center the card in the container
            });
        }
    }, [curRef, selected]);
    return (
        <div
            ref={selected ? curRef : null}
            className={`flex w-full cursor-pointer items-center gap-4 rounded-lg ${selected ? "bg-altLight" : "bg-primary"}`}
            {...rest}
        >
            <img
                src={eventData.cardImage?.url}
                alt={"Holland Kade event"}
                className={
                    "h-[120px] w-[120px] rounded-s-lg border border-gray-200"
                }
            />
            <aside className={"flex flex-col gap-4 [&_h4]:flex [&_h4]:gap-4"}>
                <h4>{eventData.title}</h4>
                <h4>
                    <IconLabel
                        icon={faCalendarDays}
                        intend={"tertiary"}
                        label={formatEventDate(eventData.dateAndTime, locale!)}
                    />
                    <IconLabel
                        icon={faCalendarExclamation}
                        intend={"tertiary"}
                        label={
                            eventData.eventType === "Online"
                                ? t("common.online")
                                : t("common.inPlace")
                        }
                    />
                </h4>
                <Link href={href} className={"cursor-help text-secondary"}>
                    {t("common.detailDot")}
                </Link>
            </aside>
        </div>
    );
};

export default MapEventCard;
