"use client";
import dynamic from "next/dynamic";
import { useClientApi } from "@/hooks";
import { useEffect, useState } from "react";
import { EventsAPIPath } from "@/constants/api-path";
import { ICalendarEvent, ICMSListApiResponse } from "@/types/base";
import { EventDto } from "@/types/dto";
import { addDurationToDateTime, formatSubstring } from "@/helpers";

const CalendarView = dynamic(
    () => import("@/components/molecule/calendar-view"),
    {
        ssr: false, // Disable SSR
    }
);

const EventCalendarViewContainer = () => {
    const { callRestAPI } = useClientApi();
    const [calendarEvents, setCalendarEvents] = useState<ICalendarEvent[]>([]);
    useEffect(() => {
        (async () => {
            const apiInfo = { ...EventsAPIPath.getEventList };
            const resp =
                await callRestAPI<ICMSListApiResponse<EventDto>>(apiInfo);
            if (resp) {
                const list: ICalendarEvent[] = resp.data.map((row) => ({
                    id: row.documentId,
                    title: formatSubstring(row.title, 30),
                    start: new Date(row.dateAndTime),
                    end: addDurationToDateTime(
                        new Date(row.dateAndTime),
                        row.durationPerDay
                    ),
                    href: "",
                }));
                setCalendarEvents(list);
            }
        })();
    }, []);
    return (
        <article className={"flex w-full flex-col gap-4"}>
            <CalendarView eventList={calendarEvents} />
        </article>
    );
};

export default EventCalendarViewContainer;
