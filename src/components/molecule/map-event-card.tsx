"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { EventDto } from "@/types/dto";
import { useCurrentLocale } from "next-i18n-router/client";
import useTranslation from "@/helpers/i18n/use-translation";
import Link from "next/link";
import { AsideRotator, IconLabel } from "@/components/atom";
import { faCalendarDays } from "@awesome.me/kit-026a927a83/icons/classic/regular";
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
            className={`relative flex w-full cursor-pointer items-center gap-4 rounded-lg p-4 ${selected ? "bg-altLight" : "bg-primary"}`}
            {...rest}
        >
            <AsideRotator rotate={"-rotate-45"}>
                <strong>
                    {eventData.eventType === "Online"
                        ? t("common.online")
                        : t("common.inPlace")}
                </strong>
            </AsideRotator>
            <img
                src={eventData.cardImage?.url}
                alt={"Holland Kade event"}
                className={
                    "h-[120px] w-[120px] rounded-s-lg border border-gray-200"
                }
            />
            <aside
                className={
                    "[&_h4]:text-label flex flex-col gap-4 [&_h4]:flex [&_h4]:gap-4"
                }
            >
                <h4>{eventData.title}</h4>
                <h4>
                    <IconLabel
                        icon={faCalendarDays}
                        intend={"tertiary"}
                        label={formatEventDate(
                            eventData.dateAndTime,
                            locale!,
                            true
                        )}
                    />
                </h4>
                <Link
                    href={href}
                    className={
                        "text-label md:text-alt-title cursor-help text-secondary"
                    }
                >
                    {t("common.detailDot")}
                </Link>
            </aside>
        </div>
    );
};

export default MapEventCard;
