"use client";
import dynamic from "next/dynamic";
import { useClientApi } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import { EventsAPIPath } from "@/constants/api-path";
import { ICalendarEvent, ICMSListApiResponse } from "@/types/base";
import { EventDto } from "@/types/dto";
import { GenerateCalendarEvent } from "@/helpers/event-helper";
import EventsState from "@/stores/events";
import { useSnapshot } from "valtio/react";

const CalendarView = dynamic(
    () => import("@/components/molecule/calendar-view"),
    {
        ssr: false, // Disable SSR
    }
);

const EventCalendarViewContainer = () => {
    const { callRestAPI } = useClientApi();
    const [calendarEvents, setCalendarEvents] = useState<ICalendarEvent[]>([]);
    const { list } = useSnapshot(EventsState);
    useEffect(() => {
        (async () => {
            const apiInfo = { ...EventsAPIPath.getEventList };
            const resp =
                await callRestAPI<ICMSListApiResponse<EventDto>>(apiInfo);
            if (resp) {
                const cList = resp.data.map((row) =>
                    GenerateCalendarEvent(row)
                );
                setCalendarEvents(cList.flatMap((x) => x));
                EventsState.list = resp.data;
            }
        })();
    }, []);
    const onEventSelected = useCallback(
        (event: ICalendarEvent) => {
            if (!list) return;
            const dto = list!.find((event) => event.id === event.id);
            EventsState.showDetailsModal = dto as EventDto;
        },
        [list]
    );
    return (
        <article className={"flex w-full flex-col gap-4"}>
            <CalendarView
                eventList={calendarEvents}
                onSelectEvent={onEventSelected}
            />
        </article>
    );
};

export default EventCalendarViewContainer;
