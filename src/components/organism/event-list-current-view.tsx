"use client";
import { useSnapshot } from "valtio/react";
import EventsState from "@/stores/events";

interface EventListCurrentViewProps {
    children: [JSX.Element, JSX.Element, JSX.Element];
}

const EventListCurrentView = ({ children }: EventListCurrentViewProps) => {
    const { selectedView } = useSnapshot(EventsState);
    switch (selectedView) {
        case "CardList":
            return children[0];
        case "MapView":
            return children[1];
        case "CalendarView":
            return children[2];
    }
};

export default EventListCurrentView;
