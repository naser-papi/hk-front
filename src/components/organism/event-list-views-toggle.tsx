"use client";
import { useSnapshot } from "valtio/react";
import EventsState from "@/stores/events";
import { ButtonList } from "@/components/molecule";
import useTranslation from "@/helpers/i18n/use-translation";
import {
    faCalendarDays,
    faLocationDot,
    faRectangleList,
} from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { LocaleType, NestedKeyOf, ViewTypes } from "@/types/base";

const tabs: {
    icon: IconDefinition;
    text: NestedKeyOf<LocaleType>;
    key: ViewTypes;
}[] = [
    {
        icon: faRectangleList,
        text: "common.cardView",
        key: "CardList",
    },
    {
        icon: faLocationDot,
        text: "common.mapView",
        key: "MapView",
    },
    {
        icon: faCalendarDays,
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
