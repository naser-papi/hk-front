"use client";
import dynamic from "next/dynamic";
import { useClientApi } from "@/hooks";
import { useEffect, useState } from "react";
import { EventsAPIPath } from "@/constants/api-path";
import { ICalendarEvent, ICMSListApiResponse } from "@/types/base";
import { EventDto } from "@/types/dto";
import { GenerateCalendarEvent } from "@/helpers/event-helper";

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
                const list = resp.data.map((row) => GenerateCalendarEvent(row));
                setCalendarEvents(list.flatMap((x) => x));
                console.log(
                    "list",
                    list.flatMap((x) => x)
                );
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
