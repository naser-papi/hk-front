"use client";
import { useClientApi } from "@/hooks";
import { useEffect } from "react";
import { EventsAPIPath } from "@/constants/api-path";
import { ICMSListApiResponse } from "@/types/base";
import { EventDto } from "@/types/dto";
import EventsState from "@/stores/events";
import MapEventLocations from "@/components/organism/map-event-locations";
import MapEventCardList from "@/components/organism/map-event-card-list";

const EventMapviewContainer = () => {
    const { callRestAPI } = useClientApi();
    useEffect(() => {
        (async () => {
            const apiInfo = { ...EventsAPIPath.getEventList };
            const resp =
                await callRestAPI<ICMSListApiResponse<EventDto>>(apiInfo);
            if (resp) {
                EventsState.list = resp.data;
            }
        })();
    }, []);
    return (
        <article className={"flex w-full flex-col gap-4"}>
            <MapEventLocations />
            <MapEventCardList />
        </article>
    );
};

export default EventMapviewContainer;
