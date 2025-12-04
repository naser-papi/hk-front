"use client";
import { useSnapshot } from "valtio/react";
import EventsState from "@/stores/events";
import { ButtonList } from "@/components/molecule";
import useTranslation from "@/helpers/i18n/use-translation";
import { FaLocationDot, FaRegCalendarDays, FaRegRectangleList } from "react-icons/fa6";
import { IconType } from "react-icons";
import { LocaleType, NestedKeyOf, ViewTypes } from "@/types/base";

const tabs: {
    icon: IconType;
    text: NestedKeyOf<LocaleType>;
    key: ViewTypes;
}[] = [
    {
        icon: FaRegRectangleList,
        text: "common.cardView",
        key: "CardList",
    },
    {
        icon: FaLocationDot,
        text: "common.mapView",
        key: "MapView",
    },
    {
        icon: FaRegCalendarDays,
        text: "common.calendarView",
        key: "CalendarView",
    },
];
const EventListViewsToggle = () => {
    const { selectedView } = useSnapshot(EventsState);
    const { t } = useTranslation();
    return (
        <ButtonList>
            {tabs.map((tab) => (
                <ButtonList.Button
                    key={tab.key}
                    isSelected={tab.key === selectedView}
                    text={t(tab.text)}
                    icon={tab.icon}
                    onClick={() => (EventsState.selectedView = tab.key)}
                />
            ))}
        </ButtonList>
    );
};

export default EventListViewsToggle;
