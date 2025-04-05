"use client";
import { useSnapshot } from "valtio/react";
import EventsState from "@/stores/events";
import { Container, MapEventCard, NoData } from "@/components/molecule";
import { EventDto } from "@/types/dto";

const MapEventCardList = () => {
    const { list, selectedLocationKey } = useSnapshot(EventsState);

    const cards = list?.map((item, index) => (
        <MapEventCard
            key={item.documentId}
            eventData={item as EventDto}
            selected={selectedLocationKey === item.documentId}
            onClick={() => (EventsState.selectedLocationKey = item.documentId)}
            href={`/events/${item.documentId}`}
        />
    ));
    if (cards) return <Container className={"max-h-72"}>{cards}</Container>;
    return <NoData />;
};

export default MapEventCardList;
